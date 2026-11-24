# MergeNest — Documentation Creation Master Plan

> **Purpose:** This is the single instruction file that defines EVERY documentation file in the project. When it's time to create a file, read this plan and follow the specification exactly. No guessing, no inconsistency.
>
> **How to use:** Find the file by name or by phase → read its specification → create it with the exact sections listed → fill in content based on the descriptions.

---

## Quick Reference: All Files by Phase

### Phase 0 — Before Any Code (Day 1)

| # | File Path | Purpose |
|---|---|---|
| 1 | `README.md` | Project overview for GitHub visitors |
| 2 | `AGENTS.md` | AI coding instructions (single source of truth) |
| 3 | `CLAUDE.md` | Pointer to AGENTS.md + Claude-specific notes |
| 4 | `.gitignore` | Files to exclude from git |
| 5 | `.env.example` | Required environment variable names |
| 6 | `docs/01_Product/PRD.md` | Product requirements document |
| 7 | `docs/03_Architecture/SYSTEM_ARCHITECTURE.md` | High-level system design |
| 8 | `docs/03_Architecture/DATABASE_DESIGN.md` | MongoDB collections and schemas |
| 9 | `learning/LEARNING_PROFILE.md` | Developer's current skill levels |
| 10 | `progress/STAGES_AND_STEPS.md` | Master breakdown of every stage and step |
| 11 | `progress/CURRENT_STATUS.md` | Live tracker: current, completed, upcoming steps |

### Phase 1 — During Auth + Workspaces + Projects (Weeks 1-2)

| # | File Path | Purpose |
|---|---|---|
| 10 | `SETUP.md` | Local development setup guide |
| 11 | `CONTRIBUTING.md` | Git workflow and development process |
| 12 | `docs/02_Design/DESIGN_SYSTEM.md` | UI design tokens and patterns |
| 13 | `docs/03_Architecture/BACKEND_ARCHITECTURE.md` | Backend structure and patterns |
| 14 | `docs/03_Architecture/FRONTEND_ARCHITECTURE.md` | Frontend structure and patterns |
| 15 | `docs/03_Architecture/AUTHORIZATION_DESIGN.md` | RBAC and multi-tenant design |
| 16 | `docs/04_API/API_STANDARDS.md` | API conventions and formats |
| 17 | `docs/05_Security/SECURITY.md` | All security requirements |
| 18 | `docs/09_Testing/TESTING_STRATEGY.md` | Testing approach and tools |
| 19 | `docs/03_Architecture/ADR/TEMPLATE.md` | ADR template |
| 20 | `docs/03_Architecture/ADR/001_modular_monolith.md` | First ADR |
| 21 | `docs/03_Architecture/ADR/002_database_decisions.md` | Database ADR |
| 22 | `docs/03_Architecture/ADR/003_authentication.md` | Auth ADR |

### Phase 2 — Before GitHub Integration (Week 3)

| # | File Path | Purpose |
|---|---|---|
| 23 | `docs/06_Integrations/GITHUB_INTEGRATION.md` | GitHub API, OAuth, webhooks |
| 24 | `docs/01_Product/USER_FLOWS.md` | Core user journeys |
| 25 | `docs/03_Architecture/DATA_FLOW.md` | Key operation flows |

### Phase 3 — Before AI Integration (Week 5)

| # | File Path | Purpose |
|---|---|---|
| 26 | `docs/08_AI/AI_ARCHITECTURE.md` | AI service design and patterns |

### Phase 4 — Before Real-Time Features (Week 8)

| # | File Path | Purpose |
|---|---|---|
| 27 | `docs/07_Realtime/REALTIME_ARCHITECTURE.md` | Socket.IO design |
| 28 | `docs/07_Realtime/REALTIME_EVENTS.md` | Event contracts |

### Phase 5 — Before Deployment (Week 8)

| # | File Path | Purpose |
|---|---|---|
| 29 | `docs/10_Deployment/DEPLOYMENT.md` | Docker, hosting, production config |

### Ongoing — Created As Needed

| File Path | Purpose | When |
|---|---|---|
| `docs/03_Architecture/ADR/NNN_*.md` | New architecture decisions | Whenever a significant technical decision is made |
| `learning/LEARNING_LOG.md` | Weekly learning entries | After each module/feature completion |
| `learning/INTERVIEW_PREP.md` | Interview Q&A | After each module/feature completion |
| `learning/SKILLS_TRACKER.md` | Checklist of all skills with status | Update after each module |

### Learning Files Created at Phase 0

| # | File Path | Purpose |
|---|---|---|
| 9 | `learning/LEARNING_PROFILE.md` | Current skill levels (AI reads for calibration) |
| 30 | `learning/LEARNING_ROADMAP.md` | Phase-by-phase: what to learn before & during each stage |
| 31 | `learning/SKILLS_TRACKER.md` | Master checklist of every skill with learning status |
| — | `learning/LEARNING_LOG.md` | Weekly entries (created ongoing, template in Phase 0) |
| — | `learning/INTERVIEW_PREP.md` | Interview Q&A (created ongoing, template in Phase 0) |

### V2 — Created When Building V2 Features

| File Path | Purpose | When |
|---|---|---|
| `docs/08_AI/RAG_DESIGN.md` | RAG pipeline design | When starting repo-aware AI |
| `docs/07_Realtime/COLLABORATIVE_EDITING.md` | Yjs + Monaco + CRDT design | When starting collaborative editor |
| `docs/08_AI/AI_EVALUATION.md` | AI quality evaluation | When systematically measuring AI quality |

---

## Detailed File Specifications

---

### FILE 1: `README.md`

**Phase:** 0 (before any code)
**Update when:** After each major phase completion (add screenshots, update setup instructions, update feature list)

**Sections:**

```
# MergeNest

## Overview
→ 3-4 sentences: what MergeNest is, what problem it solves
→ The one-line pitch from MERGENEST-BLUEPRINT.md

## Features
→ Bullet list of implemented features (update as features are completed)
→ Mark with ✅ (done) or 🚧 (in progress) or 📋 (planned)

## Tech Stack
→ Table with 2 columns: Technology | Purpose
→ Only list technologies actually in use (not planned ones)
→ Pull from MERGENEST-BLUEPRINT.md V1 tech stack

## Screenshots
→ Empty section initially, add screenshots after UI is built
→ Format: ![Feature Name](screenshots/feature-name.png)

## Getting Started
→ Prerequisites (Node.js version, MongoDB, etc.)
→ Point to SETUP.md for detailed instructions
→ Quick start: git clone → npm install → create .env → npm run dev

## Project Structure
→ Brief folder tree showing src/client and src/server
→ Point to BACKEND_ARCHITECTURE.md and FRONTEND_ARCHITECTURE.md for details

## Documentation
→ List of important docs with links:
  - [Product Requirements](docs/01_Product/PRD.md)
  - [System Architecture](docs/03_Architecture/SYSTEM_ARCHITECTURE.md)
  - [API Standards](docs/04_API/API_STANDARDS.md)
  - etc.

## License
→ MIT or your preferred license
```

**Content source:** MERGENEST-BLUEPRINT.md (tech stack, features), project structure (once created)

---

### FILE 2: `AGENTS.md`

**Phase:** 0 (before any code)
**Update when:** When new conventions are established, new modules are added, or AI behavior needs correction

**Sections:**

```
# MergeNest — AI Coding Instructions

## Project Overview
→ 3-5 sentences: what MergeNest is
→ Current phase of development (update as you progress)
→ Link to PRD.md and SYSTEM_ARCHITECTURE.md

## Documentation Map (Read Before Implementing)
→ Ordered list of docs to read before ANY implementation:
  1. MERGENEST-BLUEPRINT.md — scope and roadmap
  2. PRD.md — feature requirements
  3. SYSTEM_ARCHITECTURE.md — how the system is designed
  4. DATABASE_DESIGN.md — data models
  5. API_STANDARDS.md — API conventions
  6. SECURITY.md — security requirements
  7. Relevant module docs (GITHUB_INTEGRATION.md, AI_ARCHITECTURE.md, etc.)

## Architecture Rules
→ Modular monolith: modules live in server/src/modules/
→ Each module contains: controller, service, model, routes, validation, __tests__/
→ Services contain business logic; controllers handle HTTP request/response only
→ All database queries must include workspaceId for multi-tenant isolation
→ Never import another module's model directly — call its service
→ Follow existing patterns in the codebase before creating new ones

## Coding Conventions
→ File naming: kebab-case for files (user.controller.js, not UserController.js)
→ Variable/function naming: camelCase
→ Class naming: PascalCase
→ Constants: UPPER_SNAKE_CASE
→ Always use async/await, never raw .then() chains
→ Always wrap async route handlers with asyncHandler utility
→ Use descriptive variable names (not x, temp, data)
→ Every API response uses the standard response format (defined in API_STANDARDS.md)
→ Every error uses the custom ApiError class

## API Conventions
→ Reference API_STANDARDS.md for naming, pagination, error formats
→ All routes: /api/v1/{module}/{resource}
→ Use HTTP methods correctly: GET (read), POST (create), PUT/PATCH (update), DELETE (delete)
→ Always validate request body using validation middleware

## Security Rules (Non-Negotiable)
→ Never store JWT or tokens in localStorage — use httpOnly cookies only
→ Never expose GitHub access tokens to the frontend
→ Encrypt GitHub tokens at rest before storing in MongoDB
→ Always verify webhook signatures before processing
→ Every protected route must use authenticate middleware
→ Every workspace-scoped route must verify membership via workspaceContext middleware
→ Never trust IDs from the frontend alone — always verify ownership/membership
→ Never log tokens, passwords, or secrets
→ Treat all user input and repository content as untrusted

## Before Implementing Any Feature
→ 1. Read the relevant documentation listed above
→ 2. Check existing code in the same module for established patterns
→ 3. If a pattern exists, follow it
→ 4. If no pattern exists, propose the approach before implementing
→ 5. If requirements are unclear, ASK — do not guess

## What NOT to Do
→ Do not change approved architecture without explicit discussion
→ Do not rewrite or refactor code you were not asked to modify
→ Do not add npm dependencies without explaining why they're needed
→ Do not skip error handling, validation, or auth checks
→ Do not create new modules without updating SYSTEM_ARCHITECTURE.md
→ Do not add new database collections without updating DATABASE_DESIGN.md
→ Do not create API endpoints that don't follow API_STANDARDS.md
→ Do not duplicate functionality that exists in another module

## After Implementing a Feature
→ 1. Verify the implementation works (run relevant tests)
→ 2. If you added/changed a collection → update DATABASE_DESIGN.md
→ 3. If you added a module → update SYSTEM_ARCHITECTURE.md
→ 4. If you created new API patterns → verify they match API_STANDARDS.md

## Teaching & Mentorship Mode
→ The developer is learning while building (3rd year student, see learning/LEARNING_PROFILE.md)
→ When introducing a new concept:
    1. Explain it briefly (3-5 sentences, not a lecture)
    2. Explain why MergeNest needs it specifically
    3. Show the implementation
    4. After implementation, ask 2-3 verification questions
    5. Suggest entries for INTERVIEW_PREP.md
→ When the developer makes an error, explain WHY it's wrong, don't just fix it
→ Prioritize understanding over speed
```

**Content source:** MERGENEST-BLUEPRINT.md (project context), API_STANDARDS.md (API rules), SECURITY.md (security rules), BACKEND_ARCHITECTURE.md (module structure)

---

### FILE 3: `CLAUDE.md`

**Phase:** 0 (before any code)
**Update when:** Rarely — only if Claude-specific behavior needs adjustment

**Full content (this is the entire file):**

```
# CLAUDE.md

Read AGENTS.md for all project rules, conventions, and coding instructions.

## Claude-Specific Notes
- When creating new files, follow the module structure defined in docs/03_Architecture/BACKEND_ARCHITECTURE.md
- Run backend: cd src/server && npm run dev
- Run frontend: cd src/client && npm run dev
- Run tests: cd src/server && npm test
- MongoDB must be running locally or MONGODB_URI must be set in .env
```

---

### FILE 4: `.gitignore`

**Phase:** 0
**Update when:** When new tools or build outputs are introduced

**Content to include:**

```
→ node_modules/
→ .env
→ .env.local
→ .env.production
→ dist/
→ build/
→ .DS_Store
→ *.log
→ coverage/
→ .vscode/ (optional — some teams commit vscode settings)
→ *.swp
→ .idea/
```

---

### FILE 5: `.env.example`

**Phase:** 0 (basic), update each phase as new env vars are added
**Update when:** Every time a new env var is introduced in code

**Sections:**

```
# Server
→ PORT=5000
→ NODE_ENV=development

# Database
→ MONGODB_URI=mongodb://localhost:27017/mergenest

# Authentication
→ JWT_SECRET=your-jwt-secret-here
→ JWT_EXPIRES_IN=7d
→ COOKIE_SECRET=your-cookie-secret-here

# GitHub OAuth (add in Phase 2)
→ GITHUB_CLIENT_ID=your-github-client-id
→ GITHUB_CLIENT_SECRET=your-github-client-secret
→ GITHUB_CALLBACK_URL=http://localhost:5000/api/v1/auth/github/callback

# GitHub Webhooks (add in Phase 2)
→ GITHUB_WEBHOOK_SECRET=your-webhook-secret

# AI — Google Gemini (add in Phase 3)
→ GEMINI_API_KEY=your-gemini-api-key

# Frontend URL (for CORS)
→ CLIENT_URL=http://localhost:5173
```

**Rule:** Never put real values. Always use placeholder text like "your-xxx-here".

---

### FILE 6: `docs/01_Product/PRD.md`

**Phase:** 0 (before any code)
**Update when:** When features are added, changed, or reprioritized

**Sections:**

