# MergeNest — Stages & Steps

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** This is the complete master roadmap and execution checklist for building MergeNest. It divides the entire project into 8 stages and 55 granular, actionable steps (~2–4 hours each).
> - **What each step contains:**
>   1. **What to do:** Clear summary of the task.
>   2. **What to build:** Exact files, schemas, endpoints, and UI components to create.
>   3. **Docs to create / Docs to update:** Documentation files to write or keep in sync with this step.
>   4. **Verify before moving on:** Practical test criteria before marking the step complete.
> - **Who reads it:** You and AI coding assistants to follow an organized, error-free engineering plan without guessing what to build next.
> - **When to update:** Whenever a step is completed, change its status box from `⬜` to `✅` and update `progress/CURRENT_STATUS.md`.

---

## 🗺️ Master Steps Quick Reference (All 55 Steps)

| Step | Stage | Title | Short Summary (What It Builds) | Status |
|---|---|---|---|:---:|
| **0.1** | Stage 0 | Initialize Repository & Server Project | Git init, `src/server/` setup, Express/Mongoose packages, root structure | ⬜ |
| **0.2** | Stage 0 | Initialize Client Project | Scaffold `src/client/` with Vite + React + Tailwind CSS v4 | ⬜ |
| **0.3** | Stage 0 | Create Phase 0 Documentation | Create README, AGENTS.md, PRD, architecture, and learning files | ⬜ |
| **0.4** | Stage 0 | Set Up Development Tooling | ESLint, Prettier, nodemon, and npm dev/build scripts | ⬜ |
| **1.1** | Stage 1 | Express App & MongoDB Connection | Express app setup, Mongoose connection, env validation, HTTP server | ⬜ |
| **1.2** | Stage 1 | Error Handling & Utility Layer | ApiError class, ApiResponse, asyncHandler, global error handler, health check | ⬜ |
| **1.3** | Stage 1 | User Model & Registration Endpoint | User schema, bcrypt password hash, register endpoint & Zod validation | ⬜ |
| **1.4** | Stage 1 | Login, JWT & Auth Middleware | Login endpoint, JWT generation in httpOnly cookie, auth middleware | ⬜ |
| **1.5** | Stage 1 | Frontend Project Structure & Routing | React Router v6 setup, layouts, Axios API client instance | ⬜ |
| **1.6** | Stage 1 | Auth Pages & Auth State | Login & Register pages, Zustand auth store, client form validation | ⬜ |
| **1.7** | Stage 1 | Protected Routes & Navigation | ProtectedRoute wrapper, Navbar with user status, session check on mount | ⬜ |
| **1.8** | Stage 1 | User Profile (Backend + UI) | Profile view/edit endpoints, profile page with skills/bio | ⬜ |
| **1.9** | Stage 1 | GitHub OAuth Connection | GitHub OAuth App flow, callback, encrypted token storage, connect/disconnect UI | ⬜ |
| **1.10** | Stage 1 | Stage 1 Docs & Learning Update | ADRs (auth, DB, monolith), testing strategy, learning log & interview prep | ⬜ |
| **2.1** | Stage 2 | Workspace Model & Backend CRUD | Workspace & WorkspaceMember schemas, CRUD service, controller & routes | ⬜ |
| **2.2** | Stage 2 | Workspace UI (List, Create, Settings) | Workspace list page, creation modal, settings page, workspace store | ⬜ |
| **2.3** | Stage 2 | Invitation Model & Backend Endpoints | Invitation schema, invite by email, accept/reject & member endpoints | ⬜ |
| **2.4** | Stage 2 | Invitation & Members UI | Invite member form, pending invites page, member list & remove button | ⬜ |
| **2.5** | Stage 2 | RBAC Middleware & Permission Enforcement | Permission matrix (owner/admin/member), workspaceContext & authorize middleware | ⬜ |
| **2.6** | Stage 2 | Project Model & Backend CRUD | Project schema, nested CRUD routes under workspace, member access checks | ⬜ |
| **2.7** | Stage 2 | Project UI & Dashboard Shell | Project cards grid, create project form, project dashboard shell with tabs | ⬜ |
| **2.8** | Stage 2 | Stage 2 Learning Update | Update learning files on multi-tenancy, RBAC, nested REST patterns | ⬜ |
| **3.1** | Stage 3 | GitHub Service & Repo Connection (Backend) | Octokit wrapper, token decryptor, ConnectedRepository schema, connect API | ⬜ |
| **3.2** | Stage 3 | Connect Repository UI | Repo selector modal with user repos list, connected repo dashboard display | ⬜ |
| **3.3** | Stage 3 | Branches & Commits API + UI | Fetch branches and commits, branch selector dropdown, commit list UI | ⬜ |
| **3.4** | Stage 3 | Pull Request Listing (Backend + UI) | PullRequest cached schema, PR listing API with state filter, PR list UI | ⬜ |
| **3.5** | Stage 3 | Pull Request Detail Page | PR detail API, markdown body render, file changes count, tab layout | ⬜ |
| **3.6** | Stage 3 | Webhook Route & Signature Verification | HMAC SHA-256 signature verification middleware, raw body parser, webhook route | ⬜ |
| **3.7** | Stage 3 | Webhook Event Handlers & Auto-Registration | Handlers for push/PR events, delivery idempotency, auto-register on repo connect | ⬜ |
| **3.8** | Stage 3 | Stage 3 Learning Update | Update learning log on Webhooks, HMAC, Octokit, event-driven design | ⬜ |
| **4.1** | Stage 4 | Gemini API Client & Prompt System | Gemini API client wrapper, retry logic, prompt templates loader, test endpoint | ⬜ |
| **4.2** | Stage 4 | AI Rate Limiting & Structured Output | Per-user rate limiter, JSON extractor from LLM markdown, schema validator | ⬜ |
| **4.3** | Stage 4 | AI PR Summarizer | PR summary prompt, summary generation API, cached summary UI on PR page | ⬜ |
| **4.4** | Stage 4 | AI Code Reviewer | PR diff review prompt, findings generator (severity/file/line), review UI | ⬜ |
| **4.5** | Stage 4 | AI Code Explainer | Code selection handler, explanation prompt, floating explain button & panel | ⬜ |
| **4.6** | Stage 4 | AI Test Generator (Enhanced) | Multi-language test prompt, framework detection (Jest/Pytest/JUnit), test code UI | ⬜ |
| **4.7** | Stage 4 | AI Chat — Backend (Models & Endpoints) | AIConversation & AIMessage schemas, chat service with last 10 msgs context | ⬜ |
| **4.8** | Stage 4 | AI Chat — Frontend (UI & Streaming) | Chat panel, conversation switcher, message history, streaming response display | ⬜ |
| **4.9** | Stage 4 | Stage 4 Learning Update | Update learning files on LLMs, prompt engineering, context windows, SSE | ⬜ |
| **5.1** | Stage 5 | Diff Viewer — File List & Basic Display | Octokit file diff fetcher, react-diff-viewer-continued integration, diff highlighting | ⬜ |
| **5.2** | Stage 5 | Diff Viewer — View Modes & Navigation | Split vs unified view toggle, file jump sidebar, line numbers, viewed tracker | ⬜ |
| **5.3** | Stage 5 | Review Thread & Comment Models (Backend) | ReviewThread & ReviewComment schemas, thread CRUD & resolve endpoints | ⬜ |
| **5.4** | Stage 5 | Inline Comments UI | Hover "+" on diff lines, inline comment form, line-anchored comments display | ⬜ |
| **5.5** | Stage 5 | Thread Replies, Resolution & Review Status | Thread reply form, resolve/reopen thread toggle, AI findings as threads | ⬜ |
| **5.6** | Stage 5 | Stage 5 Learning Update | Update learning files on diff algorithms, inline UI state, threaded reviews | ⬜ |
| **6.1** | Stage 6 | Socket.IO Server Setup & Authentication | Socket.IO server setup, JWT handshake authentication, user room joining | ⬜ |
| **6.2** | Stage 6 | Notification Model & Service (Backend) | Notification schema, create-and-emit service, notification endpoints | ⬜ |
| **6.3** | Stage 6 | Notification Triggers & Integration | Trigger events on review comment, thread resolve, PR update, invitation | ⬜ |
| **6.4** | Stage 6 | Notification Center UI | Bell icon badge with unread count, notification dropdown, real-time update listener | ⬜ |
| **6.5** | Stage 6 | Stage 6 Learning Update | Update learning files on WebSockets, Socket.IO rooms, real-time state | ⬜ |
| **7.1** | Stage 7 | Docker Setup | Multi-stage Dockerfile for server, docker-compose.yml with MongoDB volume | ⬜ |
| **7.2** | Stage 7 | Cloud Deployment — Backend (Render) | Render web service deployment, MongoDB Atlas config, production CORS | ⬜ |
| **7.3** | Stage 7 | Cloud Deployment — Frontend (Vercel) | Vercel SPA deployment, production environment variables, live backend link | ⬜ |
| **7.4** | Stage 7 | UI Polish & Error States | Skeleton loaders, React error boundary, empty states, responsive mobile fixes | ⬜ |
| **7.5** | Stage 7 | README, Screenshots & Final Docs | High-quality README with screenshots, architecture diagrams, resume bullets | ⬜ |

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
