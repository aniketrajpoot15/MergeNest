# MergeNest — Learning Roadmap

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** Your phase-by-phase study guide. Before starting each stage, open this file and study the "Learn Before Building" topics. It tells you WHAT to learn, WHY you need it, HOW LONG it takes, and WHERE to learn it.
> - **Who reads it:** You (at the start of every new stage) and AI assistants (to know what concepts to teach vs skip).
> - **When to update:** At the START of each new stage — mark previous stage as ✅, review upcoming stage's learning topics, mark new stage as 🟡 In Progress.

---

> Open this file at the start of each phase. Study the "Learn Before Building"
> topics. Then start coding. Learn the "Learn While Building" topics as they come up.

---

## Phase 1: Auth + Workspaces + Projects (Weeks 1-2)

### Status: 🔲 Not Started

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