```
# MergeNest — Product Requirements Document

## 1. Product Vision
→ What MergeNest is (pull from MERGENEST-BLUEPRINT.md "What Is MergeNest?" section)
→ The problem it solves (3-4 bullet points)
→ What makes it different from existing tools

## 2. Target Users
→ Individual developers
→ Student development teams
→ Small engineering teams
→ Open-source contributors
→ 2-3 sentences per user type describing their needs

## 3. V1 Feature Requirements
→ For EACH V1 module, list:
    Module name
    Features included (bullet list)
    Key user story: "As a [user], I want to [action] so that [benefit]"
→ Modules to cover:
    A. Authentication & Profiles
    B. Workspaces & Teams
    C. Projects
    D. GitHub Integration
    E. Code Review
    F. AI Features (PR Summarizer, Code Reviewer, Code Explainer, Test Generator, AI Chat)
    G. Notifications
→ Pull feature details from MERGENEST-BLUEPRINT.md V1 section

## 4. V2 Features (Planned, Not Yet in Scope)
→ Bullet list of deferred features with one-line descriptions
→ Collaborative code editor
→ RAG / repo-aware AI
→ Collaborative documentation
→ Advanced AI features
→ Pull from MERGENEST-BLUEPRINT.md V2 section

## 5. Non-Functional Requirements
→ Performance: page load targets, API response time targets
→ Security: auth requirements, data isolation, token handling
→ Scalability: designed for single-server initially, horizontally scalable later
→ Reliability: error handling, webhook retry handling
→ Usability: responsive design, loading states, error states

## 6. Out of Scope
→ Task management (not Jira/Linear)
→ Chat/messaging (not Slack/Discord)
→ Full IDE replacement (not VS Code)
→ Mobile app
```

**Content source:** MERGENEST-BLUEPRINT.md (features, tech, timeline)

---

### FILE 7: `docs/03_Architecture/SYSTEM_ARCHITECTURE.md`

**Phase:** 0 (before any code)
**Update when:** When new modules are added, architecture changes, or new infrastructure is introduced

**Sections:**

```
# System Architecture

## 1. Architecture Overview
→ Modular Monolith pattern
→ Why not microservices (simplicity, single developer, no need yet)
→ Text-based architecture diagram showing:
    React Frontend ↔ REST APIs ↔ Express Backend ↔ MongoDB
                                ↔ Socket.IO (real-time)
                                ↔ GitHub API (external)
                                ↔ Gemini API (AI)

## 2. Module Boundaries
→ Table listing each module:
    Module Name | Responsibility | Dependencies on Other Modules
→ Modules: auth, users, workspaces, projects, github, reviews, ai, notifications, collaboration (V2)
→ Rules: modules communicate through services only, never import another module's model

## 3. Request Flow
→ How an HTTP request flows: Client → Express → Middleware Chain → Controller → Service → Database → Response
→ Middleware order: requestLogger → authenticate → workspaceContext → authorize → validate → controller

## 4. Multi-Tenancy Model
→ Workspace is the tenant boundary
→ Every resource belongs to a workspace
→ Every database query includes workspaceId
→ Diagram: MergeNest → Workspace A (members, projects) → Workspace B (members, projects)

## 5. Real-Time Architecture
→ Socket.IO runs alongside Express on the same HTTP server
→ Authentication: JWT token verified on connection
→ Rooms: user-specific rooms for notifications, session rooms for collaboration
→ Events flow: Backend event → Notification service → Socket.IO emit → Client receives

## 6. External Service Integration
→ GitHub: OAuth for auth, REST API for data, Webhooks for events
→ Gemini AI: REST API calls from AI service, server-side only
→ MongoDB Atlas: Primary database

## 7. Folder Structure (High Level)
→ Show the top-level folder tree:
    src/
    ├── client/     (React frontend)
    └── server/     (Node.js backend)
        └── src/
            ├── config/
            ├── modules/
            ├── shared/
            ├── socket/
            └── app.js
→ Point to BACKEND_ARCHITECTURE.md and FRONTEND_ARCHITECTURE.md for details
```

**Content source:** MERGENEST-BLUEPRINT.md (tech stack, modules), previous evaluation doc (architecture section, folder structure)

---

### FILE 8: `docs/03_Architecture/DATABASE_DESIGN.md`

**Phase:** 0 (before any code)
**Update when:** Every time a new collection is added or a schema changes

**Sections:**

```
# Database Design

## 1. Design Principles
→ MongoDB document model
→ Reference vs embedding decisions (reference for separate entities, embed for tightly coupled data)
→ Every collection that holds workspace data MUST have a workspaceId field
→ Indexing strategy: index fields used in queries, compound indexes for common query patterns

## 2. Collections

→ For EACH collection, document:

### Collection Name (e.g., User)
  - Purpose: one sentence
  - Fields: table with Field | Type | Required | Description | Index
  - Relationships: which other collections it references
  - Indexes: list of indexes with explanation
  - Access patterns: common queries against this collection
  - Notes: any special considerations (TTL, encryption, etc.)

→ Collections to include:

Phase 0 (design now, implement in Phase 1):
  - User
  - Workspace
  - WorkspaceMember
  - Invitation
  - Project

Phase 2 (add when building GitHub integration):
  - ConnectedRepository
  - PullRequest (cached from GitHub)

Phase 3 (add when building code review):
  - ReviewThread
  - ReviewComment

Phase 4 (add when building AI):
  - AIConversation
  - AIMessage

Phase 5 (add when building notifications):
  - Notification
  - ActivityEvent

V2 (add when building collaborative features):
  - CodingSession
  - SessionParticipant
  - Document
  - KnowledgeChunk (for RAG)

## 3. Relationship Diagram
→ Text-based diagram showing references between collections:
    User ←── WorkspaceMember ──→ Workspace
                                    │
                                    ├──→ Project ──→ ConnectedRepository
                                    │                    │
                                    │                    ├──→ PullRequest
                                    │                    │       │
                                    │                    │       ├──→ ReviewThread ──→ ReviewComment
                                    │                    │
                                    │                    └──→ AIConversation ──→ AIMessage

## 4. Data Isolation Rules
→ Every query on workspace-scoped data must filter by workspaceId
→ User collection is global (users can belong to multiple workspaces)
→ Everything else is workspace-scoped

## 5. What We Store vs What GitHub Owns
→ Table: Data | Stored in MongoDB? | Why
→ PR metadata: Yes (cached for dashboard/review)
→ PR diffs: No (fetch on demand from GitHub API)
→ Commits: No (fetch on demand)
→ Branches: No (fetch on demand)
→ File contents: No (fetch on demand, except for AI indexing in V2)
→ Review comments (ours): Yes (MergeNest's own review system)
```

**Content source:** Previous evaluation doc (database design section), MERGENEST-BLUEPRINT.md (feature list to determine needed collections)

---

### FILE 9: `learning/LEARNING_PROFILE.md`

**Phase:** 0 (before any code)
**Update when:** After each major phase, update confidence levels

**Sections:**

```
# Developer Learning Profile

## Purpose
AI assistants read this file to adjust explanation depth. If a technology is marked
"advanced," skip the basics. If marked "none," explain from fundamentals.

## Skill Levels

### Comfortable (can build without help)
→ JavaScript (ES6+)
→ React.js (components, hooks, state, props, routing)
→ Node.js (modules, npm, basic server)
→ Express.js (routes, middleware, REST APIs)
→ MongoDB + Mongoose (CRUD, basic schemas)
→ HTML + CSS
→ Git basics (commit, push, pull, branch)

### Basics Only (understand concept, limited practice)
→ Java
→ DSA fundamentals
→ Basic OOP

### Learning During This Project (need explanation)
→ JWT authentication (httpOnly cookies, refresh tokens)
→ OAuth 2.0 (GitHub OAuth flow)
→ RBAC (role-based access control)
→ Multi-tenant data isolation
→ GitHub REST API + Octokit
→ GitHub Webhooks
→ Google Gemini API
→ Prompt engineering + structured outputs
→ Socket.IO (real-time communication)
→ Docker basics
→ Deployment (Render, Vercel)

### No Experience Yet (will need in V2)
→ CRDT / Yjs (collaborative editing)
→ Monaco Editor integration
→ Embeddings + vector search
→ RAG pipelines
→ AI agents + tool calling
→ Redis
→ Advanced distributed systems

## Learning Preferences
→ Explain concepts briefly (3-5 sentences), not full lectures
→ Show why MergeNest needs this specific technology
→ Let me implement it, then ask questions to verify understanding
→ When I make a mistake, explain WHY it's wrong
→ After each module, suggest interview questions
```

**Content source:** User's stated background from MERGENEST-BLUEPRINT.md section "Current Developer Background"

---

### FILE 10: `SETUP.md`

**Phase:** 1 (create when backend/frontend structure exists)
**Update when:** When new services, tools, or env vars are added

**Sections:**

```
# Local Development Setup

## Prerequisites
→ Node.js (version)
→ npm or pnpm
→ MongoDB (local or Atlas free tier)
→ Git
→ GitHub account
→ Google AI Studio account (for Gemini API key) — needed in Phase 3

## Clone and Install
→ git clone command
→ cd into project
→ Install backend dependencies: cd src/server && npm install
→ Install frontend dependencies: cd src/client && npm install

## Environment Setup
→ Copy .env.example to .env
→ Explain each variable and how to get its value:
    MONGODB_URI: "Use mongodb://localhost:27017/mergenest for local, or get a free Atlas URI from..."
    JWT_SECRET: "Generate a random string: node -e \"console.log(require('crypto').randomBytes(32).toString('hex'))\""
    GITHUB_CLIENT_ID: "Create a GitHub OAuth App at github.com/settings/developers..."
    GEMINI_API_KEY: "Get a free key from aistudio.google.com..."

## Running the Application
→ Start MongoDB (if local)
→ Start backend: cd src/server && npm run dev
→ Start frontend: cd src/client && npm run dev
→ Open: http://localhost:5173

## Running Tests
→ cd src/server && npm test

## Common Issues
→ "MongoDB connection failed" → Check if MongoDB is running
→ "Port already in use" → Kill the process or change PORT in .env
→ Webhook issues → Use ngrok for local webhook testing
```

---

### FILE 11: `CONTRIBUTING.md`

**Phase:** 1
**Update when:** When workflow changes

**Sections:**

```
# Contributing / Development Workflow

## Branch Strategy
→ main: stable, deployable code
→ dev: integration branch (merge features here first)
→ feature/module-name: feature branches (e.g., feature/auth, feature/github-integration)
→ fix/description: bug fix branches

## Commit Convention
→ Format: type(scope): description
→ Types: feat, fix, refactor, docs, test, chore
→ Examples:
    feat(auth): add JWT login with httpOnly cookies
    fix(workspace): prevent non-members from accessing projects
    docs(database): add ReviewThread collection schema

## Pull Request Process
→ Create feature branch from dev
→ Implement feature
→ Write/update tests
→ Self-review the diff
→ Merge to dev
→ Periodically merge dev to main when stable

## Definition of Done (feature is complete when)
→ Feature works as described in PRD.md
→ API follows API_STANDARDS.md
→ Auth and permissions are enforced (not just UI-hidden)
→ Error cases are handled
→ Input is validated
→ Basic tests exist for critical paths
→ Relevant documentation is updated
→ No hardcoded secrets or config values
```

---

### FILE 12: `docs/02_Design/DESIGN_SYSTEM.md`

**Phase:** 1 (when first UI is built)
**Update when:** When design tokens or component patterns change

**Sections:**

```
# Design System

## Colors
→ Primary, secondary, accent colors (hex values)
→ Semantic colors: success (green), error (red), warning (yellow), info (blue)
→ Background colors: main bg, card bg, sidebar bg
→ Text colors: primary text, secondary text, muted text
→ Dark mode considerations (if applicable)

## Typography
→ Font family (e.g., Inter for UI, JetBrains Mono for code)
→ Size scale: xs, sm, base, lg, xl, 2xl (with pixel/rem values)
→ Font weights used: normal (400), medium (500), semibold (600), bold (700)

## Spacing
→ Spacing scale using Tailwind defaults: 1, 2, 3, 4, 6, 8, 12, 16, etc.
→ Standard padding for cards, sections, page margins

## Component Patterns
→ Buttons: primary, secondary, outline, destructive, sizes
→ Cards: standard card layout (padding, border-radius, shadow)
→ Forms: input fields, labels, error messages, validation display
→ Modals: standard modal layout
→ Tables: standard data table layout
→ Navigation: sidebar pattern, top bar pattern
→ Loading states: skeleton loaders, spinners
→ Error states: error messages, error pages, empty states
→ Toast notifications: success, error, info

## UI Conventions
→ Always show loading state while data is fetching
→ Always show error message if an API call fails
→ Always show empty state when a list has no items
→ Destructive actions (delete) require confirmation
→ Forms show inline validation errors
→ Use skeleton loaders for initial page loads, spinners for actions

## Responsive Breakpoints
→ Tailwind defaults: sm (640px), md (768px), lg (1024px), xl (1280px)
→ Mobile-first approach
```

---

### FILE 13: `docs/03_Architecture/BACKEND_ARCHITECTURE.md`

**Phase:** 1 (when backend structure is created)
**Update when:** When new modules are added or patterns change

**Sections:**

```
# Backend Architecture

## Folder Structure
→ Full folder tree for server/src/ with every file's purpose
→ Use the structure from the previous evaluation:
    server/src/
    ├── config/          (database, env, github, ai config files)
    ├── modules/         (feature modules)
    │   ├── auth/        (controller, service, routes, validation, middleware, __tests__/)
    │   ├── users/
    │   ├── workspaces/
    │   ├── projects/
    │   ├── github/
    │   ├── reviews/
    │   ├── ai/
    │   ├── notifications/
    │   └── collaboration/ (V2)
    ├── shared/          (middleware, utils, validators)
    ├── socket/          (Socket.IO setup)
    └── app.js

## Module Structure Pattern
→ Every module follows this structure:
    module-name/
    ├── module.controller.js    (HTTP request/response handling)
    ├── module.service.js       (business logic)
    ├── module.model.js         (Mongoose schema)
    ├── module.routes.js        (Express router)
    ├── module.validation.js    (Joi/Zod schemas)
    └── __tests__/              (unit and integration tests)

## Middleware Pipeline
→ Order of middleware execution for a typical request
→ requestLogger → authenticate → workspaceContext → authorize(role) → validate(schema) → controller

## Service Layer Rules
→ Controllers: parse request, call service, send response. No business logic.
→ Services: contain ALL business logic. Can call other services. Can call database.
→ Models: Mongoose schemas and static methods only.

## Error Handling
→ Custom ApiError class with statusCode and message
→ asyncHandler wrapper for all async route handlers
→ Global error handler middleware catches all errors
→ Error response format: { success: false, message: "...", errors: [...] }

## Logging
→ Logger setup (Pino or Winston)
→ What to log: requests, errors, important events
→ What NOT to log: tokens, passwords, sensitive data
```

