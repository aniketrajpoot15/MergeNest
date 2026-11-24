# System Architecture

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** High-level architectural specification of MergeNest — modular monolith design, module boundaries, request lifecycle, multi-tenancy model, and external integration points.
> - **Who reads it:** AI coding assistants and developers before creating modules, middleware, or cross-cutting features.
> - **When to update:** When new modules are created, architectural boundaries change, or new external services are added.

---

## 1. Architecture Overview

MergeNest follows a **Modular Monolith** architecture pattern. All backend capabilities run within a single Express.js process, organized into strictly bounded feature modules located in `src/server/src/modules/`.

### Why Modular Monolith?
- **Simplicity:** Single repository, single build, and single deployment target on free-tier infrastructure.
- **High Cohesion, Low Coupling:** Each module owns its controller, service, data model, validation, and routes, avoiding spaghetti code while avoiding the operational overhead of microservices (distributed transactions, service discovery, networking latency).
- **Evolutionary Architecture:** Clean module boundaries allow individual modules (such as AI or Notifications) to be extracted into independent microservices if traffic demands in the future.

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                       React SPA (Vite)                      │
│                  Tailwind CSS v4 + Zustand                  │
└──────────────┬──────────────────────────────▲───────────────┘
               │ HTTP REST Requests           │ WebSockets (Socket.IO)
               ▼                              │
┌─────────────────────────────────────────────┴───────────────┐
│                    Express.js Backend                       │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                   Middleware Pipeline                 │  │
│  │ [logger] → [cors] → [helmet] → [auth] → [tenantScope] │  │
│  └───────────────────────────┬───────────────────────────┘  │
│                              ▼                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    Feature Modules                    │  │
│  │  auth │ users │ workspaces │ projects │ github        │  │
│  │  reviews │ ai │ notifications                         │  │
│  └───────┬───────────────┬─────────────────┬─────────────┘  │
└──────────┼───────────────┼─────────────────┼────────────────┘
           │               │                 │
           ▼               ▼                 ▼
    ┌─────────────┐ ┌─────────────┐   ┌─────────────┐
    │   MongoDB   │ │  GitHub API │   │ Google GenAI│
    │  Atlas M0   │ │  & Webhooks │   │ (Gemini API)│
    └─────────────┘ └─────────────┘   └─────────────┘
```

---

## 2. Module Boundaries & Responsibilities

| Module | Core Responsibility | External Dependencies | Inter-Module Dependencies |
|---|---|---|---|
| **auth** | Registration, login, password hashing, JWT cookies, OAuth | GitHub OAuth | `users` |
| **users** | User profile data, skills, avatar, user lookups | — | — |
| **workspaces** | Workspaces, memberships, email invitations, RBAC | — | `users` |
| **projects** | Project definitions within workspaces, project settings | — | `workspaces` |
| **github** | Octokit integration, repo sync, branches, PRs, webhooks | GitHub REST API, Webhooks | `projects`, `users` |
| **reviews** | Diff viewing, inline review comments, threads, PR status | — | `projects`, `github` |
| **ai** | Gemini API prompt workflows, PR summary, reviews, tests | Google Gemini API | `projects`, `github` |
| **notifications**| Socket.IO push alerts, notification inbox, activity log | Socket.IO | All modules (via events) |

### Strict Inter-Module Communication Rules
1. **No Cross-Module Model Imports:** A module must **never** import another module's Mongoose model directly. Cross-module data operations must always call the corresponding module's exported **service**.
2. **Workspace Isolation:** Every module dealing with project or team resources must enforce workspace filtering (`workspaceId`).

---

## 3. Request Lifecycle & Middleware Pipeline

Every HTTP request to MergeNest passes through a deterministic middleware chain before reaching route handlers:

```
Incoming Request
       │
       ▼
1. Security & Parsing Middleware (Helmet, CORS, Express JSON, Cookie-Parser)
       │
       ▼
2. Request Logger (Logs method, route, timestamp, IP)
       │
       ▼
3. Authentication Middleware (`authenticate`)
   - Reads JWT from httpOnly cookie
   - Verifies signature and attaches `req.user`
       │
       ▼
4. Tenant Context Middleware (`workspaceContext`)
   - Extracts `workspaceId` from header or URL parameter
   - Validates user membership in the workspace
   - Attaches `req.workspace` and `req.membership`
       │
       ▼
