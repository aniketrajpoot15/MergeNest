# Interview Preparation

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** Ready-made technical interview Q&A and STAR-method project stories built directly from what you implement in MergeNest. By the time the project is complete, you'll have answers for 50+ common SDE interview questions.
> - **Who reads it:** You (before interviews) and AI assistants (to generate new Q&A after each stage).
> - **When to update:** After every "Learning Update" step (1.10, 2.8, 3.8, etc.). Each stage adds its own section of Q&A.
> - **Format:** Questions grouped by topic. Answers should be in YOUR words after you've implemented and understood the feature — not copy-pasted theory.

---

## Project Overview Questions

**Q: Tell me about your most significant project.**
A: I built MergeNest, an AI-powered collaborative software development platform. Teams can connect GitHub repositories, get AI-powered code reviews using Google Gemini, leave inline review comments with threaded discussions, and receive real-time notifications — all in one place. I built the full stack: React frontend, Node.js/Express backend, MongoDB database, GitHub API integration, Gemini AI integration, and Socket.IO real-time communication. I deployed it with Docker on Render (backend) and Vercel (frontend).

**Q: What makes your project different from a typical TODO app or e-commerce clone?**
A: MergeNest integrates with real external services — GitHub's API for live repository data, webhooks for event-driven updates, and Google Gemini for actual AI code analysis. It handles multi-tenant workspaces with RBAC, real-time notifications via WebSockets, and processes structured AI outputs. These are production-level engineering challenges, not CRUD operations.

**Q: What was the most challenging part?**
A: *[Fill after completing the project — pick the genuinely hardest challenge you faced]*

---

## Authentication & Security

**Q: How does authentication work in your project?**
A: *[Fill after completing Step 1.4 — explain JWT + httpOnly cookies implementation]*

**Q: Why did you choose httpOnly cookies over localStorage for JWT?**
A: *[Fill after Step 1.4 — explain XSS vulnerability of localStorage]*

**Q: How do you handle password security?**
A: *[Fill after Step 1.3 — explain bcrypt with salt rounds]*

**Q: How does your GitHub OAuth flow work?**
A: *[Fill after Step 1.9 — explain the full redirect → code → token exchange flow]*

**Q: How do you store third-party API tokens securely?**
A: *[Fill after Step 1.9 — explain AES-256 encryption for GitHub access tokens]*

---

## RBAC & Multi-Tenancy

**Q: How did you implement authorization?**
A: *[Fill after Step 2.5 — explain permission matrix + middleware chain]*

**Q: How do you prevent one workspace's data from leaking to another?**
A: *[Fill after Step 2.5 — explain workspaceContext middleware and query scoping]*

**Q: What roles does your system support and how do permissions differ?**
A: *[Fill after Step 2.5 — explain owner/admin/member with specific permissions]*

---

## GitHub Integration

**Q: How do you integrate with GitHub?**
A: *[Fill after Step 3.1 — explain Octokit, OAuth token usage, API endpoints]*

**Q: How do webhooks work in your application?**
A: *[Fill after Step 3.7 — explain the full flow: event → signature verify → handler → DB update]*

**Q: How do you verify webhook authenticity?**
A: *[Fill after Step 3.6 — explain HMAC SHA-256 signature verification]*

**Q: How do you handle GitHub API rate limits?**
A: *[Fill after Step 3.4 — explain caching strategy, conditional requests]*

**Q: How do you prevent duplicate webhook processing?**
A: *[Fill after Step 3.7 — explain idempotency with delivery ID storage]*

---

## AI Engineering

**Q: How did you integrate AI into your application?**
A: *[Fill after Step 4.1 — explain Gemini API, service layer, prompt templates]*

**Q: How do you get structured/reliable output from an LLM?**
A: *[Fill after Step 4.2 — explain structured output prompts, JSON parsing, schema validation]*

**Q: How does your AI code reviewer work?**
A: *[Fill after Step 4.4 — explain diff analysis prompt, structured findings format]*

**Q: How do you manage AI conversation history?**
A: *[Fill after Step 4.7 — explain last N messages as context, token budget]*

**Q: How do you handle AI streaming responses?**
A: *[Fill after Step 4.8 — explain SSE or chunked transfer, word-by-word display]*

**Q: How do you prevent prompt injection?**
A: *[Fill after Step 4.4 — explain treating code as untrusted input in prompts]*

---

## Real-Time Communication

**Q: How do you implement real-time features?**
A: *[Fill after Step 6.1 — explain Socket.IO, JWT auth on connection, rooms]*

**Q: How does your notification system work?**
A: *[Fill after Step 6.3 — explain event triggers → notification service → Socket.IO emit → client listener]*

**Q: What is the difference between HTTP and WebSocket?**
A: *[Fill after Step 6.1 — explain request/response vs persistent bidirectional connection]*

---

## Database Design

**Q: How did you design your database schema?**
A: *[Fill after Stage 2 — explain collections, relationships, indexes, multi-tenant isolation]*

**Q: Why did you choose MongoDB over a relational database?**
A: *[Fill after Stage 1 — explain document model fit, MERN stack consistency, Atlas Vector Search for V2]*

---

## Architecture & Design Decisions

**Q: Why did you choose a modular monolith over microservices?**
A: *[Fill after Step 1.10 — explain solo developer, single deployment, module boundaries]*

**Q: How is your backend structured?**
A: *[Fill after Step 1.2 — explain module-based organization, shared utilities, middleware pipeline]*

**Q: What design patterns did you use?**
A: *[Fill progressively — service layer, middleware chain, repository pattern, error handling hierarchy]*

---

## Deployment & DevOps

**Q: How did you deploy your application?**
A: *[Fill after Step 7.2/7.3 — explain Docker, Render, Vercel, environment variables]*

**Q: What does your Dockerfile look like and why?**
A: *[Fill after Step 7.1 — explain multi-stage build, layer caching]*

---

## STAR Method Stories

*(Fill these after completing the project — pick real challenges you faced)*

**Story 1: Solving a Complex Technical Challenge**
- **Situation:** *[describe the context]*
- **Task:** *[what you needed to accomplish]*
- **Action:** *[specific steps you took]*
- **Result:** *[measurable outcome]*

**Story 2: Debugging a Difficult Bug**
- **Situation:** *[describe the bug]*
- **Task:** *[what was broken]*
- **Action:** *[how you investigated and fixed it]*
- **Result:** *[what you learned]*

**Story 3: Making a Key Architecture Decision**
- **Situation:** *[describe the decision point]*
- **Task:** *[what options you had]*
- **Action:** *[what you chose and why]*
- **Result:** *[how it worked out]*