---

### FILE 14: `docs/03_Architecture/FRONTEND_ARCHITECTURE.md`

**Phase:** 1 (when frontend structure is created)
**Update when:** When structure or patterns change

**Sections:**

```
# Frontend Architecture

## Folder Structure
→ Full folder tree for client/src/:
    client/src/
    ├── components/      (reusable UI components)
    │   ├── ui/          (shadcn/ui primitives: Button, Card, Input, etc.)
    │   ├── layout/      (Sidebar, TopBar, PageLayout)
    │   └── shared/      (LoadingSpinner, ErrorMessage, EmptyState)
    ├── pages/           (route-level page components)
    │   ├── auth/        (LoginPage, RegisterPage)
    │   ├── workspaces/  (WorkspaceListPage, WorkspaceDetailPage)
    │   ├── projects/    (ProjectDashboardPage, ProjectSettingsPage)
    │   └── ...
    ├── features/        (feature-specific components)
    │   ├── reviews/     (DiffViewer, ReviewThread, InlineComment)
    │   ├── ai/          (AIChatPanel, AIReviewResults)
    │   └── ...
    ├── hooks/           (custom React hooks)
    ├── services/        (API client functions)
    ├── stores/          (Zustand state stores)
    ├── lib/             (utilities, constants, helpers)
    ├── routes/          (React Router configuration)
    └── App.jsx

## State Management
→ Server state: TanStack Query (data fetching, caching, mutations)
→ Client state: Zustand (UI state, auth state, socket state)
→ No Redux — Zustand is simpler and sufficient

## Data Fetching Pattern
→ All API calls go through services/ (api client functions)
→ Pages/components use TanStack Query hooks to fetch data
→ Example pattern: useQuery(['projects', workspaceId], () => projectService.list(workspaceId))
→ Mutations use useMutation with cache invalidation

## Routing
→ React Router v6 with nested routes
→ Protected routes wrapped in AuthGuard component
→ Workspace routes wrapped in WorkspaceGuard component (verifies membership)

## Component Conventions
→ One component per file
→ File named same as component: DiffViewer.jsx
→ Props documented with JSDoc or comments
→ Use design system components (shadcn/ui) as base
```

---

### FILE 15: `docs/03_Architecture/AUTHORIZATION_DESIGN.md`

**Phase:** 1 (when building RBAC)
**Update when:** When roles, permissions, or authorization logic changes

**Sections:**

```
# Authorization Design

## Roles
→ Table: Role | Description | Who assigns it
→ owner: full control, assigned on workspace creation
→ admin: manage members and settings, assigned by owner
→ member: work on projects, default role for invited users

## Permission Matrix
→ Table: Action | owner | admin | member
→ List every protected action with ✅ or ❌ per role
→ Actions: delete workspace, edit workspace, invite members, remove members,
           create project, edit project, delete project, connect repo,
           create review, comment on review, resolve threads, use AI features,
           manage sessions, create documents, etc.

## Authorization Middleware Design
→ authenticate: verifies JWT, attaches user to request
→ workspaceContext: extracts workspaceId from route params, verifies user is a member, attaches workspace and member role to request
→ authorize(requiredRole): checks if user's role in this workspace meets the minimum required role
→ Code pattern example for how middleware is used on routes

## Multi-Tenant Data Isolation
→ Every workspace-scoped database query MUST include workspaceId
→ The workspaceContext middleware injects workspaceId into the request
→ Services use req.workspace._id for all queries
→ Example of a safe query vs an unsafe query

## Resource-Level Authorization
→ Some resources have additional checks beyond workspace role:
    - Only PR author or admin can edit PR review status
    - Only thread creator or admin can resolve a thread
    - Only session host can end a session
→ These checks happen in the service layer, not middleware

## Frontend Authorization
→ Frontend hides/shows UI elements based on role
→ But this is NOT security — backend enforces everything
→ Frontend uses a usePermission(action) hook that checks the user's role
```

---

### FILE 16: `docs/04_API/API_STANDARDS.md`

**Phase:** 1 (before first API endpoint is created)
**Update when:** When new conventions are established

**Sections:**

```
# API Standards

## Base URL
→ /api/v1

## Route Naming
→ Plural nouns: /workspaces, /projects, /reviews (not /workspace, /project)
→ Nested resources: /workspaces/:workspaceId/projects/:projectId
→ Actions as sub-routes: POST /workspaces/:id/invite, POST /reviews/:id/resolve

## HTTP Methods
→ GET: retrieve (never modifies data)
→ POST: create new resource
→ PATCH: partial update (preferred over PUT)
→ DELETE: remove resource

## Request Format
→ Body: JSON (Content-Type: application/json)
→ Authentication: httpOnly cookie (JWT) — no Authorization header needed
→ Workspace context: extracted from URL parameter (:workspaceId)

## Response Format — Success
→ { success: true, data: { ... } }
→ For lists: { success: true, data: [...], pagination: { page, limit, total, totalPages } }

## Response Format — Error
→ { success: false, message: "Human readable error", errors: [...] }
→ Status codes: 400 (validation), 401 (unauthenticated), 403 (unauthorized),
                404 (not found), 409 (conflict), 422 (unprocessable), 500 (server error)

## Pagination
→ Query params: ?page=1&limit=20
→ Default: page=1, limit=20, max limit=100
→ Response includes: { page, limit, total, totalPages }

## Filtering and Sorting
→ Filtering: ?status=open&author=userId
→ Sorting: ?sort=createdAt&order=desc
→ Default sort: createdAt descending

## Validation
→ All request bodies validated using Joi or Zod
→ Validation happens in middleware BEFORE the controller
→ Invalid requests return 400 with field-level error details

## Rate Limiting
→ Global: 100 requests per minute per IP (basic)
→ AI endpoints: 20 requests per minute per user (cost control)
→ Auth endpoints: 10 requests per minute per IP (brute force protection)
```

---

### FILE 17: `docs/05_Security/SECURITY.md`

**Phase:** 1 (when auth is built)
**Update when:** When new security concerns arise or mitigations are implemented

**Sections:**

```
# Security

## Authentication Security
→ Passwords hashed with bcrypt (cost factor 12+)
→ JWT stored in httpOnly, Secure, SameSite=Strict cookie
→ Access token + refresh token rotation
→ Failed login rate limiting (10 attempts per 15 min per IP)

## Token Security
→ GitHub access tokens encrypted at rest (AES-256-GCM)
→ Encryption key stored in environment variable, never in code
→ Tokens never sent to frontend, never logged
→ Handle token revocation gracefully (re-auth flow)

## Multi-Tenant Isolation
→ Every database query on workspace-scoped data includes workspaceId
→ workspaceContext middleware verifies membership before any workspace operation
→ No REST endpoint returns data from a workspace the user doesn't belong to
→ Test: create 2 workspaces with same resource names, verify isolation

## Input Validation & Sanitization
→ All request bodies validated with schema validation library
→ MongoDB query injection prevention (avoid passing raw user input to queries)
→ XSS prevention: React handles this by default (no dangerouslySetInnerHTML)

## CSRF Protection
→ SameSite=Strict cookie attribute prevents CSRF for same-site requests
→ For cross-origin needs: implement CSRF token

## Webhook Security
→ Verify GitHub webhook signatures (HMAC-SHA256) before processing
→ Use crypto.timingSafeEqual for signature comparison (prevent timing attacks)
→ Store processed delivery IDs to prevent duplicate processing

## AI Security
→ API keys (Gemini) stored server-side only, never in frontend
→ Treat all repository content and user input as untrusted in prompts
→ Separate system instructions from user-provided content
→ Scope RAG retrieval to authorized workspaces only (when implemented)
→ Rate limit AI endpoints to control costs
→ Never auto-execute AI-generated code

## Threat Model
→ Table: Threat | Impact | Likelihood | Mitigation
→ Cover: XSS, CSRF, JWT theft, token exposure, data leak between workspaces,
         privilege escalation, webhook forgery, prompt injection, brute force login
```

---

### FILE 18: `docs/09_Testing/TESTING_STRATEGY.md`

**Phase:** 1
**Update when:** When testing tools or approach changes

**Sections:**

```
# Testing Strategy

## Frameworks
→ Backend: Jest + Supertest
→ Frontend: Vitest + React Testing Library (optional/later)

## Test Levels
→ Unit tests: test service functions in isolation (mock database)
→ Integration tests: test API endpoints end-to-end (use test database)
→ No e2e tests in V1 (add with Playwright/Cypress in V2 if needed)

## What to Test (Priority Order)
→ 1. Auth middleware (token verification, rejection of invalid tokens)
→ 2. Authorization middleware (role checks, workspace isolation)
→ 3. Critical business logic (invitation flow, permission checks)
→ 4. API endpoints (happy path + error cases)
→ 5. AI service (prompt construction, response parsing)

## Test File Location
→ Tests live next to the code they test: modules/auth/__tests__/auth.service.test.js
→ No central test folder

## Running Tests
→ npm test (all tests)
→ npm test -- --watch (watch mode)
→ npm test -- auth (run tests matching "auth")

## Test Database
→ Use a separate MongoDB database for tests (mergenest_test)
→ Clean database before each test suite
→ Use in-memory MongoDB (mongodb-memory-server) for faster tests

## Coverage
→ Not enforcing coverage percentage in V1
→ Focus on testing critical paths, not hitting a number
```

---

### FILES 19-22: ADR Template and Initial ADRs

**Phase:** 1
**Update when:** When new significant decisions are made

**ADR Template (`docs/03_Architecture/ADR/TEMPLATE.md`):**

```
# ADR-NNN: Title

## Status
→ Proposed | Accepted | Deprecated | Superseded by ADR-XXX

## Date
→ YYYY-MM-DD

## Context
→ What situation or problem prompted this decision?

## Decision
→ What did we decide?

## Alternatives Considered
→ What other options were evaluated? Why were they rejected?

## Consequences
→ Positive: what improves because of this decision
→ Negative: what trade-offs or risks does this introduce
→ Neutral: what changes but isn't clearly better or worse

## References
→ Links to relevant docs, articles, or discussions
```

**ADR-001 Content:** Why modular monolith (not microservices). Solo developer, single deployment, shared database, can extract services later.

**ADR-002 Content:** Why MongoDB (not PostgreSQL). Document model fits nested workspace/project data, flexible schema for rapid iteration, Atlas Vector Search for future RAG, developer already knows MongoDB.

**ADR-003 Content:** Why JWT in httpOnly cookies (not localStorage, not session-based). Security against XSS, stateless (no server-side session store needed), httpOnly prevents JavaScript access.

---

### FILES 23-25: GitHub Integration, User Flows, Data Flow

**Phase:** 2 (before GitHub integration)

**GITHUB_INTEGRATION.md sections:**

```
→ GitHub OAuth App setup and configuration
→ Authorization flow (step-by-step with URLs)
→ Token storage and encryption
→ GitHub REST API patterns used (with Octokit examples)
→ API rate limit handling (conditional requests, caching, monitoring)
→ Webhook configuration
→ Webhook events handled (push, pull_request, etc.) with payload processing
→ Webhook signature verification
→ Idempotency (storing delivery IDs to prevent duplicate processing)
→ What data we cache vs fetch on demand (table from DATABASE_DESIGN.md)
```

**USER_FLOWS.md sections:**

```
→ 5-7 core user flows as step sequences:
  1. New user registration and onboarding
  2. Create workspace and invite team members
  3. Connect GitHub repo and view repository data
  4. Review a pull request with inline comments
  5. Get AI code review on a PR
  6. Use AI chat to ask about code
  7. Receive and read notifications
→ Each flow: numbered steps from user perspective
```

**DATA_FLOW.md sections:**

```
→ 3-5 key data flows as step sequences:
  1. GitHub webhook → PR data sync → notification
  2. AI code review request → fetch diff → call Gemini → store results → display
  3. User creates inline comment → save to DB → notify PR author via Socket.IO
  4. User asks AI question → retrieve conversation history → call Gemini → stream response → save message
→ Each flow: numbered steps showing which component handles each step
```

---

### FILE 26: AI Architecture

**Phase:** 3 (before AI features)

**AI_ARCHITECTURE.md sections:**

```
→ AI service design: how the backend structures AI calls
→ Model selection: which Gemini model for which task (Flash for simple, Pro for complex)
→ Prompt management: prompts stored in /prompts/ folder as template functions
→ Structured outputs: JSON response schemas for each AI feature
→ Prompt templates: show actual prompt structure for PR summary, code review, test gen, etc.
→ Cost management: rate limits per user, per workspace, daily caps
→ Error handling: what happens when Gemini API fails, rate limits, timeouts
→ Streaming: how streaming responses work (for AI chat)
→ Conversation history: how chat context is managed (last N messages, token counting)
→ Security: prompt injection prevention, treating code as untrusted input
→ Future: RAG integration point, tool calling, agent architecture (brief section for future planning)
```

---

### FILES 27-28: Real-Time Architecture and Events

**Phase:** 4 (before real-time features)

**REALTIME_ARCHITECTURE.md sections:**

```
→ Socket.IO server setup (alongside Express)
→ Connection authentication (verify JWT on connection)
→ Namespace and room design:
    - User rooms: user:{userId} for personal notifications
    - Workspace rooms: workspace:{workspaceId} for workspace events
    - Session rooms: session:{sessionId} for coding sessions (V2)
→ Reconnection handling
→ Scaling considerations (Redis adapter for multi-server, future)
→ Error handling for socket events
```

**REALTIME_EVENTS.md sections:**

```
→ Table for EVERY Socket.IO event:
    Event Name | Direction | Payload Schema | When Emitted | Room/Target

→ Example entries:
    notification:new | server→client | {type, title, message, link} | When a notification is created | user:{recipientId}
    notification:read | client→server | {notificationId} | User marks notification as read | —
    presence:online | server→client | {userId, username} | User connects | workspace:{workspaceId}
    presence:offline | server→client | {userId} | User disconnects | workspace:{workspaceId}
```

