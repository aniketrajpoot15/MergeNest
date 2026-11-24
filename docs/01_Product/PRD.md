# MergeNest — Product Requirements Document (PRD)

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** Defines the complete product vision, user personas, functional requirements for V1 and planned V2, non-functional requirements, and project boundaries for MergeNest.
> - **Who reads it:** Developers and AI coding assistants before implementing any feature to verify scope and business rules.
> - **When to update:** When features are added, modified, or reprioritized.

---

## 1. Product Vision

MergeNest is an AI-powered collaborative development platform where software teams connect GitHub repositories, review pull requests with AI-assisted code analysis, and collaborate seamlessly in shared workspaces.

### The Problem It Solves
1. **Slow & Tedious Code Reviews:** Senior engineers spend hours reviewing boilerplate, formatting, and edge cases manually. MergeNest leverages Google Gemini AI to provide instant summaries, highlight vulnerabilities, and draft test cases.
2. **Context Switching:** Developers jump between GitHub, IDEs, chat apps, and documentation. MergeNest brings PR review, AI assistance, project dashboards, and team discussions into a single unified workspace.
3. **Junior Developer Skill Gaps:** Early-career engineers often struggle with code reviews due to lack of immediate feedback. MergeNest provides on-demand code explanations and automated review hints.
4. **Tool Fragmentation:** Existing solutions either offer raw git hosting (GitHub) or standalone AI tools without team context. MergeNest provides a unified multi-tenant platform with real GitHub integration.

### What Makes MergeNest Different
- **True GitHub Integration:** Real live repositories, branches, commits, PRs, and webhooks via Octokit and HMAC-verified webhooks (not mock data).
- **Practical AI Workflows:** Automated PR summaries, line-level code reviews, test case generation, and project chat powered by Google Gemini.
- **Enterprise-Ready Multi-Tenancy:** Multi-workspace architecture with Role-Based Access Control (RBAC: Owner, Admin, Member) and isolated data scopes.
- **Zero Cost Stack:** Fully functional and deployable on ₹0 budget using verified free tiers (MongoDB Atlas M0, Render, Vercel, Gemini API).

---

## 2. Target Users & Personas

1. **Individual Developers & Students:**
   - *Needs:* Wants AI feedback on their pull requests before opening them publicly; needs code explanations to understand complex algorithms and libraries.
2. **Student & Hackathon Teams (2-5 developers):**
   - *Needs:* A central dashboard to link repos, review each other's commits, and ensure basic test coverage without complex enterprise setup.
3. **Small Engineering Teams & Startups (2-10 developers):**
   - *Needs:* Lightweight PR review workflow with workspace-level permissions and automated review summaries without costly enterprise SaaS licenses.
4. **Open-Source Contributors:**
   - *Needs:* Quick AI summaries of incoming PR diffs to rapidly triage open-source community contributions.

---

## 3. V1 Feature Requirements (26 Features Across 8 Modules)

### Module A: Authentication & Profiles
- **Features:** User registration, email/password login, JWT issued via secure `httpOnly` cookies, auth middleware, GitHub OAuth account linking, user profile management (skills, bio, avatar).
- **User Story:** *As a developer, I want to create an account, log in securely, and connect my GitHub profile so that MergeNest can interact with my repositories.*

### Module B: Workspaces & Teams
- **Features:** Workspace CRUD (create, read, update, delete), email invitations with cryptographically secure tokens and TTL expiry, accept/reject invite workflows, 3-tier Role-Based Access Control (Owner, Admin, Member).
- **User Story:** *As a team lead, I want to create a workspace and invite colleagues with specific permissions so that our team's repositories and reviews remain private and organized.*

### Module C: Projects
- **Features:** Project CRUD within workspaces, project dashboard displaying linked repo stats, recent PRs, and review status.
- **User Story:** *As a team member, I want to create projects within my workspace and view a clean dashboard summarizing recent development activity.*

### Module D: GitHub Integration
- **Features:** Connect GitHub repository via Octokit, list branches & recent commits, list pull requests with state filters, PR details view (diffs, additions, deletions, changed files), GitHub webhooks with HMAC-SHA256 signature verification.
- **User Story:** *As a developer, I want to connect my repository and see live PRs and commits update automatically via webhooks without manual page refreshes.*

