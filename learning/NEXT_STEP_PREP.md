# MergeNest — Next Step Prep

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** Before starting ANY step, open this file and find that step. It tells you the exact concepts to study, estimated prep time, and resources — so you're never confused during implementation.
> - **How it differs from LEARNING_ROADMAP.md:** LEARNING_ROADMAP covers entire phases (broad). This file covers individual steps (precise — exactly what you need before each 2-4 hour work block).
> - **Who reads it:** You (before starting each step) and AI assistants (to know what to teach before coding).
> - **When to update:** When a step is completed, mark its prep as `✅ Done`. AI can also add new prep items discovered during implementation.
> - **How to use:**
>   1. Check `progress/CURRENT_STATUS.md` → find your current/next step number.
>   2. Find that step below → study the listed topics.
>   3. Once you feel ready → start the step.

---

## Stage 0: Project Setup & Documentation

### Before Step 0.1: Initialize Repository & Server Project
**Prep time:** 15 min (you likely already know this)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| `npm init` and `package.json` structure | You're creating the backend project from scratch | npm docs: "Creating a package.json" |
| Express.js basics (what it does) | Main backend framework — you'll install it here | You already know this ✅ |
| Project folder structure conventions | Setting up `src/server/src/` with module-based layout | Will be defined in BACKEND_ARCHITECTURE.md |

**You're ready when you can answer:**
- What goes in `package.json` dependencies vs devDependencies?
- Why do we put source code in `src/` instead of the root?

---

### Before Step 0.2: Initialize Client Project
**Prep time:** 15 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Vite basics (what it does vs CRA) | Vite is our build tool — faster than Create React App | "Vite in 100 Seconds" (Fireship YouTube) |
| Tailwind CSS v4 setup | Utility-first CSS framework — different setup than v3 | Tailwind docs → "Installation with Vite" |

**You're ready when you can answer:**
- Why is Vite faster than Create React App?
- What is a utility-first CSS framework?

---

### Before Step 0.3: Create Phase 0 Documentation
**Prep time:** None — just follow DOC-CREATION-PLAN.md specifications
**Status:** ⬜

No new concepts. This is writing documentation files.

---

### Before Step 0.4: Set Up Development Tooling
**Prep time:** 20 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| ESLint purpose (linting vs formatting) | Catches code errors and enforces coding standards | ESLint docs → "Getting Started" |
| Prettier purpose | Auto-formats code (tabs, semicolons, quotes) | Prettier docs → "Why Prettier?" |
| nodemon purpose | Auto-restarts server when files change during development | npm nodemon README (5 min read) |

**You're ready when you can answer:**
- What's the difference between ESLint (linting) and Prettier (formatting)?
- Why do we need nodemon in development but not in production?

---

## Stage 1: Authentication & User Management

### Before Step 1.1: Express App & MongoDB Connection
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Express middleware concept | Requests pass through middleware functions in order — you're building the pipeline | You already know basics ✅ — review: Express docs → "Using middleware" |
| Mongoose connection setup | Connecting Node.js to MongoDB with retry logic | Mongoose docs → "Connections" |
| Environment variables (`dotenv`) | Keeping secrets (DB URI, API keys) out of code | npm dotenv README |
| CORS concept | Frontend (port 5173) needs to call backend (port 5000) — different origins | MDN → "Cross-Origin Resource Sharing" |

**You're ready when you can answer:**
- What order should middleware run in? (CORS → helmet → JSON parser → routes → error handler)
- Why do we validate environment variables at startup instead of letting them fail later?

---

### Before Step 1.2: Error Handling & Utility Layer
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Custom Error classes (extending `Error`) | ApiError class lets you throw errors with HTTP status codes | MDN → "Error" class + "extends" keyword |
| Express error-handling middleware | 4-argument function `(err, req, res, next)` catches all errors | Express docs → "Error handling" |
| `async/await` error patterns | Async route handlers need try/catch or a wrapper | Search: "express async handler pattern" |

**You're ready when you can answer:**
- Why create a custom `ApiError` class instead of just using `throw new Error()`?
- How does Express know a middleware is an error handler? (hint: 4 parameters)

---