---

### FILE 29: Deployment

**Phase:** 5 (before deployment)

**DEPLOYMENT.md sections:**

```
→ Docker setup: Dockerfile for backend, Dockerfile for frontend, docker-compose.yml
→ Render deployment: how to deploy backend, env vars to set, build command, start command
→ Vercel deployment: how to deploy frontend, env vars, build settings
→ MongoDB Atlas: connection string format, network access settings, free tier limits
→ Environment variables: complete list with production values format
→ GitHub OAuth: callback URL for production
→ Webhook URL: production webhook endpoint
→ CORS: production frontend URL
→ Build commands: npm run build for both frontend and backend
→ Health check: /api/v1/health endpoint
→ Common deployment issues and solutions
```

---

### Learning Files (Ongoing)

**`learning/LEARNING_LOG.md` format:**

```
# Learning Log

## Week 1 — Auth & Profiles
| Date | Topic | What I Learned | Confidence (1-5) | Key Interview Point |
|---|---|---|---|---|
| 2024-01-15 | bcrypt | Password hashing with salt rounds. Cost factor 12 means... | 4 | "I used bcrypt with cost factor 12 because..." |
| 2024-01-16 | JWT cookies | httpOnly cookies prevent XSS token theft because... | 4 | "localStorage is insecure because any JS can read it..." |

## Week 2 — Workspaces & RBAC
...
```

**`learning/INTERVIEW_PREP.md` format:**

```
# Interview Preparation

## Authentication
Q: How does authentication work in your project?
A: I use JWT stored in httpOnly cookies. When a user logs in, the server creates a
   JWT containing the userId, signs it, and sets it as an httpOnly cookie. The browser
   sends this cookie automatically with every request. My authenticate middleware
   verifies the JWT on each protected route. I chose httpOnly cookies over localStorage
   because localStorage is accessible to JavaScript, making it vulnerable to XSS attacks.

Q: What happens if the JWT expires?
A: [Your answer after implementing]

## RBAC & Multi-Tenancy
Q: How did you implement authorization?
A: [Your answer after implementing]

## GitHub Integration
Q: How do you handle GitHub rate limits?
A: [Your answer after implementing]

...grows with each module...
```

---

### FILE 30: `learning/LEARNING_ROADMAP.md`

**Phase:** 0 (before any code)
**Update when:** At the START of each new phase — mark previous phase as completed, review upcoming phase's learning topics

**Purpose:** This is your phase-by-phase study guide. Before starting each phase, open this file and go through the "Learn Before Building" section for that phase. It tells you WHAT to learn, WHY you need it, HOW LONG it takes, and WHERE to learn it.

**Sections:**

```
# MergeNest — Learning Roadmap

> Open this file at the start of each phase. Study the "Learn Before Building"
> topics. Then start coding. Learn the "Learn While Building" topics as they come up.

---

## Phase 1: Auth + Workspaces + Projects (Weeks 1-2)

### Status: 🔲 Not Started / 🟡 In Progress / ✅ Completed

### Learn BEFORE Building (study these first, 1-2 days)

| Concept | Why You Need It | Time | Resource |
|---|---|---|---|
| bcrypt password hashing | Secure password storage — never store plain text | 1 hr | npm bcrypt docs + "How bcrypt works" article |
| JWT fundamentals | Token-based auth — how tokens are created, signed, verified | 2-3 hrs | "JWT explained" by Web Dev Simplified (YouTube) |
| httpOnly cookies | Secure token storage — prevents XSS token theft | 2 hrs | MDN docs on Set-Cookie, httpOnly flag |
| OAuth 2.0 concept | Understanding the authorization flow before implementing GitHub login | 2-3 hrs | "OAuth 2.0 simplified" (any top YouTube result) |
| RBAC pattern | Assigning permissions to roles, not individual users | 2-3 hrs | "RBAC explained" article + look at permission matrix examples |
| MongoDB indexing | Why and how to create indexes for query performance | 1-2 hrs | MongoDB docs on indexes |

### Learn WHILE Building (concepts that come up during implementation)

| Concept | When It Comes Up | How AI Will Help |
|---|---|---|
| Express middleware chains | When wiring auth + workspace + permission middleware | AI explains middleware execution order |
| Multi-tenant query scoping | When writing first workspace-scoped query | AI shows safe vs unsafe query patterns |
| Refresh token rotation | When implementing token refresh flow | AI explains why old refresh tokens must be invalidated |
| Input validation (Joi/Zod) | When creating first API endpoint | AI shows validation schema patterns |
| Custom error classes | When building error handling | AI explains why ApiError class is better than raw Error |

### After This Phase You Should Be Able To Explain
- [ ] Why httpOnly cookies are more secure than localStorage for JWT
- [ ] How RBAC middleware works (role → permission matrix → allow/deny)
- [ ] Why every query needs a workspaceId filter (multi-tenant isolation)
- [ ] The difference between authentication and authorization
- [ ] How OAuth 2.0 authorization code flow works (redirect → code → token)

---

## Phase 2: GitHub Integration (Weeks 3-4)

### Status: 🔲 Not Started

### Learn BEFORE Building (1-2 days)

| Concept | Why You Need It | Time | Resource |
|---|---|---|---|
| GitHub OAuth App setup | Register your app to get client ID/secret | 1-2 hrs | GitHub docs → "Creating an OAuth App" |
| GitHub REST API basics | Fetching repos, branches, commits, PRs from GitHub | 3-4 hrs | GitHub REST API docs + Octokit docs |
| Webhooks concept | GitHub sends events to YOUR server instead of you polling | 2-3 hrs | GitHub docs → "About webhooks" |
| HMAC signature verification | Verify webhook requests actually came from GitHub | 1-2 hrs | GitHub docs → "Validating webhook deliveries" |
| ngrok basics | Expose localhost to internet for webhook testing | 30 min | ngrok quickstart |

### Learn WHILE Building

| Concept | When It Comes Up |
|---|---|
| Octokit SDK patterns | When making first GitHub API call |
| API rate limit handling | When you first hit the rate limit (or learn to prevent it) |
| Token encryption (AES) | When storing GitHub access tokens securely |
| Idempotent event processing | When handling duplicate webhook deliveries |
| Conditional HTTP requests (ETags) | When optimizing GitHub API usage |

### After This Phase You Should Be Able To Explain
- [ ] The full OAuth flow: redirect → authorize → code → token exchange
- [ ] Difference between OAuth App and GitHub App (and why we chose OAuth App for V1)
- [ ] How webhook signature verification prevents forgery
- [ ] How to handle GitHub API rate limits (5000 req/hr)
- [ ] Why we store delivery IDs to prevent duplicate webhook processing

---

## Phase 3: Code Review (Week 7 — built after AI since AI reviews feed into it)

### Status: 🔲 Not Started

### Learn BEFORE Building (half day)

| Concept | Why You Need It | Time | Resource |
|---|---|---|---|
| Unified diff format | Understanding +/- line format that represents code changes | 1-2 hrs | "Understanding diff output" article |
| react-diff-viewer library | React component that renders diffs — learn its API | 1-2 hrs | Library README + examples |
| Threaded comments data model | How to structure nested reply threads in MongoDB | 1-2 hrs | AI will explain during design |

### Learn WHILE Building

| Concept | When It Comes Up |
|---|---|
| Positioning inline comments on diff lines | When building the comment UI |
| Optimistic UI updates | When comments should appear instantly before server confirms |
| State machines (review status) | When tracking pending → approved flow |

### After This Phase You Should Be Able To Explain
- [ ] How unified diffs work (+/- lines, hunks, file headers)
- [ ] How inline comments are linked to specific file + line number
- [ ] How review threads model parent-child comment relationships

---

## Phase 4: AI Features (Weeks 5-6)

### Status: 🔲 Not Started

### Learn BEFORE Building (1 day)

| Concept | Why You Need It | Time | Resource |
|---|---|---|---|
| LLM API basics | How to send a prompt and receive a response | 2-3 hrs | Google AI docs → "Gemini API quickstart" |
| System vs user prompts | Different message roles and when to use each | 1-2 hrs | Google AI docs → "Text generation" |
| Structured outputs (JSON mode) | Getting reliable JSON responses from AI | 1-2 hrs | Google AI docs → "Structured output" |
| Prompt engineering basics | Writing prompts that produce useful, consistent results | 2-3 hrs | "Prompt engineering guide" by Google/OpenAI |
| Token limits & pricing | Understanding context windows and cost per request | 1 hr | Gemini pricing page + token counting docs |

### Learn WHILE Building

| Concept | When It Comes Up |
|---|---|
| Prompt iteration | When first AI code review produces garbage — rewrite prompt |
| Model selection (Flash vs Pro) | When deciding which model for which feature |
| Streaming responses | When building AI chat (word-by-word display) |
| Conversation history management | When AI chat needs previous messages as context |
| Token counting | When conversations get too long for context window |
| Rate limiting AI endpoints | When implementing cost controls |

### After This Phase You Should Be Able To Explain
- [ ] How you structured prompts for code review vs PR summary (different goals, different prompts)
- [ ] Why you use Gemini Flash for simple tasks and Pro for complex ones (cost vs quality)
- [ ] How structured outputs work (JSON schema → reliable parseable response)
- [ ] How you manage conversation history (last N messages, token budget)
- [ ] How you prevent prompt injection (treating code as untrusted input)

---

## Phase 5: Real-Time Notifications (Week 8)

### Status: 🔲 Not Started

### Learn BEFORE Building (half day)

| Concept | Why You Need It | Time | Resource |
|---|---|---|---|
| WebSocket concept | Persistent bidirectional connection (vs HTTP request/response) | 1-2 hrs | "WebSockets in 100 seconds" (Fireship, YouTube) |
| Socket.IO basics | Library that makes WebSockets easy — events, rooms, namespaces | 2-3 hrs | Socket.IO "Get Started" tutorial |
| Socket.IO authentication | Verifying JWT when a WebSocket connection is established | 1-2 hrs | Socket.IO docs → "Middlewares" |

### Learn WHILE Building

| Concept | When It Comes Up |
|---|---|
| Room-based messaging | When sending notification to specific user (user:{userId} room) |
| Connection lifecycle | When handling connect/disconnect events |
| Reconnection handling | When testing what happens if connection drops |

### After This Phase You Should Be Able To Explain
- [ ] Difference between HTTP and WebSocket (request/response vs persistent connection)
- [ ] How Socket.IO rooms work (join room → emit to room → all members receive)
- [ ] How you authenticate WebSocket connections (verify JWT on connection)
- [ ] What happens when a client disconnects and reconnects

---

## Phase 6: Deployment (Week 8)

### Status: 🔲 Not Started

### Learn BEFORE Building (half day)

| Concept | Why You Need It | Time | Resource |
|---|---|---|---|
| Docker basics | Package your app so it runs the same everywhere | 2-3 hrs | "Docker in 100 Seconds" + Fireship Docker tutorial |
| Dockerfile | Instructions to build your app container | 1-2 hrs | Docker docs → "Dockerfile reference" |
| Docker Compose | Run multiple containers (app + DB) with one command | 1-2 hrs | Docker docs → "Compose quickstart" |
| Cloud deployment basics | How to get your app on the internet | 1-2 hrs | Render docs → "Deploy a Node.js app" |

### After This Phase You Should Be Able To Explain
- [ ] What Docker does and why it's useful (consistent environments)
- [ ] What a Dockerfile contains (FROM, COPY, RUN, CMD)
- [ ] How Docker Compose connects multiple services (app + MongoDB)
- [ ] How environment variables differ between dev and production

---

## V2 Phase: Collaborative Editor (Post-launch)

### Status: 🔲 Not Started

### Learn BEFORE Building (1-2 weeks — this is the hardest topic)

| Concept | Why You Need It | Time | Resource |
|---|---|---|---|
| CRDT fundamentals | Theory behind conflict-free collaborative editing | 3-5 days | "CRDT explained" articles + Martin Kleppmann talks (YouTube) |
| Yjs library | The specific CRDT implementation we use | 3-5 days | Yjs docs + examples |
| Monaco Editor | VS Code's editor component for the browser | 2-3 days | Monaco Editor playground + API docs |
| y-monaco binding | Connecting Yjs to Monaco for collaborative editing | 1-2 days | y-monaco GitHub README |
| y-websocket | WebSocket provider for syncing Yjs documents | 1-2 days | y-websocket GitHub README |

### After This Phase You Should Be Able To Explain
- [ ] What a CRDT is and how it differs from Operational Transform
- [ ] How Yjs resolves conflicts when two users edit the same line
- [ ] What happens during a network partition (user goes offline and comes back)
- [ ] How the Awareness protocol shows other users' cursors
- [ ] Why CRDTs guarantee eventual consistency without a central server

---

## V2 Phase: RAG / Repo-Aware AI (Post-launch)

### Status: 🔲 Not Started

### Learn BEFORE Building (1 week)

| Concept | Why You Need It | Time | Resource |
|---|---|---|---|
| Embeddings | Converting text/code into numerical vectors that capture meaning | 2-3 days | "Embeddings explained" (YouTube) + Gemini embedding docs |
| Vector similarity search | Finding similar content using cosine similarity | 1-2 days | "Vector databases explained" articles |
| MongoDB Atlas Vector Search | Storing and querying vectors in MongoDB | 1-2 days | MongoDB docs → "Atlas Vector Search" |
| Chunking strategies for code | Splitting code files into meaningful searchable pieces | 2-3 days | "RAG chunking strategies" articles |
| RAG pipeline | The full flow: index → embed → store → retrieve → generate | 2-3 days | "RAG explained" (YouTube) + Google AI docs |

### After This Phase You Should Be Able To Explain
- [ ] What embeddings are and how they represent semantic meaning as numbers
- [ ] Why code needs different chunking than prose (by function/class, not fixed size)
- [ ] The full RAG pipeline: how a user's question becomes a context-aware answer
- [ ] How vector search finds relevant code (cosine similarity)
- [ ] Why hybrid search (keyword + vector) works better than pure vector search for code
```

**Content source:** MERGENEST-BLUEPRINT.md (tech per phase, learning time estimates), previous evaluation (technology difficulty ratings)