### Module E: Code Review System
- **Features:** Code diff viewer (unified and split views), inline review comments anchored to file path and line number, threaded replies, resolve/unresolve thread status, PR review lifecycle tracking (Pending, In Review, Changes Requested, Approved).
- **User Story:** *As a code reviewer, I want to inspect file diffs and leave inline comments on specific lines so that my teammate knows exactly what code needs changes.*

### Module F: AI Features (Google Gemini API)
- **Features:**
  - **AI PR Summarizer:** Summarizes diffs into overview, key changes, potential risks, and testing checklist (`gemini-2.0-flash`).
  - **AI Code Reviewer:** Scans changed lines for security flaws, bugs, and performance anti-patterns with severity ratings (`gemini-1.5-pro`).
  - **AI Code Explainer:** Provides clear explanations and algorithmic complexity breakdowns for selected functions.
  - **Enhanced AI Test Generator:** Detects language and framework (Jest, Pytest, Mocha, JUnit) and generates comprehensive unit tests covering edge cases.
  - **Project AI Chat:** Context-aware interactive assistant retaining recent conversation history for project queries.
- **User Story:** *As an engineer, I want an AI assistant to analyze my pull request diffs, highlight bugs, and generate test suites so I can ship high-quality code faster.*

### Module G: Real-Time Notifications
- **Features:** Real-time push delivery via Socket.IO rooms (`user:{userId}`), notification center with unread count and mark-as-read functionality.
- **User Story:** *As an author, I want instant notifications when someone comments on my PR so I can address feedback immediately.*

### Module H: Deployment & DevOps
- **Features:** Containerized setup with Docker & Docker Compose, cloud deployment on Render (backend) and Vercel (frontend), comprehensive documentation.
- **User Story:** *As a reviewer or recruiter, I want to access a live, working deployment and view clear setup instructions.*

---

## 4. V2 Features (Planned Post-V1 Scope)

1. **Collaborative Real-Time Code Editor:** Multi-user concurrent code editing using Monaco Editor and Yjs CRDTs with live cursor awareness over WebSockets.
2. **Repository-Aware RAG (Retrieval-Augmented Generation):** Full codebase vector indexing using Gemini Embeddings and MongoDB Atlas Vector Search for semantic codebase Q&A.
3. **AI Bug Detective:** Automated stack trace and error log analysis mapping directly to offending codebase files.
4. **Collaborative Documentation & Wiki:** Real-time markdown workspace knowledge base.
5. **Advanced Analytics & Review Metrics:** Team velocity, review turnaround times, and PR size distribution metrics.

---

## 5. Non-Functional Requirements

- **Performance:**
  - Frontend initial page load < 3 seconds on standard connections.
  - REST API response times < 500ms for standard CRUD operations.
  - AI analysis response times < 10 seconds (with streaming for chat).
- **Security:**
  - Zero storage of authentication tokens in client-accessible storage (`localStorage`).
  - Strict AES-256 encryption at rest for all external tokens (GitHub access tokens, webhook secrets).
  - HMAC-SHA256 signature verification for all incoming GitHub webhook payloads.
  - Mandatory tenant scoping (`workspaceId`) on all database queries.
- **Scalability:**
  - Modular monolith structure enabling clean separation of concerns, easy to decompose into microservices if needed in the future.
  - Stateless API server design allowing horizontal scaling behind a reverse proxy.
- **Reliability:**
  - Centralized error handling pipeline preventing unhandled promise rejections and server crashes.
  - Idempotent webhook event processing preventing duplicate notifications on retries.
- **Usability:**
  - Responsive layout built with Tailwind CSS v4, supporting mobile, tablet, and desktop viewports.
  - Consistent loading skeletons, error states, and user-friendly toast alerts.

---

## 6. Out of Scope

- Full task management / sprint tracking (MergeNest is not Jira, Linear, or Trello).
- General team chat channels (MergeNest is not Slack or Discord; chat is strictly project/PR contextual).
- Full browser-based IDE (MergeNest focuses on review and collaboration, not replacing VS Code).
- Native mobile applications (iOS/Android).
- Enterprise SSO (SAML/Okta) and compliance auditing.