5. Authorization Middleware (`authorize(requiredRole)`)
   - Verifies user role (Owner, Admin, Member) against action permission matrix
       │
       ▼
6. Request Validation Middleware (`validate(zodSchema)`)
   - Validates `req.body`, `req.params`, or `req.query`
   - Returns 400 Bad Request with field-level errors if invalid
       │
       ▼
7. Controller Handler (Orchestrates request/response)
       │
       ▼
8. Service Layer (Executes business logic, queries database)
       │
       ▼
9. Standard Response Helper (`ApiResponse.send(res, data, message)`)
```

---

## 4. Multi-Tenancy Architecture

MergeNest uses a **Logical Multi-Tenancy with Shared Database** pattern:
- **Tenant Root:** The `Workspace` collection is the tenant boundary.
- **Tenant Identification:** Every workspace-owned resource (Projects, Repositories, Pull Requests, Comments, Notifications) contains an indexed `workspaceId` field.
- **Tenant Enforcement:** 
  - All database queries filter explicitly by `workspaceId`.
  - Backend authorization middleware strictly checks that `req.user._id` has an active `WorkspaceMember` record for the given `workspaceId`.
  - Users can belong to multiple workspaces with different roles in each.

```
MergeNest System
├── Workspace 1: "Acme Corp" (ID: ws_01)
│   ├── Members: Alice (Owner), Bob (Member)
│   └── Projects: Project Alpha (workspaceId: ws_01)
└── Workspace 2: "Open Source Team" (ID: ws_02)
    ├── Members: Bob (Owner), Charlie (Admin)
    └── Projects: Project Beta (workspaceId: ws_02)
```

---

## 5. Real-Time Architecture (WebSockets)

- **Engine:** `Socket.IO` attached to the primary Node.js HTTP server.
- **Authentication Handshake:** WebSocket connections authenticate via JWT read from the connection cookies during handshake. Unauthenticated sockets are rejected immediately.
- **Room Strategy:**
  - **User Rooms:** `user:{userId}` — Each user automatically joins their personal room upon connecting. Targeted notifications (PR comment, mention, invite) are emitted directly to this room.
  - **Project/PR Rooms:** `pr:{pullRequestId}` — Users viewing an active pull request join its room to receive live review comments and thread updates without polling.

---

## 6. External Service Integrations

1. **GitHub API (Octokit):**
   - User initiates OAuth code flow → backend exchanges authorization code for user access token.
   - Access tokens are encrypted using AES-256 before storage in MongoDB.
   - API requests for branches, diffs, and commits are proxied server-side via Octokit.
2. **GitHub Webhooks:**
   - Webhook endpoint (`/api/v1/github/webhooks`) receives push and pull request events.
   - Raw payload is validated against `X-Hub-Signature-256` using the stored repo webhook secret.
3. **Google Gemini API:**
   - Server-side execution only (API key never exposed to client).
   - Dual-model strategy: `gemini-2.0-flash` for fast, lightweight tasks (PR summaries, code explanation) and `gemini-1.5-pro` for deep, complex tasks (in-depth code review, edge-case test generation).

---

## 7. Folder Structure

```
MergeNest/
├── docs/                      # Documentation system
├── learning/                  # Mentorship & learning tracking
├── progress/                  # Granular progress checklists
└── src/
    ├── client/                # React 18 SPA (Vite + Tailwind CSS v4)
    │   └── src/
    │       ├── components/    # Reusable UI components
    │       ├── pages/         # View/Page components
    │       ├── stores/        # Zustand state stores
    │       ├── services/      # Axios API clients
    │       ├── hooks/         # Custom React hooks
    │       └── utils/         # Frontend helper functions
    └── server/                # Node.js / Express Backend
        └── src/
            ├── config/        # Database, environment validation
            ├── modules/       # Bounded feature modules
            │   ├── auth/
            │   ├── users/
            │   ├── workspaces/
            │   ├── projects/
            │   ├── github/
            │   ├── reviews/
            │   ├── ai/
            │   └── notifications/
            ├── shared/        # Cross-cutting utilities & middleware
            │   ├── middleware/# authenticate, workspaceContext, errorHandler
            │   └── utils/     # ApiError, ApiResponse, asyncHandler
            ├── socket/        # Socket.IO initialization and event dispatchers
            ├── app.js         # Express application configuration
            └── server.js      # Server bootstrap and port listener
```