---

### FILE 31: `learning/SKILLS_TRACKER.md`

**Phase:** 0 (create with initial status, update after each phase)
**Update when:** After completing each phase — change status of learned skills

**Purpose:** A single checklist showing EVERY skill in the project with your current status. Quick glance shows what you've learned and what's coming. Different from LEARNING_PROFILE.md (which is for AI calibration) — this is YOUR personal progress tracker.

**Sections:**

```
# Skills Tracker

> Update status after completing each phase.
> Status: ⬜ Not Started → 📖 Studying → 🔨 Building → ✅ Can Implement → 🎯 Can Teach/Interview

---

## Phase 1 Skills: Auth + Workspaces (Weeks 1-2)

| Skill | Status | Learned In | Confidence | Notes |
|---|---|---|---|---|
| Express.js REST APIs | ✅ Already knew | Pre-project | 5/5 | — |
| MongoDB + Mongoose | ✅ Already knew | Pre-project | 5/5 | — |
| React.js | ✅ Already knew | Pre-project | 5/5 | — |
| bcrypt password hashing | ⬜ Not Started | — | — | — |
| JWT (httpOnly cookies) | ⬜ Not Started | — | — | — |
| OAuth 2.0 (concept) | ⬜ Not Started | — | — | — |
| GitHub OAuth flow | ⬜ Not Started | — | — | — |
| RBAC pattern | ⬜ Not Started | — | — | — |
| Multi-tenant data isolation | ⬜ Not Started | — | — | — |
| Express middleware chains | ⬜ Not Started | — | — | — |
| Input validation (Joi/Zod) | ⬜ Not Started | — | — | — |
| Custom error handling | ⬜ Not Started | — | — | — |
| Tailwind CSS | ⬜ Not Started | — | — | — |
| shadcn/ui components | ⬜ Not Started | — | — | — |
| TanStack Query | ⬜ Not Started | — | — | — |
| Zustand state management | ⬜ Not Started | — | — | — |

## Phase 2 Skills: GitHub Integration (Weeks 3-4)

| Skill | Status | Learned In | Confidence | Notes |
|---|---|---|---|---|
| GitHub REST API | ⬜ Not Started | — | — | — |
| Octokit SDK | ⬜ Not Started | — | — | — |
| GitHub Webhooks | ⬜ Not Started | — | — | — |
| Webhook signature verification | ⬜ Not Started | — | — | — |
| Token encryption (AES) | ⬜ Not Started | — | — | — |
| API rate limit handling | ⬜ Not Started | — | — | — |
| Idempotent event processing | ⬜ Not Started | — | — | — |
| ngrok (dev tunneling) | ⬜ Not Started | — | — | — |

## Phase 3 Skills: AI Features (Weeks 5-6)

| Skill | Status | Learned In | Confidence | Notes |
|---|---|---|---|---|
| Google Gemini API | ⬜ Not Started | — | — | — |
| Prompt engineering | ⬜ Not Started | — | — | — |
| Structured outputs (JSON mode) | ⬜ Not Started | — | — | — |
| AI streaming responses | ⬜ Not Started | — | — | — |
| Conversation history management | ⬜ Not Started | — | — | — |
| Token counting & limits | ⬜ Not Started | — | — | — |
| AI cost management | ⬜ Not Started | — | — | — |
| Prompt injection prevention | ⬜ Not Started | — | — | — |

## Phase 4 Skills: Code Review (Week 7)

| Skill | Status | Learned In | Confidence | Notes |
|---|---|---|---|---|
| Unified diff format | ⬜ Not Started | — | — | — |
| react-diff-viewer library | ⬜ Not Started | — | — | — |
| Inline comment positioning | ⬜ Not Started | — | — | — |
| Threaded comments (data model) | ⬜ Not Started | — | — | — |

## Phase 5 Skills: Real-Time (Week 8)

| Skill | Status | Learned In | Confidence | Notes |
|---|---|---|---|---|
| WebSocket concept | ⬜ Not Started | — | — | — |
| Socket.IO (server + client) | ⬜ Not Started | — | — | — |
| Socket.IO authentication | ⬜ Not Started | — | — | — |
| Room-based messaging | ⬜ Not Started | — | — | — |
| Connection lifecycle handling | ⬜ Not Started | — | — | — |

## Phase 6 Skills: Deployment (Week 8)

| Skill | Status | Learned In | Confidence | Notes |
|---|---|---|---|---|
| Docker + Dockerfile | ⬜ Not Started | — | — | — |
| Docker Compose | ⬜ Not Started | — | — | — |
| Cloud deployment (Render) | ⬜ Not Started | — | — | — |
| Cloud deployment (Vercel) | ⬜ Not Started | — | — | — |
| CI/CD concept | ⬜ Not Started | — | — | — |

## V2 Skills: Collaborative Editor (Post-launch)

| Skill | Status | Learned In | Confidence | Notes |
|---|---|---|---|---|
| CRDT fundamentals | ⬜ Not Started | — | — | — |
| Yjs library | ⬜ Not Started | — | — | — |
| Monaco Editor | ⬜ Not Started | — | — | — |
| y-monaco binding | ⬜ Not Started | — | — | — |
| y-websocket | ⬜ Not Started | — | — | — |
| Awareness protocol (live cursors) | ⬜ Not Started | — | — | — |

## V2 Skills: RAG (Post-launch)

| Skill | Status | Learned In | Confidence | Notes |
|---|---|---|---|---|
| Embeddings | ⬜ Not Started | — | — | — |
| Vector similarity search | ⬜ Not Started | — | — | — |
| MongoDB Atlas Vector Search | ⬜ Not Started | — | — | — |
| Code chunking strategies | ⬜ Not Started | — | — | — |
| RAG pipeline | ⬜ Not Started | — | — | — |
| Context engineering | ⬜ Not Started | — | — | — |

---

## Summary

| Phase | Total Skills | Completed | Percentage |
|---|---|---|---|
| Phase 1: Auth + Workspaces | 16 | 0 | 0% |
| Phase 2: GitHub Integration | 8 | 0 | 0% |
| Phase 3: AI Features | 8 | 0 | 0% |
| Phase 4: Code Review | 4 | 0 | 0% |
| Phase 5: Real-Time | 5 | 0 | 0% |
| Phase 6: Deployment | 5 | 0 | 0% |
| V2: Collaborative Editor | 6 | 0 | 0% |
| V2: RAG | 6 | 0 | 0% |
| **TOTAL** | **58** | **0** | **0%** |
```

**Update process:** After completing a phase:
1. Change each skill's status (⬜ → 📖 → 🔨 → ✅ → 🎯)
2. Add confidence rating (1-5)
3. Add a short note if helpful ("struggled with X" or "understood after debugging Y")
4. Update the Summary table percentages

---

### FILE 32: `progress/STAGES_AND_STEPS.md`

**Phase:** 0 (before any code)
**Update when:** When a step is completed — mark it ✅. When a stage is completed — update the stage status.

**Purpose:** The master breakdown of the ENTIRE project into stages (phases) and each stage into small, concrete steps. For every step, it says: what to build, which files to create/update, and what to verify before moving on. This is the AI's execution guide — read the current step, do exactly what it says, update the docs listed, move to the next step.

**Sections:**