### Before Step 1.3: User Model & Registration Endpoint
**Prep time:** 1-2 hours ⚡ (new concept: bcrypt)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Mongoose schema design | Defining the User model with field types, required, unique, defaults | You already know basics ✅ — review: Mongoose docs → "Schemas" |
| **bcrypt password hashing** 🆕 | NEVER store passwords as plain text — bcrypt hashes + salts them | "How bcrypt works" article (any top Google result, ~20 min) |
| Salt rounds (cost factor) | Higher = more secure but slower. 10-12 is standard | Covered in bcrypt article above |
| **Zod validation** 🆕 | Validate request body before processing — type-safe schema validation | Zod docs → "Basic usage" (30 min) |
| Middleware pattern for validation | Reusable `validate(schema)` middleware for any route | AI will explain during implementation |

**You're ready when you can answer:**
- Why can't you just compare passwords directly? Why hash them?
- What is a salt and why does bcrypt add one automatically?
- What does `z.string().email()` do in Zod?

---

### Before Step 1.4: Login, JWT & Auth Middleware
**Prep time:** 2-3 hours ⚡⚡ (new concepts: JWT, httpOnly cookies)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **JWT structure** 🆕 | Header.Payload.Signature — how tokens encode user identity | "JWT explained" by Web Dev Simplified (YouTube, 15 min) |
| **JWT signing & verification** 🆕 | `jwt.sign()` creates token, `jwt.verify()` validates it | jsonwebtoken npm README |
| **httpOnly cookies** 🆕 | Browser stores JWT as cookie, sends automatically — JS can't access it (XSS-safe) | MDN → "Set-Cookie" → httpOnly flag |
| Cookie attributes | `Secure` (HTTPS only), `SameSite` (CSRF protection), `maxAge` (expiration) | MDN → "Set-Cookie" attributes |
| `bcrypt.compare()` | Comparing login password with stored hash | Covered when you learned bcrypt in Step 1.3 |

**You're ready when you can answer:**
- What are the 3 parts of a JWT and what does each contain?
- Why is an httpOnly cookie safer than storing JWT in localStorage?
- What does `SameSite=Lax` protect against?

---

### Before Step 1.5: Frontend Project Structure & Routing
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| React Router v6 (BrowserRouter, Routes, Route) | Client-side routing — different pages without full reload | You already know basics ✅ — review v6 syntax if needed |
| Layout routes (Outlet component) | Shared layouts (navbar, sidebar) wrapping child routes | React Router docs → "Layout Routes" |
| Axios instance configuration | Setting baseURL and `withCredentials: true` for cookie-based auth | Axios docs → "Creating an Instance" |

**You're ready when you can answer:**
- What does `withCredentials: true` do in Axios? (hint: cookies)
- How does React Router's `<Outlet />` work for nested layouts?

---

### Before Step 1.6: Auth Pages & Auth State
**Prep time:** 1-2 hours ⚡ (new concept: Zustand)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Zustand basics** 🆕 | Lightweight state management — simpler than Redux, no boilerplate | Zustand README → "First create a store" (15 min) |
| Controlled forms in React | Form inputs tied to state — onChange handlers, onSubmit | You already know this ✅ |
| Form validation patterns | Client-side validation before API call (password match, email format) | AI will show patterns during implementation |

**You're ready when you can answer:**
- How does `const useAuthStore = create((set) => ({...}))` work in Zustand?
- Why validate on the client AND the server? (hint: client = UX, server = security)

---

### Before Step 1.7: Protected Routes & Navigation
**Prep time:** 20 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| React Router `<Navigate>` component | Redirect unauthenticated users to login | React Router docs → "Navigate" |
| Conditional rendering patterns | Show different navbar content for logged-in vs logged-out users | You already know this ✅ |
| useEffect for auth check on mount | Call `GET /me` when app loads to restore session from cookie | You already know this ✅ |

**You're ready when you can answer:**
- What happens when a user refreshes the page? How do you restore their session?
- Why check auth on app mount (`useEffect`) instead of on every route change?

---