```
# MergeNest — Stages & Steps

> This file breaks the entire project into stages and steps.
> Each step is a concrete, completable unit of work (~2-4 hours each).
> After completing each step, update the files listed in "Docs to Update."
> Then update progress/CURRENT_STATUS.md.

---

## Stage 0: Project Setup & Documentation (Day 1)
**Status:** ⬜ Not Started
**Goal:** Repository initialized, documentation created, ready to code.

### Step 0.1: Initialize Repository & Server Project
- **What to do:** Create git repo, initialize the backend npm project, set up root and server folder structure
- **What to build:**
  - Initialize git repo (`git init`)
  - `src/server/` with `package.json` (Express, Mongoose, dotenv, cors, cookie-parser, helmet)
  - Root folder structure: `docs/`, `src/server/`, `src/client/`
- **Docs to create:** .gitignore, .env.example
- **Docs to update:** —
- **Verify before moving on:** Git repo exists, `npm install` runs in `src/server/` without errors, folder structure matches plan
- **Status:** ⬜

### Step 0.2: Initialize Client Project
- **What to do:** Scaffold the React frontend with Vite and Tailwind CSS
- **What to build:**
  - `src/client/` with Vite + React (via `npm create vite@latest`)
  - Install and configure Tailwind CSS v4
  - Verify dev server starts and shows default page
- **Docs to create:** —
- **Docs to update:** —
- **Verify before moving on:** `npm run dev` in `src/client/` starts React app, Tailwind classes render correctly
- **Status:** ⬜

### Step 0.3: Create Phase 0 Documentation
- **What to do:** Create all Phase 0 docs following DOC-CREATION-PLAN.md specifications
- **What to build:** No code — only documentation files
- **Docs to create:** README.md, AGENTS.md, CLAUDE.md, PRD.md, SYSTEM_ARCHITECTURE.md, DATABASE_DESIGN.md, LEARNING_PROFILE.md, LEARNING_ROADMAP.md, SKILLS_TRACKER.md, LEARNING_LOG.md, INTERVIEW_PREP.md, progress/STAGES_AND_STEPS.md, progress/CURRENT_STATUS.md
- **Docs to update:** —
- **Verify before moving on:** All Phase 0 files exist and have content matching DOC-CREATION-PLAN.md specifications
- **Status:** ⬜

### Step 0.4: Set Up Development Tooling
- **What to do:** Configure ESLint, Prettier, nodemon, npm scripts
- **What to build:**
  - ESLint config for server (`.eslintrc.js` or `eslint.config.js`)
  - Prettier config (`.prettierrc`)
  - `nodemon.json` for backend auto-restart
  - npm scripts in both projects: `dev`, `start`, `lint`
- **Docs to create:** —
- **Docs to update:** README.md (add dev setup and scripts section)
- **Verify before moving on:** `npm run dev` starts the Express server with nodemon, `npm run dev` starts the React app, `npm run lint` runs without config errors
- **Status:** ⬜

---

## Stage 1: Authentication & User Management (Week 1)
**Status:** ⬜ Not Started
**Goal:** Users can register, login, logout, view/edit profile, connect GitHub.

### Step 1.1: Express App & MongoDB Connection
- **What to do:** Create the Express app entry point with middleware pipeline and MongoDB connection
- **What to build:**
  - `src/server/src/app.js` — Express app with CORS, helmet, cookie-parser, JSON parser
  - `src/server/src/server.js` — HTTP server startup, port binding
  - `src/server/src/config/database.js` — Mongoose connection with retry logic
  - `src/server/src/config/env.js` — Environment variable validation (throws if missing required vars)
- **Docs to create:** SETUP.md
- **Docs to update:** —
- **Verify before moving on:** `npm run dev` starts server, logs "Connected to MongoDB", server listens on configured port
- **Status:** ⬜

### Step 1.2: Error Handling & Utility Layer
- **What to do:** Build the shared error handling and API response utilities
- **What to build:**
  - `src/server/src/shared/utils/api-error.js` — Custom ApiError class (statusCode, message, errors array)
  - `src/server/src/shared/utils/api-response.js` — Standard response helper { success, data, message }
  - `src/server/src/shared/utils/async-handler.js` — Wraps async route handlers to catch errors
  - `src/server/src/shared/middleware/error-handler.js` — Global error handler (catches ApiError, Mongoose validation, unknown)
  - Add a test route `GET /api/v1/health` → returns `{ success: true, message: "MergeNest API running" }`
- **Docs to create:** BACKEND_ARCHITECTURE.md, API_STANDARDS.md
- **Docs to update:** —
- **Verify before moving on:** Health check returns 200, unknown routes return 404 in standard format, throwing ApiError returns correct status and message
- **Status:** ⬜

### Step 1.3: User Model & Registration Endpoint
- **What to do:** Create User Mongoose model and registration API endpoint
- **What to build:**
  - `src/server/src/modules/users/user.model.js` — Schema: name, email, password (hashed), avatar, bio, skills[], githubId, githubUsername, githubAccessToken, timestamps
  - `src/server/src/modules/auth/auth.service.js` — `register()`: validate uniqueness, hash password with bcrypt, create user
  - `src/server/src/modules/auth/auth.controller.js` — `register` handler
  - `src/server/src/modules/auth/auth.routes.js` — `POST /api/v1/auth/register`
  - `src/server/src/modules/auth/auth.validation.js` — Zod schema for registration (name, email, password strength)
  - `src/server/src/shared/middleware/validate.js` — Generic Zod validation middleware
- **Docs to create:** ADR/003_authentication.md
- **Docs to update:** DATABASE_DESIGN.md (add User collection)
- **Verify before moving on:** POST /register creates user with hashed password, rejects duplicate email, rejects invalid input with descriptive errors
- **Status:** ⬜

### Step 1.4: Login, JWT & Auth Middleware
- **What to do:** Login endpoint, JWT generation in httpOnly cookie, auth middleware for protected routes
- **What to build:**
  - `auth.service.js` — `login()`: verify credentials, generate JWT
  - `auth.controller.js` — `login`, `logout`, `getMe` handlers
  - `auth.routes.js` — `POST /login`, `POST /logout`, `GET /me`
  - JWT utility (sign, verify) using jsonwebtoken
  - Cookie config: httpOnly, Secure (prod), SameSite=Lax, maxAge
  - `src/server/src/shared/middleware/authenticate.js` — Extract JWT from cookie, verify, attach `req.user`
- **Docs to create:** SECURITY.md
- **Docs to update:** .env.example (add JWT_SECRET, JWT_EXPIRES_IN)
- **Verify before moving on:** Register → Login → GET /me returns user → Logout → GET /me returns 401. Invalid credentials return 401.
- **Status:** ⬜

### Step 1.5: Frontend Project Structure & Routing
- **What to do:** Set up React project structure, React Router, and Tailwind base layout
- **What to build:**
  - Folder structure: `pages/`, `components/`, `layouts/`, `services/`, `stores/`, `hooks/`, `lib/`
  - React Router v6 setup with `BrowserRouter`, route definitions
  - `MainLayout` component (navbar placeholder + content area)
  - `AuthLayout` component (centered card for login/register)
  - Placeholder pages: Home, Login, Register, Dashboard (just titles)
  - `src/client/src/services/api.js` — Axios instance with `baseURL`, `withCredentials: true`
- **Docs to create:** FRONTEND_ARCHITECTURE.md
- **Docs to update:** —
- **Verify before moving on:** React app shows different pages for `/`, `/login`, `/register`, `/dashboard` routes. Axios instance is configured.
- **Status:** ⬜

### Step 1.6: Auth Pages & Auth State
- **What to do:** Build Login and Register pages with forms, set up Zustand auth store
- **What to build:**
  - Register page with form (name, email, password, confirm password) — calls `POST /api/v1/auth/register`
  - Login page with form (email, password) — calls `POST /api/v1/auth/login`
  - `src/client/src/stores/authStore.js` — Zustand store: `user`, `isAuthenticated`, `isLoading`, `login()`, `register()`, `logout()`, `checkAuth()`
  - Form validation (client-side) with error display
  - Toast/alert for success/error messages
- **Docs to create:** DESIGN_SYSTEM.md
- **Docs to update:** —
- **Verify before moving on:** Can fill register form → submits → user created. Can fill login form → submits → user data stored in Zustand. Errors shown for invalid input.
- **Status:** ⬜

### Step 1.7: Protected Routes & Navigation
- **What to do:** Create ProtectedRoute component, navigation bar, auto-login on refresh
- **What to build:**
  - `ProtectedRoute` component — redirects to `/login` if not authenticated
  - `PublicRoute` component — redirects to `/dashboard` if already logged in
  - Navbar component: logo, navigation links, user avatar/name, logout button
  - `checkAuth()` on app mount — calls `GET /api/v1/auth/me` to restore session
  - Loading spinner while checking auth
- **Docs to update:** —
- **Verify before moving on:** Can register → auto-login → see dashboard → refresh page → still logged in → logout → redirected to login → can't access dashboard directly
- **Status:** ⬜

### Step 1.8: User Profile (Backend + UI)
- **What to do:** Profile view and edit endpoints + profile page UI
- **What to build:**
  - `src/server/src/modules/users/user.controller.js` — `getProfile`, `updateProfile` handlers
  - `src/server/src/modules/users/user.service.js` — profile update logic (filter allowed fields)
  - `src/server/src/modules/users/user.routes.js` — `GET /api/v1/users/profile`, `PATCH /api/v1/users/profile`
  - Profile page (view mode: avatar/initials, name, email, bio, skills tags)
  - Edit profile form (name, bio, skills — not email/password)
  - Validation for profile updates
- **Docs to update:** —
- **Verify before moving on:** User can view their profile → click Edit → update name/bio/skills → save → changes reflected
- **Status:** ⬜

### Step 1.9: GitHub OAuth Connection
- **What to do:** "Connect GitHub" button on profile, full OAuth flow, store encrypted token
- **What to build:**
  - GitHub OAuth App configuration guide
  - `src/server/src/modules/auth/github.service.js` — OAuth URL generation, code-to-token exchange
  - `GET /api/v1/auth/github` — Redirect to GitHub OAuth
  - `GET /api/v1/auth/github/callback` — Exchange code for token, encrypt token, save to user
  - Token encryption utility (crypto.createCipheriv with AES-256)
  - "Connect GitHub" button on profile page → shows linked GitHub username after connecting
  - "Disconnect GitHub" button
- **Docs to update:** .env.example (add GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, ENCRYPTION_KEY), SECURITY.md (add token encryption section)
- **Verify before moving on:** Click Connect GitHub → redirected to GitHub → authorize → redirected back → GitHub username shown on profile. Disconnect removes the link.
- **Status:** ⬜

### Step 1.10: Stage 1 Docs & Learning Update
- **What to do:** Create remaining Phase 1 docs, update learning files
- **What to build:** No code
- **Docs to create:** CONTRIBUTING.md, TESTING_STRATEGY.md, ADR/TEMPLATE.md, ADR/001_modular_monolith.md, ADR/002_database_decisions.md
- **Docs to update:** LEARNING_LOG.md, INTERVIEW_PREP.md, SKILLS_TRACKER.md, LEARNING_ROADMAP.md (mark Stage 1 ✅)
- **Verify before moving on:** All Phase 1 docs exist, learning entries cover: Express middleware, Mongoose, bcrypt, JWT, httpOnly cookies, Zustand, React Router, GitHub OAuth
- **Status:** ⬜

---

## Stage 2: Workspaces & Projects (Week 2)
**Status:** ⬜ Not Started
**Goal:** Users can create workspaces, invite members, manage roles, create projects.

### Step 2.1: Workspace Model & Backend CRUD
- **What to do:** Create Workspace model and CRUD API endpoints (no UI yet)
- **What to build:**
  - `src/server/src/modules/workspaces/workspace.model.js` — Schema: name, description, owner, slug, settings, timestamps
  - `src/server/src/modules/workspaces/workspace-member.model.js` — Schema: workspaceId, userId, role (owner/admin/member), joinedAt
  - `workspace.service.js` — create (auto-add owner as member), list (user's workspaces), getById, update, delete
  - `workspace.controller.js` — CRUD handlers
  - `workspace.routes.js` — `POST /`, `GET /`, `GET /:id`, `PATCH /:id`, `DELETE /:id`
  - `workspace.validation.js` — Zod schemas for create/update
- **Docs to create:** AUTHORIZATION_DESIGN.md
- **Docs to update:** DATABASE_DESIGN.md (add Workspace, WorkspaceMember collections)
- **Verify before moving on:** Can create/list/get/update/delete workspaces via Postman/Thunder Client. Creator auto-added as owner member.
- **Status:** ⬜

### Step 2.2: Workspace UI (List, Create, Settings)
- **What to do:** Build the frontend pages for workspace management
- **What to build:**
  - Workspace list page — shows all workspaces the user belongs to
  - Create workspace modal/page — name, description
  - Workspace dashboard/home page (shell — will fill with projects later)
  - Workspace settings page — edit name/description, delete workspace (owner only)
  - Zustand workspace store or React Query hooks for workspace data
  - Sidebar or navigation update: workspace selector/list
- **Docs to update:** —
- **Verify before moving on:** Can see workspace list → create new → navigate to it → edit settings → delete it. Good loading/empty states.
- **Status:** ⬜

### Step 2.3: Invitation Model & Backend Endpoints
- **What to do:** Build invitation system backend — invite by email, accept/reject
- **What to build:**
  - `src/server/src/modules/workspaces/invitation.model.js` — Schema: workspaceId, invitedEmail, invitedBy, role, status (pending/accepted/rejected/expired), token, expiresAt
  - Invitation service — create invite (check not already member, not already invited), accept, reject, list pending
  - Invitation endpoints: `POST /workspaces/:id/invitations`, `GET /invitations/mine` (current user's pending), `POST /invitations/:id/accept`, `POST /invitations/:id/reject`
  - Members endpoint: `GET /workspaces/:id/members`, `DELETE /workspaces/:id/members/:userId` (remove member)
- **Docs to update:** DATABASE_DESIGN.md (add Invitation collection)
- **Verify before moving on:** Invite email → creates invitation. Invited user can list/accept/reject. Accept adds to workspace members. Duplicate invites prevented.
- **Status:** ⬜

### Step 2.4: Invitation & Members UI
- **What to do:** Build the frontend for invitations and member management
- **What to build:**
  - Invite form in workspace settings — enter email, select role (admin/member), send
  - "My Invitations" page or dropdown — shows pending invitations with accept/reject buttons
  - Members list in workspace settings — name, email, role badge, remove button (owner/admin only)
  - Success/error notifications for invite/accept/reject actions
- **Docs to update:** —
- **Verify before moving on:** Owner invites email → user logs in → sees invitation → accepts → appears in workspace member list. Owner can remove a member.
- **Status:** ⬜

### Step 2.5: RBAC Middleware & Permission Enforcement
- **What to do:** Create permission matrix and authorization middleware, apply to all workspace routes
- **What to build:**
  - `src/server/src/modules/workspaces/workspace.permissions.js` — Permission matrix: { 'invite:create': ['owner', 'admin'], 'workspace:delete': ['owner'], ... }
  - `src/server/src/shared/middleware/workspace-context.js` — Look up workspace, verify user is member, attach role to request
  - `src/server/src/shared/middleware/authorize.js` — Check if user's role has required permission
  - Apply `workspaceContext` + `authorize('permission')` to all workspace routes
  - Return 403 Forbidden with clear message for unauthorized actions
- **Docs to update:** AUTHORIZATION_DESIGN.md (add permission matrix, middleware flow)
- **Verify before moving on:** Member cannot invite (403). Member cannot delete workspace (403). Admin can invite but cannot delete. Owner can do everything. Test with 3 test users.
- **Status:** ⬜

### Step 2.6: Project Model & Backend CRUD
- **What to do:** Projects inside workspaces — model and API endpoints
- **What to build:**
  - `src/server/src/modules/projects/project.model.js` — Schema: name, description, workspaceId, createdBy, connectedRepo (empty for now), timestamps
  - `project.service.js` — create (within workspace), list (by workspace), getById, update, delete
  - `project.controller.js` — CRUD handlers
  - `project.routes.js` — Nested under workspace: `POST /workspaces/:workspaceId/projects`, `GET /workspaces/:workspaceId/projects`, etc.
  - Apply workspace context middleware (must be workspace member to access projects)
- **Docs to update:** DATABASE_DESIGN.md (add Project collection)
- **Verify before moving on:** Can create/list/get/update/delete projects via API. Non-members get 403.
- **Status:** ⬜

### Step 2.7: Project UI & Dashboard Shell
- **What to do:** Build frontend pages for project management within workspaces
- **What to build:**
  - Project list page within workspace — card grid showing projects
  - Create project modal/form — name, description
  - Project dashboard page — shell layout with tabs/sections (Overview, Code, PRs, AI, Reviews — all placeholders for now)
  - Navigation: Workspace → Projects list → Project dashboard
  - Breadcrumb navigation component
- **Docs to update:** —
- **Verify before moving on:** Navigate to workspace → see projects → create new → click into project dashboard → see shell with placeholder tabs
- **Status:** ⬜

### Step 2.8: Stage 2 Learning Update
- **What to do:** Update learning and progress files
- **Docs to update:** LEARNING_LOG.md, INTERVIEW_PREP.md, SKILLS_TRACKER.md, CURRENT_STATUS.md
- **Verify before moving on:** Learning log covers: multi-tenancy, RBAC, permission middleware, invitation systems, nested REST routes
- **Status:** ⬜

---

## Stage 3: GitHub Integration (Weeks 3-4)
**Status:** ⬜ Not Started
**Goal:** Users can connect repos, view branches/commits/PRs, receive webhooks.

### Step 3.1: GitHub Service & Repository Connection (Backend)
- **What to do:** Create GitHub API service layer and connect-repository endpoint
- **What to build:**
  - `src/server/src/modules/github/github.service.js` — Octokit wrapper: initialize with user's token, `listUserRepos()`, `getRepo()`
  - Token decryption utility (decrypt stored GitHub token for API calls)
  - `src/server/src/modules/github/connected-repo.model.js` — Schema: projectId, githubRepoId, fullName, owner, name, defaultBranch, webhookId
  - `github.controller.js` — `listRepos`, `connectRepo`, `disconnectRepo`
  - `github.routes.js` — `GET /projects/:id/github/repos`, `POST /projects/:id/github/connect`, `DELETE /projects/:id/github/disconnect`
- **Docs to create:** GITHUB_INTEGRATION.md, DATA_FLOW.md
- **Docs to update:** DATABASE_DESIGN.md (add ConnectedRepository collection)
- **Verify before moving on:** API returns user's GitHub repos. Can connect a repo to a project. ConnectedRepository saved in DB.
- **Status:** ⬜

### Step 3.2: Connect Repository UI
- **What to do:** Build the UI for connecting a GitHub repo to a project
- **What to build:**
  - "Connect Repository" button/section in project dashboard
  - Repository selector modal — fetches and displays user's GitHub repos with search/filter
  - Connected repo display — repo name, description, default branch, link to GitHub
  - Disconnect button with confirmation
  - Handle case: GitHub not connected → show "Connect GitHub first" message linking to profile
- **Docs to create:** USER_FLOWS.md (add repo connection flow)
- **Docs to update:** —
- **Verify before moving on:** Click Connect → see repo list → select one → repo info displayed on dashboard. Disconnect works. Shows helpful message if GitHub not linked.
- **Status:** ⬜

### Step 3.3: Branches & Commits API + UI
- **What to do:** Fetch and display repository branches and recent commits
- **What to build:**
  - `github.service.js` — `listBranches(owner, repo)`, `listCommits(owner, repo, branch, perPage)`
  - API endpoints: `GET /projects/:id/github/branches`, `GET /projects/:id/github/commits?branch=main`
  - Branches UI — list/dropdown showing all branches with default branch highlighted
  - Commits UI — list showing: commit message (truncated), author avatar + name, relative date, short SHA with copy button
  - Branch selector that updates commit list
- **Docs to update:** —
- **Verify before moving on:** Can see all branches. Select a branch → see its commits. Commit SHA copyable. Correct author info and dates.
- **Status:** ⬜

### Step 3.4: Pull Request Listing (Backend + UI)
- **What to do:** Fetch PRs from GitHub and display a PR listing page
- **What to build:**
  - `github.service.js` — `listPullRequests(owner, repo, state)` with pagination
  - `src/server/src/modules/github/pull-request.model.js` — Cached PR metadata: number, title, body, state, authorLogin, authorAvatar, headBranch, baseBranch, additions, deletions, changedFiles, createdAt, mergedAt
  - API endpoint: `GET /projects/:id/prs?state=open`
  - PR list page — table/cards: PR number, title, author, status badge (open/closed/merged), branch info, age
  - Filter tabs: Open / Closed / All
  - Cache PRs in MongoDB to reduce GitHub API calls
- **Docs to update:** DATABASE_DESIGN.md (add PullRequest collection)
- **Verify before moving on:** Can see open PRs with correct data. Filter by state works. PRs cached in DB.
- **Status:** ⬜

### Step 3.5: Pull Request Detail Page
- **What to do:** Build the PR detail view with full information
- **What to build:**
  - `github.service.js` — `getPullRequest(owner, repo, number)`, `listPRFiles(owner, repo, number)`
  - API endpoint: `GET /projects/:id/prs/:number`
  - PR detail page layout: title, description (rendered markdown), author info, branch info, status, timestamps
  - Changed files summary: file count, total additions/deletions
  - File list: filename, status (added/modified/deleted), changes count
  - Tab sections: Overview, Files (placeholder for diff viewer), AI (placeholder), Reviews (placeholder)
- **Docs to update:** —
- **Verify before moving on:** Click PR in list → see full detail. Description renders markdown. Files listed with change counts. Tabs exist as placeholders.
- **Status:** ⬜

### Step 3.6: Webhook Route & Signature Verification
- **What to do:** Set up the GitHub webhook receiver endpoint with security
- **What to build:**
  - `src/server/src/modules/github/webhook.controller.js` — Receive webhook POST
  - `src/server/src/modules/github/webhook.middleware.js` — Verify webhook signature (HMAC SHA-256) using webhook secret
  - Raw body parsing middleware for webhook route (need raw body for signature verification)
  - `POST /api/v1/webhooks/github` route (outside normal auth — uses signature verification instead)
  - Log received webhook events for debugging
  - Webhook secret generation utility
- **Docs to update:** .env.example (add GITHUB_WEBHOOK_SECRET), SECURITY.md (add webhook signature verification section)
- **Verify before moving on:** Route accepts POST. Invalid signature → 401. Valid signature → 200. Events logged to console.
- **Status:** ⬜

### Step 3.7: Webhook Event Handlers & Auto-Registration
- **What to do:** Process webhook events and auto-register webhooks when connecting a repo
- **What to build:**
  - `src/server/src/modules/github/webhook.service.js` — Event dispatcher, handler map
  - Handler: `push` → log (future: update commits)
  - Handler: `pull_request` (opened/closed/merged/reopened) → upsert PullRequest document in DB
  - Idempotency: store processed delivery IDs to prevent duplicate processing
  - Auto-register webhook on repo connect: `github.service.js` — `createWebhook(owner, repo, webhookUrl, secret)`
  - Auto-delete webhook on repo disconnect
  - Use ngrok or similar for local webhook testing
- **Docs to update:** GITHUB_INTEGRATION.md (add webhook events table, delivery flow), REALTIME_EVENTS.md (placeholder for future real-time push)
- **Verify before moving on:** Connect repo → webhook auto-registered on GitHub. Open PR on GitHub → webhook fires → PR appears in MergeNest. Close PR → status updates. Duplicate deliveries ignored.
- **Status:** ⬜

### Step 3.8: Stage 3 Learning Update
- **Docs to update:** LEARNING_LOG.md, INTERVIEW_PREP.md, SKILLS_TRACKER.md, CURRENT_STATUS.md
- **Verify before moving on:** Learning log covers: REST API integration (Octokit), OAuth token management, webhook security (HMAC), event-driven architecture, caching strategies, idempotency
- **Status:** ⬜

---

## Stage 4: AI Features (Weeks 5-6)
**Status:** ⬜ Not Started
**Goal:** AI can summarize PRs, review code, explain code, generate tests, and chat.

### Step 4.1: Gemini API Client & Prompt System
- **What to do:** Set up the Google Gemini API wrapper and prompt template system
- **What to build:**
  - `src/server/src/modules/ai/services/llm.service.js` — Gemini API client: `generateContent(prompt, options)`, `generateContentStream(prompt, options)`, model selection (Flash vs Pro), error handling, retry with backoff
  - `src/server/src/modules/ai/prompts/` folder — Prompt template loader utility
  - `src/server/src/modules/ai/ai.controller.js` — Base controller
  - `src/server/src/modules/ai/ai.routes.js` — Base routes
  - Test endpoint: `POST /api/v1/ai/test` — sends a simple prompt, returns response (dev only)
- **Docs to create:** AI_ARCHITECTURE.md
- **Docs to update:** .env.example (add GEMINI_API_KEY)
- **Verify before moving on:** Test endpoint sends prompt to Gemini → receives response → returns to client. Rate limit errors handled gracefully.
- **Status:** ⬜

### Step 4.2: AI Rate Limiting & Structured Output
- **What to do:** Add rate limiting for AI endpoints and structured output parsing
- **What to build:**
  - Per-user rate limiter for AI endpoints (e.g., 20 requests/hour free tier)
  - `src/server/src/modules/ai/services/output-parser.js` — Parse Gemini responses: extract JSON from markdown code blocks, validate against expected schema
  - `src/server/src/shared/middleware/rate-limiter.js` — Express rate limiter (using express-rate-limit + in-memory store; Redis later if needed)
  - Structured output helper: build prompts that request JSON responses, parse and validate results
  - Error messages for rate limit exceeded (429 with retry-after)
- **Docs to update:** AI_ARCHITECTURE.md (add rate limiting section, structured output section)
- **Verify before moving on:** Exceeding rate limit returns 429. Structured output extracts clean JSON from Gemini's response. Malformed responses handled with fallback.
- **Status:** ⬜

### Step 4.3: AI PR Summarizer
- **What to do:** Generate AI summary for a pull request
- **What to build:**
  - `src/server/src/modules/ai/prompts/pr-summary.prompt.js` — Template: PR title, description, file list, diff stats → structured summary
  - `src/server/src/modules/ai/services/pr-summary.service.js` — Fetch PR data, build prompt, call Gemini, parse response
  - Endpoint: `POST /api/v1/projects/:id/prs/:number/ai-summary`
  - Store summary in PullRequest document (aiSummary field)
  - Display summary on PR detail page: overview, key changes, potential risks, complexity rating
  - "Regenerate" button to get a fresh summary
- **Docs to update:** —
- **Verify before moving on:** Click "Generate Summary" on a PR → loading indicator → structured summary appears (overview, changes, risks). Regenerate works. Summary persisted.
- **Status:** ⬜

### Step 4.4: AI Code Reviewer
- **What to do:** AI analyzes PR diff and returns structured code review findings
- **What to build:**
  - `src/server/src/modules/ai/prompts/code-review.prompt.js` — Template: file diffs → array of { file, line, severity, category, issue, suggestion }
  - `src/server/src/modules/ai/services/code-review.service.js` — Fetch diffs per file, build prompt, parse findings
  - Endpoint: `POST /api/v1/projects/:id/prs/:number/ai-review`
  - Store AI review in PullRequest document
  - Display on PR page: findings grouped by file, severity badges (critical/warning/info), expandable suggestions
  - Handle large PRs: chunk files if too many, process individually
- **Docs to update:** —
- **Verify before moving on:** Click "AI Review" → loading → see findings list with file, line number, severity, issue description, suggested fix. Large PRs don't crash.
- **Status:** ⬜

### Step 4.5: AI Code Explainer
- **What to do:** Select code from a file diff → get AI explanation
- **What to build:**
  - `src/server/src/modules/ai/prompts/code-explain.prompt.js` — Template: code snippet + language → explanation { summary, lineByLine[], conceptsUsed[], complexity }
  - `src/server/src/modules/ai/services/code-explain.service.js` — Process explanation request
  - Endpoint: `POST /api/v1/ai/explain`
  - UI: select text in diff viewer or code display → "Explain" floating button → side panel with explanation
  - Explanation display: summary, line-by-line breakdown, concepts used, complexity analysis
- **Docs to update:** —
- **Verify before moving on:** Select code → click Explain → panel shows clear explanation with concepts. Different languages work. Empty selection handled.
- **Status:** ⬜

### Step 4.6: AI Test Generator (Enhanced)
- **What to do:** Generate multi-language, multi-framework test cases from selected code
- **What to build:**
  - `src/server/src/modules/ai/prompts/test-generator.prompt.js` — Template: code + language → detect framework, generate tests { framework, testCode, explanation, edgeCases[] }
  - `src/server/src/modules/ai/services/test-generator.service.js` — Detect language, select appropriate framework
  - Endpoint: `POST /api/v1/ai/generate-tests`
  - UI: select code → "Generate Tests" button → test code display with syntax highlighting
  - Copy button to copy generated test code
  - Framework detection: JS → Jest/Vitest, Python → Pytest, Java → JUnit, etc.
- **Docs to update:** —
- **Verify before moving on:** Select JS function → generates Jest tests with proper structure. Select Python → generates Pytest. Copy button works. Edge cases included.
- **Status:** ⬜

### Step 4.7: AI Chat — Backend (Models, Endpoints, History)
- **What to do:** Build the backend for per-project AI chat with conversation history
- **What to build:**
  - `src/server/src/modules/ai/models/ai-conversation.model.js` — Schema: projectId, userId, title, createdAt, updatedAt
  - `src/server/src/modules/ai/models/ai-message.model.js` — Schema: conversationId, role (user/assistant), content, createdAt
  - `src/server/src/modules/ai/services/chat.service.js` — Create conversation, send message (append to history, build context from last N messages, call Gemini), list conversations, get messages
  - Chat endpoints: `POST /projects/:id/ai/conversations`, `GET /projects/:id/ai/conversations`, `POST /ai/conversations/:convId/messages`, `GET /ai/conversations/:convId/messages`
  - Context window management: include last 10 messages as conversation context
- **Docs to update:** DATABASE_DESIGN.md (add AIConversation, AIMessage collections)
- **Verify before moving on:** Can create conversation via API → send message → get AI response → send follow-up → response uses previous context. History persisted.
- **Status:** ⬜

### Step 4.8: AI Chat — Frontend (UI & Streaming)
- **What to do:** Build the chat interface with message display, input, and streaming responses
- **What to build:**
  - Chat page/panel within project dashboard (AI tab)
  - Conversation list sidebar — select conversation or create new
  - Message list — user messages right-aligned, AI messages left-aligned with markdown rendering
  - Message input — textarea with submit button, Ctrl+Enter to send
  - Streaming response display using SSE or chunked response (show text appearing word by word)
  - Loading indicator while AI is thinking
  - Auto-scroll to latest message
  - Conversation title auto-generation (from first message)
- **Docs to update:** —
- **Verify before moving on:** Can start chat → type question → see streaming response → continue conversation → switch between conversations → new conversation works. Markdown renders in AI responses.
- **Status:** ⬜

### Step 4.9: Stage 4 Learning Update
- **Docs to update:** LEARNING_LOG.md, INTERVIEW_PREP.md, SKILLS_TRACKER.md, CURRENT_STATUS.md
- **Verify before moving on:** Learning log covers: LLM API integration, prompt engineering, structured outputs, streaming responses, rate limiting, context window management, SSE
- **Status:** ⬜

---

## Stage 5: Code Review System (Week 7)
**Status:** ⬜ Not Started
**Goal:** Users can view diffs, add inline comments, have threaded discussions, resolve threads.

### Step 5.1: Diff Viewer — File List & Basic Display
- **What to do:** Fetch PR file diffs from GitHub and display them with syntax highlighting
- **What to build:**
  - `github.service.js` — `getFileDiff(owner, repo, number, filename)` returns patch/diff content
  - Install and configure `react-diff-viewer-continued`
  - Files tab on PR detail page — list of changed files (filename, status badge, +/- counts)
  - Click file → shows diff with green/red line highlighting
  - Collapsible file sections (expand/collapse individual files)
- **Docs to update:** —
- **Verify before moving on:** PR Files tab shows all changed files. Click file → diff renders with correct additions (green) and deletions (red). Large files don't crash.
- **Status:** ⬜

### Step 5.2: Diff Viewer — View Modes & Navigation
- **What to do:** Add split/unified view toggle and file navigation
- **What to build:**
  - Split view (side-by-side: old on left, new on right) and Unified view toggle
  - File navigation sidebar — jump to specific file in diff
  - Line numbers on both sides
  - File status indicators in sidebar: added (green), modified (yellow), deleted (red)
  - "Viewed" checkbox per file (track which files user has reviewed)
  - Progress indicator: "3 of 7 files viewed"
- **Docs to update:** —
- **Verify before moving on:** Can toggle split/unified view. Can jump to files. Line numbers correct. Viewed tracking works. Progress shows.
- **Status:** ⬜

### Step 5.3: Review Thread & Comment Models (Backend)
- **What to do:** Create models and API endpoints for inline review comments
- **What to build:**
  - `src/server/src/modules/reviews/review-thread.model.js` — Schema: pullRequestId, projectId, filePath, lineNumber, side (left/right), status (open/resolved), createdBy, createdAt
  - `src/server/src/modules/reviews/review-comment.model.js` — Schema: threadId, authorId, body, createdAt, updatedAt
  - `review.service.js` — createThread (with initial comment), addComment, resolveThread, reopenThread, getThreadsForPR
  - `review.controller.js` + `review.routes.js` — `POST /prs/:number/threads`, `POST /threads/:id/comments`, `PATCH /threads/:id/resolve`, `GET /prs/:number/threads`
- **Docs to update:** DATABASE_DESIGN.md (add ReviewThread, ReviewComment collections)
- **Verify before moving on:** Can create thread on file+line → add comment → fetch all threads for PR → resolve/reopen thread. All via API.
- **Status:** ⬜

### Step 5.4: Inline Comments UI
- **What to do:** Click on a diff line → comment form appears inline → submit → comment shows on that line
- **What to build:**
  - Clickable "+" icon on diff line hover → opens inline comment form below that line
  - Comment form: textarea + Submit/Cancel buttons
  - Display existing comments inline at their line position
  - Comment display: author avatar, name, timestamp, comment body (markdown rendered)
  - Thread indicator on lines that have comments (highlight or icon)
  - Fetch and display all existing threads when viewing a PR diff
- **Docs to update:** —
- **Verify before moving on:** Hover line → see "+" → click → form appears at correct position → type comment → submit → comment shows inline. Existing comments load on page open.
- **Status:** ⬜

### Step 5.5: Thread Replies, Resolution & Review Status
- **What to do:** Reply to comment threads, resolve/reopen, track overall review status
- **What to build:**
  - Reply form within existing thread (click "Reply" → textarea)
  - Thread expand/collapse (show latest comment, expand to see all)
  - Resolve button (changes thread status, visually dims the thread)
  - Reopen button on resolved threads
  - Review status summary at top of PR: "X open threads, Y resolved"
  - Display AI review findings alongside human comments (AI findings from Step 4.4 shown as special threads)
  - Review status badge on PR list page (has unresolved threads indicator)
- **Docs to update:** —
- **Verify before moving on:** Can reply to thread → see reply in thread. Resolve → thread dimmed. Reopen works. AI findings visible. PR list shows review indicator.
- **Status:** ⬜

### Step 5.6: Stage 5 Learning Update
- **Docs to update:** LEARNING_LOG.md, INTERVIEW_PREP.md, SKILLS_TRACKER.md, CURRENT_STATUS.md
- **Verify before moving on:** Learning log covers: code diff rendering, inline UI positioning, threaded discussion models, state management for complex UI, review workflow design
- **Status:** ⬜

---

## Stage 6: Notifications & Real-Time (Week 8 — first half)
**Status:** ⬜ Not Started
**Goal:** Users receive real-time notifications for comments, reviews, mentions.

### Step 6.1: Socket.IO Server Setup & Authentication
- **What to do:** Set up Socket.IO server alongside Express with JWT authentication
- **What to build:**
  - `src/server/src/config/socket.js` — Socket.IO server initialization, attach to HTTP server
  - Socket authentication middleware — extract JWT from handshake auth/cookie, verify, attach user
  - Room management: user joins `user:{userId}` room on connect
  - Connection/disconnection logging
  - Export `getIO()` utility for emitting from services
  - Client-side: `src/client/src/services/socket.js` — Socket.IO client setup, auto-connect on login, disconnect on logout
- **Docs to create:** REALTIME_ARCHITECTURE.md
- **Docs to update:** —
- **Verify before moving on:** Client connects on login, server logs connection with user ID, JWT invalid → connection rejected. Disconnect on logout.
- **Status:** ⬜

### Step 6.2: Notification Model & Service (Backend)
- **What to do:** Create notification model and service that creates + emits notifications
- **What to build:**
  - `src/server/src/modules/notifications/notification.model.js` — Schema: userId, type (review_comment, thread_resolved, pr_updated, invitation_received, etc.), title, message, link, isRead, metadata, createdAt
  - `src/server/src/modules/notifications/notification.service.js` — `createAndEmit(userId, type, data)`: save to DB + emit via Socket.IO to user's room
  - `notification.controller.js` — `getMyNotifications`, `markAsRead`, `markAllAsRead`, `getUnreadCount`
  - `notification.routes.js` — `GET /notifications`, `PATCH /notifications/:id/read`, `PATCH /notifications/read-all`, `GET /notifications/unread-count`
- **Docs to create:** REALTIME_EVENTS.md
- **Docs to update:** DATABASE_DESIGN.md (add Notification collection)
- **Verify before moving on:** Can create notification via service → appears in DB → emitted via socket. API returns notifications list. Mark as read works.
- **Status:** ⬜

### Step 6.3: Notification Triggers & Integration
- **What to do:** Add notification triggers to existing features (reviews, PRs, invitations)
- **What to build:**
  - Trigger in `review.service.js` → when new comment created → notify PR author + other thread participants
  - Trigger in `review.service.js` → when thread resolved → notify thread creator
  - Trigger in `webhook.service.js` → when PR status changes → notify project members
  - Trigger in `invitation.service.js` → when invitation sent → notify invited user (if registered)
  - Activity event model: `src/server/src/modules/activity/activity-event.model.js` — Schema: workspaceId, projectId, actorId, action, targetType, targetId, metadata, createdAt
  - Activity service: log key actions for future activity feed
- **Docs to update:** DATABASE_DESIGN.md (add ActivityEvent collection), REALTIME_EVENTS.md (add all event types)
- **Verify before moving on:** User A comments on PR → User B receives socket event in real-time. Thread resolved → notification sent. PR webhook → notification sent. Activity events logged.
- **Status:** ⬜

### Step 6.4: Notification Center UI
- **What to do:** Build the notification bell icon, dropdown, and notification management UI
- **What to build:**
  - Notification bell icon in navbar with unread count badge (red circle with number)
  - Notification dropdown panel — recent notifications list, each clickable (navigates to relevant page)
  - Notification item: icon (by type), title, message preview, relative time, read/unread indicator
  - "Mark all as read" button
  - Real-time update: new notification → bell count increments, notification appears at top of dropdown without page refresh
  - Socket listener in React: listen for `notification:new` event → update Zustand notification store
  - Toast/popup for high-priority notifications (optional)
- **Docs to update:** —
- **Verify before moving on:** User A adds review comment → User B sees bell count increase instantly → opens dropdown → sees notification → clicks → navigates to PR. Mark all read clears badge.
- **Status:** ⬜

### Step 6.5: Stage 6 Learning Update
- **Docs to update:** LEARNING_LOG.md, INTERVIEW_PREP.md, SKILLS_TRACKER.md, CURRENT_STATUS.md
- **Verify before moving on:** Learning log covers: WebSockets, Socket.IO (rooms, middleware, events), real-time architecture, event-driven notifications, activity logging
- **Status:** ⬜

---

## Stage 7: Deployment & Polish (Week 8 — second half)
**Status:** ⬜ Not Started
**Goal:** App is deployed, documented, polished, ready for resume.

### Step 7.1: Docker Setup
- **What to do:** Dockerfile for backend, docker-compose for local development
- **What to build:**
  - `Dockerfile` for server — multi-stage build (install deps → copy source → expose port)
  - `docker-compose.yml` — app service + MongoDB service, volumes for data persistence
  - `.dockerignore` — exclude node_modules, .env, .git
  - Health check in docker-compose
  - Update npm scripts: `docker:build`, `docker:up`, `docker:down`
- **Docs to create:** DEPLOYMENT.md
- **Docs to update:** SETUP.md (add Docker setup instructions), README.md (add Docker option)
- **Verify before moving on:** `docker compose up` starts app + MongoDB. App connects to Dockerized MongoDB. API health check passes. App works fully in Docker.
- **Status:** ⬜

### Step 7.2: Cloud Deployment — Backend (Render)
- **What to do:** Deploy backend to Render free tier
- **What to build:**
  - Render web service configuration (`render.yaml` or manual setup)
  - Production environment variables on Render
  - Health check endpoint (`GET /api/v1/health`) with DB connection check
  - Production MongoDB Atlas connection string
  - CORS configuration: allow Vercel frontend URL
  - Webhook URL update: change to production URL for GitHub webhooks
- **Docs to update:** DEPLOYMENT.md (add Render deployment steps)
- **Verify before moving on:** Backend accessible at `https://mergenest-api.onrender.com` (or similar). Health check returns 200. MongoDB Atlas connected. API endpoints respond.
- **Status:** ⬜

### Step 7.3: Cloud Deployment — Frontend (Vercel)
- **What to do:** Deploy frontend to Vercel
- **What to build:**
  - Vercel project configuration (framework: Vite, build command, output directory)
  - Environment variables on Vercel: `VITE_API_URL` pointing to Render backend
  - Production API URL in client config
  - Vercel rewrites for SPA routing (all routes → index.html)
  - Test all features in production: auth, workspaces, GitHub, AI, reviews, notifications
- **Docs to update:** DEPLOYMENT.md (add Vercel deployment steps), README.md (add live demo link)
- **Verify before moving on:** Frontend accessible at `https://mergenest.vercel.app` (or similar). Login works. All features functional end-to-end. No CORS errors.
- **Status:** ⬜

### Step 7.4: UI Polish & Error States
- **What to do:** Loading states, error states, empty states, responsive tweaks
- **What to build:**
  - Skeleton loaders for data-heavy pages (workspace list, PR list, commits, chat)
  - Error boundary component (catches React errors, shows friendly message)
  - Empty state components (no workspaces yet, no PRs, no conversations, etc.) with helpful CTAs
  - 404 page (route not found)
  - Responsive fixes: test on mobile viewport, fix any overflow/layout issues
  - Consistent toast notifications across all actions
  - Fix any visual bugs found during testing