### Before Step 1.8: User Profile (Backend + UI)
**Prep time:** 15 min (all familiar patterns)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| PATCH vs PUT semantics | PATCH updates specific fields, PUT replaces entire resource | MDN → "HTTP PATCH" |
| Field filtering for updates | Only allow updating `name`, `bio`, `skills` — not `email` or `password` via profile endpoint | AI will explain the security pattern |

**You're ready when you can answer:**
- Why use PATCH instead of PUT for profile updates?
- Why filter which fields a user can update? (hint: someone could send `{role: "admin"}`)

---

### Before Step 1.9: GitHub OAuth Connection
**Prep time:** 2-3 hours ⚡⚡ (new concepts: OAuth flow, token encryption)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **OAuth 2.0 Authorization Code flow** 🆕 | Redirect user to GitHub → they authorize → GitHub sends code back → you exchange code for access token | "OAuth 2.0 simplified" (YouTube, 20 min) |
| **GitHub OAuth App setup** 🆕 | Register your app at github.com/settings/developers to get Client ID and Secret | GitHub docs → "Creating an OAuth App" |
| **AES-256 encryption** 🆕 | Encrypt GitHub access tokens before storing in DB (they're like passwords) | Node.js `crypto` docs → `createCipheriv` |
| Callback URLs | GitHub redirects back to YOUR server after authorization — must configure the URL | Covered in GitHub OAuth App setup |

**You're ready when you can answer:**
- What are the 4 steps in OAuth authorization code flow? (redirect → authorize → code → token)
- Why encrypt the GitHub token before storing it? (hint: if DB is breached)
- What's the difference between Client ID (public) and Client Secret (private)?

---

### Before Step 1.10: Stage 1 Docs & Learning Update
**Prep time:** None — writing docs and learning reflections
**Status:** ⬜

No new concepts. Reflect on what you learned in Stage 1 and fill in learning files.

---

## Stage 2: Workspaces & Projects

### Before Step 2.1: Workspace Model & Backend CRUD
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Multi-tenancy concept** 🆕 | Each workspace is an isolated tenant — data must never leak between them | Search: "multi-tenant architecture explained" (15 min article) |
| Mongoose `populate()` | Joining related documents (workspace → members) | Mongoose docs → "Populate" |
| URL slugs | Converting "My Team" → "my-team" for clean URLs | npm `slugify` README |

**You're ready when you can answer:**
- What does multi-tenancy mean and why must every query include a `workspaceId`?
- How does Mongoose `populate()` work? (it's like a JOIN in SQL)

---

### Before Step 2.2: Workspace UI (List, Create, Settings)
**Prep time:** 15 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| React modal/dialog patterns | Create workspace form as a modal overlay | shadcn/ui docs → "Dialog" component |
| Conditional UI by role | Show "Delete" button only for owners, "Settings" only for admins+ | Pattern: check `role` from API response |

**You're ready when you can answer:**
- How do you conditionally render UI based on the user's role in a workspace?

---

### Before Step 2.3: Invitation Model & Backend Endpoints
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Invitation/token pattern** 🆕 | Generate unique token → store with expiration → validate on accept | AI will explain during implementation |
| Duplicate prevention strategies | Check "already a member" and "already invited" before creating invite | Business logic — AI will guide |
| MongoDB TTL indexes | Auto-delete expired invitations after `expiresAt` date | MongoDB docs → "TTL Indexes" |

**You're ready when you can answer:**
- Why use a unique token for invitations instead of just the invitation ID?
- What is a TTL index and how does it auto-cleanup expired documents?

---

### Before Step 2.4: Invitation & Members UI
**Prep time:** 10 min (all familiar patterns by now)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Dropdown/select components | Role selector (admin/member) in invite form | shadcn/ui docs → "Select" component |
| Confirmation dialogs | "Are you sure you want to remove this member?" before destructive actions | shadcn/ui docs → "Alert Dialog" |

---

### Before Step 2.5: RBAC Middleware & Permission Enforcement
**Prep time:** 1-2 hours ⚡ (new concept: RBAC middleware)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **RBAC pattern (Role-Based Access Control)** 🆕 | Permissions assigned to roles, not individual users. Check: does this role have this permission? | "RBAC explained" article (20 min) |
| **Permission matrix design** 🆕 | A mapping like `{ 'workspace:delete': ['owner'], 'member:invite': ['owner', 'admin'] }` | AI will design this with you |
| Middleware chaining | `authenticate → workspaceContext → authorize('permission')` runs in order on each request | Express docs → middleware chains |

**You're ready when you can answer:**
- How is RBAC different from checking `if (user.id === workspace.ownerId)`?
- Why use a permission matrix instead of hardcoding role checks in every controller?

---

### Before Step 2.6: Project Model & Backend CRUD
**Prep time:** 15 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Nested REST routes | Projects live inside workspaces: `POST /workspaces/:workspaceId/projects` | RESTful convention — AI will explain |
| Workspace-scoped queries | Every project query MUST filter by workspaceId (tenant isolation) | Learned in Step 2.1 ✅ |

---

### Before Step 2.7: Project UI & Dashboard Shell
**Prep time:** 20 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Tab-based layouts | Project dashboard has tabs: Overview, Code, PRs, AI, Reviews | shadcn/ui docs → "Tabs" component |
| Breadcrumb navigation | Show path: Workspaces → My Team → ProjectName | shadcn/ui docs → "Breadcrumb" component |
| Card grid layouts | Displaying projects as cards in a responsive grid | Tailwind docs → "Grid" utilities |

---

### Before Step 2.8: Stage 2 Learning Update
**Prep time:** None
**Status:** ⬜

No new concepts. Reflect and fill in learning files.

---

## Stage 3: GitHub Integration

### Before Step 3.1: GitHub Service & Repo Connection (Backend)
**Prep time:** 2-3 hours ⚡⚡ (new concept: Octokit, GitHub API)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **GitHub REST API overview** 🆕 | Endpoints for repos, branches, commits, PRs — the data we're fetching | GitHub REST API docs → "Repositories" (browse 30 min) |
| **Octokit.js SDK** 🆕 | Official GitHub API client for Node.js — handles auth, pagination, rate limits | Octokit docs → "Getting started" (30 min) |
| Token decryption | Decrypt stored GitHub access token to use with Octokit | Reverse of AES encryption from Step 1.9 ✅ |

**You're ready when you can answer:**
- How does Octokit authenticate API calls? (personal access token or OAuth token)
- What is GitHub's rate limit for authenticated requests? (5000/hour)

---

### Before Step 3.2: Connect Repository UI
**Prep time:** 15 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Search/filter list UI | User needs to find their repo among potentially hundreds | Search input + `.filter()` on repo list |
| Conditional UI states | Show different UI for: no GitHub connected, no repo connected, repo connected | Pattern already familiar from auth ✅ |

---

### Before Step 3.3: Branches & Commits API + UI
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| GitHub Branches API | `GET /repos/{owner}/{repo}/branches` returns branch list | GitHub REST docs → "Branches" |
| GitHub Commits API | `GET /repos/{owner}/{repo}/commits` returns commit history | GitHub REST docs → "Commits" |
| Relative time formatting | "3 hours ago", "2 days ago" instead of raw timestamps | Libraries: `date-fns` → `formatDistanceToNow()` or `dayjs` |

---

### Before Step 3.4: Pull Request Listing (Backend + UI)
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| GitHub Pull Requests API | `GET /repos/{owner}/{repo}/pulls?state=open` returns PR list | GitHub REST docs → "Pull Requests" |
| **Caching strategy** 🆕 | Store PR data in MongoDB to avoid hitting GitHub API on every page load | AI will explain cache-aside pattern |
| Filter/tab UI patterns | "Open | Closed | All" tabs filtering PR list | shadcn/ui Tabs or custom toggle |

---

### Before Step 3.5: Pull Request Detail Page
**Prep time:** 20 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Markdown rendering in React | PR descriptions are in GitHub-flavored markdown | Library: `react-markdown` or `marked` |
| GitHub Files API | `GET /repos/{owner}/{repo}/pulls/{number}/files` returns changed files | GitHub REST docs → "Pull Request Files" |

---

### Before Step 3.6: Webhook Route & Signature Verification
**Prep time:** 1-2 hours ⚡ (new concept: webhooks, HMAC)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Webhooks concept** 🆕 | Instead of YOU polling GitHub, GitHub POSTs events to YOUR server when things happen | GitHub docs → "About webhooks" (20 min) |
| **HMAC SHA-256 signature** 🆕 | GitHub signs each webhook with a secret — you verify to ensure it's really from GitHub | GitHub docs → "Validating webhook deliveries" |
| Raw body parsing | Signature verification needs the raw request body, not the parsed JSON | Express: `express.raw()` middleware for webhook route |
| Node.js `crypto.createHmac()` | Built-in function to compute HMAC signatures | Node.js crypto docs → `createHmac` |

**You're ready when you can answer:**
- What is a webhook and how is it different from polling an API?
- Why do you need to verify the webhook signature? (hint: anyone could POST to your URL)
- Why do you need the RAW body for signature verification, not the parsed JSON?

---

### Before Step 3.7: Webhook Event Handlers & Auto-Registration
**Prep time:** 1 hour ⚡
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| GitHub webhook events | `push`, `pull_request` (opened/closed/merged/reopened) — what data each sends | GitHub docs → "Webhook events and payloads" |
| **Idempotency** 🆕 | Same webhook might be delivered twice — processing it twice shouldn't create duplicate data | Search: "idempotent event processing" (10 min article) |
| GitHub Create Webhook API | `POST /repos/{owner}/{repo}/hooks` to auto-register webhooks | GitHub REST docs → "Webhooks" |
| **ngrok** 🆕 | Exposes your localhost to the internet so GitHub can reach your dev server | ngrok.com → "Getting Started" (10 min) |

**You're ready when you can answer:**
- Why might GitHub deliver the same webhook event twice?
- How do you prevent duplicate processing? (hint: store delivery IDs)
- What does ngrok do and why do you need it for local webhook testing?

---

### Before Step 3.8: Stage 3 Learning Update
**Prep time:** None
**Status:** ⬜

---

## Stage 4: AI Features

### Before Step 4.1: Gemini API Client & Prompt System
**Prep time:** 2-3 hours ⚡⚡ (new concept: LLM APIs)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Google Gemini API basics** 🆕 | How to send prompts and receive AI-generated text | Google AI docs → "Gemini API quickstart" (30 min) |
| **System vs user messages** 🆕 | System message sets behavior ("You are a code reviewer"), user message is the actual request | Google AI docs → "Text generation" |
| **Model selection** 🆕 | Gemini Flash (fast, cheap, 1500 req/day free) vs Pro (smarter, 50 req/day free) | Gemini pricing/model comparison page |
| API key security | GEMINI_API_KEY in `.env`, never committed to git | Same pattern as other secrets ✅ |
| Retry with exponential backoff | API might return 429 (rate limited) or 503 — retry after increasing delays | Search: "exponential backoff pattern" (10 min) |

**You're ready when you can answer:**
- What's the difference between Gemini Flash and Gemini Pro?
- What is a system message and why do you use it?
- How does exponential backoff work? (1s → 2s → 4s → 8s)

---

### Before Step 4.2: AI Rate Limiting & Structured Output
**Prep time:** 1-2 hours ⚡
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **express-rate-limit** 🆕 | Middleware that limits how many requests a user can make per time window | npm express-rate-limit README (15 min) |
| **Structured output / JSON mode** 🆕 | Prompts that make the AI respond in a specific JSON format you can parse reliably | Google AI docs → "Structured output" |
| JSON extraction from markdown | Gemini sometimes wraps JSON in \`\`\`json code blocks — need to extract it | Simple regex/string parsing — AI will show |

**You're ready when you can answer:**
- Why rate-limit AI endpoints specifically? (hint: free tier has daily limits)
- How do you make an LLM return reliable JSON instead of free-text?

---

### Before Step 4.3: AI PR Summarizer
**Prep time:** 30 min (applying concepts from 4.1-4.2)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Prompt engineering for summarization** 🆕 | Writing a prompt that takes PR data and returns a structured summary | Will iterate during implementation — AI will help craft the prompt |
| What data to include in context | PR title, description, file list, diff stats — but NOT full diffs (too large) | AI will help select the right context |

---

### Before Step 4.4: AI Code Reviewer
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Prompt engineering for code analysis | Different prompt than summarization — finding bugs, style issues, security risks | Will iterate — AI will help |
| Chunking large inputs | If a PR has 50 files, can't send all diffs in one prompt — process in chunks | AI will explain chunking strategy |

---

### Before Step 4.5: AI Code Explainer
**Prep time:** 15 min (applying same patterns)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Text selection in React | Detecting what code the user selected (window.getSelection API) | MDN → "Window.getSelection()" |
| Floating UI / tooltip positioning | "Explain" button appears near the selected text | Library: `@floating-ui/react` or CSS positioning |

---

### Before Step 4.6: AI Test Generator (Enhanced)
**Prep time:** 15 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Test framework conventions | Jest (describe/it/expect), Pytest (def test_), JUnit (@Test) — so you can verify AI output | Browse each framework's "getting started" briefly |
| Language detection heuristics | Detecting if code is JS, Python, Java from file extension or syntax | Simple mapping — AI will implement |

---

### Before Step 4.7: AI Chat — Backend
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Conversation history pattern** 🆕 | Sending previous messages as context so AI "remembers" the conversation | Google AI docs → "Multi-turn conversations" |
| **Context window limits** 🆕 | Each model has a max token limit — can't send infinite history | Gemini model specs → check context window size |
| Token estimation | Rough rule: 1 token ≈ 4 characters in English. Need to stay under the limit | AI will explain during implementation |

**You're ready when you can answer:**
- Why can't you send ALL previous messages to the AI every time?
- How do you decide how many previous messages to include? (hint: token budget)

---

### Before Step 4.8: AI Chat — Frontend (UI & Streaming)
**Prep time:** 1-2 hours ⚡ (new concept: streaming)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Server-Sent Events (SSE)** 🆕 | Server streams response chunks to client — text appears word-by-word like ChatGPT | MDN → "Server-Sent Events" or search "SSE explained" (20 min) |
| `EventSource` API or `fetch` streaming | Client-side API to receive streamed data | MDN → "EventSource" or "ReadableStream" |
| Markdown rendering in React | AI responses contain markdown (code blocks, lists, bold) — render properly | Library: `react-markdown` |
| Auto-scroll behavior | Chat should auto-scroll to bottom when new messages arrive | `useRef` + `scrollIntoView()` pattern |

**You're ready when you can answer:**
- How is SSE different from WebSockets? (hint: SSE is one-way server→client)
- Why stream AI responses instead of waiting for the full response? (hint: UX — feels faster)

---

### Before Step 4.9: Stage 4 Learning Update
**Prep time:** None
**Status:** ⬜

---

## Stage 5: Code Review System

### Before Step 5.1: Diff Viewer — File List & Basic Display
**Prep time:** 1-2 hours ⚡ (new concept: diff format)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Unified diff format** 🆕 | The `+`/`-` format that represents code changes — `+` = added, `-` = removed | "Understanding diff output" article (20 min) |
| **react-diff-viewer-continued** 🆕 | React component that renders diffs with syntax highlighting | Library README + examples on npm (30 min) |
| GitHub diff API response format | `GET /repos/{owner}/{repo}/pulls/{number}/files` returns `patch` field | GitHub docs → test with a real PR |

**You're ready when you can answer:**
- What do the `@@` lines in a diff mean? (hint: hunk headers showing line ranges)
- What does `react-diff-viewer` need as input? (old text, new text, or patch string)

---

### Before Step 5.2: Diff Viewer — View Modes & Navigation
**Prep time:** 20 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Split vs unified diff views | Side-by-side (GitHub default) vs single column (unified) | Try both views on any GitHub PR to understand |
| Scroll-to-element in React | Clicking a filename should scroll to that file's diff section | `useRef` + `scrollIntoView({ behavior: 'smooth' })` |

---

### Before Step 5.3: Review Thread & Comment Models (Backend)
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Threaded comments data model** 🆕 | Thread → has many Comments. Thread links to file+line. Comments link to thread. | AI will design this with you |
| Parent-child document relationships | Thread is the parent, Comments are children referencing threadId | Mongoose pattern: `threadId: { type: ObjectId, ref: 'ReviewThread' }` |

---

### Before Step 5.4: Inline Comments UI
**Prep time:** 1 hour ⚡ (new concept: inline UI positioning)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Inline element insertion in diff** 🆕 | Clicking a line inserts a comment form BELOW that specific line in the diff | Will explore react-diff-viewer's API for custom renderers |
| Hover interactions | "+" button appears only on hover over a diff line | CSS `:hover` + conditional render |
| Dynamic form rendering | Comment form appears/disappears without page reload | React state: `activeCommentLine` state variable |

---

### Before Step 5.5: Thread Replies, Resolution & Review Status
**Prep time:** 20 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Expand/collapse UI pattern | Thread shows latest comment, expand to see all replies | React state toggle + conditional rendering ✅ |
| Status state machine concept | Thread status: open → resolved → reopened → resolved... | Simple boolean/enum toggle |

---

### Before Step 5.6: Stage 5 Learning Update
**Prep time:** None
**Status:** ⬜

---

## Stage 6: Notifications & Real-Time

### Before Step 6.1: Socket.IO Server Setup & Authentication
**Prep time:** 2-3 hours ⚡⚡ (new concept: WebSockets, Socket.IO)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **WebSockets concept** 🆕 | Persistent bidirectional connection between client and server — not request/response | "WebSockets in 100 Seconds" (Fireship YouTube, 2 min) + MDN WebSocket overview |
| **Socket.IO basics** 🆕 | Library that makes WebSockets easy — handles reconnection, rooms, events | Socket.IO "Get Started" tutorial (1 hr) |
| **Socket.IO authentication** 🆕 | Verify JWT when WebSocket connection is established (middleware) | Socket.IO docs → "Middlewares" |
| **Rooms** 🆕 | Group connections — each user joins `user:{userId}` room for targeted notifications | Socket.IO docs → "Rooms" |

**You're ready when you can answer:**
- How is a WebSocket connection different from an HTTP request?
- What is a Socket.IO "room" and why is it useful?
- How do you authenticate a WebSocket connection? (hint: middleware checks JWT on handshake)

---

### Before Step 6.2: Notification Model & Service (Backend)
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Notification data model | userId, type, title, message, link, isRead — standard notification schema | AI will design with you |
| `socket.to(room).emit(event, data)` | Send a notification to a specific user's room | Socket.IO docs → "Emitting events" |
| Accessing Socket.IO from services | Store `io` instance globally so any service can emit events | Pattern: `getIO()` utility function |

---

### Before Step 6.3: Notification Triggers & Integration
**Prep time:** 20 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Event-driven notification pattern** 🆕 | When action X happens in service Y → call notificationService to create + emit | AI will show the integration points |
| Identifying notification recipients | Who should be notified? PR author? Thread participants? All project members? | Business logic — AI will help define rules |

---

### Before Step 6.4: Notification Center UI
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Socket.IO client listener | `socket.on('notification:new', (data) => {...})` to receive real-time events | Socket.IO client docs → "Listening to events" |
| Badge component | Red circle with unread count on the bell icon | shadcn/ui docs → "Badge" |
| Dropdown/popover component | Notification panel that opens when clicking the bell | shadcn/ui docs → "Popover" |
| Zustand store updates from socket | Socket event → update Zustand notification store → UI re-renders automatically | Zustand `set()` from socket callback |

---

### Before Step 6.5: Stage 6 Learning Update
**Prep time:** None
**Status:** ⬜

---

## Stage 7: Deployment & Polish

### Before Step 7.1: Docker Setup
**Prep time:** 2-3 hours ⚡⚡ (new concept: Docker)
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Docker concept** 🆕 | Package your app + dependencies into a container that runs the same everywhere | "Docker in 100 Seconds" (Fireship YouTube, 2 min) |
| **Dockerfile** 🆕 | Instructions to build your container: FROM node → COPY files → RUN npm install → CMD start | Docker docs → "Dockerfile reference" (1 hr) |
| **Docker Compose** 🆕 | Run app + MongoDB together with one `docker compose up` command | Docker docs → "Compose quickstart" (1 hr) |
| **Multi-stage builds** 🆕 | Separate build stage from production stage — smaller final image | Docker docs → "Multi-stage builds" |
| `.dockerignore` | Like `.gitignore` but for Docker — exclude node_modules, .env, .git | Same concept as .gitignore ✅ |

**You're ready when you can answer:**
- What problem does Docker solve? (hint: "it works on my machine")
- What do FROM, COPY, RUN, EXPOSE, and CMD do in a Dockerfile?
- How does Docker Compose connect your app container to a MongoDB container?

---

### Before Step 7.2: Cloud Deployment — Backend (Render)
**Prep time:** 1 hour ⚡
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Render platform basics** 🆕 | Free-tier cloud hosting — deploys from GitHub, auto-builds on push | Render docs → "Deploy a Node.js app" (30 min) |
| Production environment variables | Different DB URI, secrets, CORS settings for production vs dev | Render docs → "Environment Variables" |
| Health check endpoints | Render pings `/api/v1/health` to know if your app is running | Already built in Step 1.2 ✅ |
| Production CORS | Must allow only your Vercel frontend URL, not `localhost:5173` | Update CORS config with production frontend URL |

---

### Before Step 7.3: Cloud Deployment — Frontend (Vercel)
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **Vercel platform basics** 🆕 | Free frontend hosting — auto-deploys from GitHub, great for Vite/React | Vercel docs → "Getting Started" (15 min) |
| SPA routing rewrites | All routes should serve `index.html` (React Router handles routing client-side) | Vercel docs → "Rewrites" or `vercel.json` config |
| Environment variables in Vite | `VITE_API_URL` prefix required for client-side env vars | Vite docs → "Env Variables" |

---

### Before Step 7.4: UI Polish & Error States
**Prep time:** 30 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| **React Error Boundary** 🆕 | Catches JS errors in component tree — shows fallback UI instead of blank page | React docs → "Error Boundaries" |
| Skeleton loader pattern | Gray animated placeholder shapes while data loads (like YouTube/GitHub) | shadcn/ui docs → "Skeleton" component |
| Empty state design | "No projects yet. Create your first project!" instead of blank page | UI pattern — just needs good copy + CTA button |
| Responsive design testing | Check layouts on mobile viewport (375px width) | Browser DevTools → "Toggle device toolbar" |

---

### Before Step 7.5: README, Screenshots & Final Docs
**Prep time:** 20 min
**Status:** ⬜

| What to Know | Why You Need It | Quick Resource |
|---|---|---|
| Professional README structure | Hero section, features, screenshots, tech stack, setup, API overview | Browse top GitHub repos for inspiration (30 min) |
| Mermaid diagrams in markdown | Architecture diagrams rendered by GitHub | Mermaid docs → "Flowcharts" |
| Screenshot best practices | Clean browser window, no dev tools, real data (not "test test test") | Take screenshots at consistent window size |

---

## ⏱️ Total Prep Time Summary

| Stage | Total Prep Time | Hardest New Concepts |
|---|---|---|
| Stage 0: Setup | ~50 min | Vite, ESLint/Prettier |
| Stage 1: Auth | ~8-10 hrs | bcrypt, JWT, httpOnly cookies, OAuth 2.0, Zustand |
| Stage 2: Workspaces | ~3-4 hrs | Multi-tenancy, RBAC, permission middleware |
| Stage 3: GitHub | ~5-7 hrs | Octokit, Webhooks, HMAC signatures, idempotency |
| Stage 4: AI | ~6-8 hrs | Gemini API, prompt engineering, structured output, SSE streaming |
| Stage 5: Code Review | ~3-4 hrs | Unified diff format, react-diff-viewer, inline UI positioning |
| Stage 6: Real-Time | ~3-4 hrs | WebSockets, Socket.IO, rooms, real-time notifications |
| Stage 7: Deployment | ~4-5 hrs | Docker, Dockerfile, Render, Vercel, Error Boundaries |
| **TOTAL** | **~33-42 hrs** | Spread across 8 weeks ≈ **~4-5 hrs/week** of studying |