- **Docs to update:** —
- **Verify before moving on:** Every page handles loading (skeleton), error (boundary), and empty (helpful message) states. Mobile viewport looks acceptable. No visual bugs.
- **Status:** ⬜

### Step 7.5: README, Screenshots & Final Documentation
- **What to do:** Professional README with screenshots, complete all documentation, final learning updates
- **What to build:**
  - Take screenshots of all major features (dashboard, PR view, diff viewer, AI chat, notifications)
  - Create architecture diagram (Mermaid or text-based)
  - Complete README with all sections: hero banner, one-liner, features list, tech stack table, screenshots, getting started, environment variables, Docker, deployment, API overview, project structure, roadmap, contributing, license
  - Review and update all docs for accuracy
- **Docs to update:** README.md (final polished version), LEARNING_LOG.md (final entries), INTERVIEW_PREP.md (final Q&A), SKILLS_TRACKER.md (final skill levels), LEARNING_ROADMAP.md (all stages ✅), CURRENT_STATUS.md (all stages ✅ — project complete!)
- **Verify before moving on:** README looks professional and impressive. Screenshots show real working features. Demo link works. All docs are accurate and up to date. Resume bullet points are ready.
- **Status:** ⬜

---

## Summary

| Stage | Steps | Estimated Time | Status |
|---|---|---|---|
| Stage 0: Setup & Docs | 4 steps | Day 1 | ⬜ |
| Stage 1: Auth & Users | 10 steps | Week 1 | ⬜ |
| Stage 2: Workspaces & Projects | 8 steps | Week 2 | ⬜ |
| Stage 3: GitHub Integration | 8 steps | Weeks 3-4 | ⬜ |
| Stage 4: AI Features | 9 steps | Weeks 5-6 | ⬜ |
| Stage 5: Code Review | 6 steps | Week 7 | ⬜ |
| Stage 6: Notifications | 5 steps | Week 8 (first half) | ⬜ |
| Stage 7: Deployment & Polish | 5 steps | Week 8 (second half) | ⬜ |
| **TOTAL** | **55 steps** | **~8 weeks** | ⬜ |
```

**Content source:** MERGENEST-BLUEPRINT.md (features per week), DOC-CREATION-PLAN.md (which docs to create when), previous evaluation (backend architecture, folder structure)

---

### FILE 33: `progress/CURRENT_STATUS.md`

**Phase:** 0 (create with initial empty state)
**Update when:** After EVERY step is completed — this is the most frequently updated file in the project

**Purpose:** At any moment, you (or the AI) open this file and immediately know: what was just finished, what to work on RIGHT NOW, and what comes next. The AI reads this file at the start of every session to understand where you are.

**Sections:**

```
# MergeNest — Current Status

> **Last Updated:** [date and time]
>
> **Current Stage:** [Stage name]
> **Current Step:** [Step number and title]
> **Overall Progress:** [X / 55 steps completed]

---

## 🟢 Currently Working On

### Step [X.X]: [Title]
- **What to do:** [copied from STAGES_AND_STEPS.md]
- **Started:** [date]
- **Blockers:** [any issues blocking progress, or "None"]
- **Notes:** [any relevant notes about current progress]

---

## ✅ Recently Completed

| Step | Title | Completed | Key Files Created/Changed |
|---|---|---|---|
| — | — | — | — |

(Most recent at top. Keep last 5-10 entries, move older ones to Completed Archive below.)

---

## 📋 Coming Up Next

| Step | Title | What It Involves |
|---|---|---|
| [next step] | [title] | [1-line summary] |
| [step after] | [title] | [1-line summary] |
| [step after] | [title] | [1-line summary] |

(Show next 3-5 upcoming steps.)

---

## 📊 Stage Progress

| Stage | Status | Steps Done | Total Steps |
|---|---|---|---|
| Stage 0: Setup & Docs | ⬜ Not Started | 0 | 4 |
| Stage 1: Auth & Users | ⬜ Not Started | 0 | 10 |
| Stage 2: Workspaces & Projects | ⬜ Not Started | 0 | 8 |
| Stage 3: GitHub Integration | ⬜ Not Started | 0 | 8 |
| Stage 4: AI Features | ⬜ Not Started | 0 | 9 |
| Stage 5: Code Review | ⬜ Not Started | 0 | 6 |
| Stage 6: Notifications | ⬜ Not Started | 0 | 5 |
| Stage 7: Deployment & Polish | ⬜ Not Started | 0 | 5 |

---

## 📁 Docs Created So Far

| File | Created In Step | Status |
|---|---|---|
| MERGENEST-BLUEPRINT.md | Pre-project | ✅ Exists |
| DOC-CREATION-PLAN.md | Pre-project | ✅ Exists |

---

## 🗄️ Completed Archive

(Move older completed steps here to keep "Recently Completed" short.)
```

**Update process (after every step):**
1. Move "Currently Working On" to "Recently Completed" table
2. Update "Currently Working On" with the next step
3. Update "Coming Up Next" (remove the step you just started, add next one from queue)
4. Update "Stage Progress" table (increment steps done)
5. Update "Docs Created So Far" if new docs were created
6. Update "Last Updated" timestamp
7. Update "Overall Progress" count

---

## Update Rules Summary

| Trigger | Files to Update |
|---|---|
| **Step completed** | **progress/CURRENT_STATUS.md, progress/STAGES_AND_STEPS.md (mark step ✅)** |
| New module added | SYSTEM_ARCHITECTURE.md, BACKEND_ARCHITECTURE.md |
| New collection added | DATABASE_DESIGN.md |
| New API endpoint pattern | Verify it matches API_STANDARDS.md |
| New env variable | .env.example, SETUP.md |
| Architecture decision made | Create new ADR |
| Security concern identified | SECURITY.md |
| Feature completed | LEARNING_LOG.md, INTERVIEW_PREP.md, SKILLS_TRACKER.md |
| Phase started | LEARNING_ROADMAP.md (mark phase status as 🟡 In Progress) |
| Phase completed | LEARNING_ROADMAP.md (mark ✅), SKILLS_TRACKER.md (update all skills), LEARNING_PROFILE.md (promote skill levels) |
| New Socket.IO event | REALTIME_EVENTS.md |
| README needs update | After each phase: add features, screenshots |
