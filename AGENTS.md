# MergeNest — AI Coding Instructions

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** Master instruction file for all AI coding assistants (GitHub Copilot, Cursor, Claude, Antigravity, Gemini, etc.) working on MergeNest.
> - **Who reads it:** AI coding assistants before implementing any feature, route, or model.
> - **When to update:** When new conventions are established, new modules are added, or AI behavior needs correction.

---

## Project Overview

MergeNest is an AI-powered collaborative development platform where teams connect GitHub repositories, review pull requests with AI-powered code analysis, and collaborate on software projects. Built as a MERN stack application with Google Gemini AI integration.

- **Current phase:** Stage 1 — Authentication & User Management
- **Architecture:** Modular Monolith (`src/server/src/modules/`)
- **Key references:** [PRD](docs/01_Product/PRD.md) | [System Architecture](docs/03_Architecture/SYSTEM_ARCHITECTURE.md) | [Database Design](docs/03_Architecture/DATABASE_DESIGN.md) | [Blueprint](MERGENEST-BLUEPRINT.md)

---

## Documentation Map (Read Before Implementing)

Before implementing ANY feature, read these docs in order:
1. `MERGENEST-BLUEPRINT.md` — Scope and technical roadmap
2. `docs/01_Product/PRD.md` — Feature requirements and user stories
3. `docs/03_Architecture/SYSTEM_ARCHITECTURE.md` — High-level system design
4. `docs/03_Architecture/DATABASE_DESIGN.md` — Data models, indexes, and queries
5. `docs/04_API/API_STANDARDS.md` — API conventions (created in Stage 1)
6. `docs/05_Security/SECURITY.md` — Security requirements (created in Stage 1)
7. Relevant module docs (`GITHUB_INTEGRATION.md`, `AI_ARCHITECTURE.md`, etc.)

---

## Architecture Rules

- **Modular Monolith:** Modules live in `src/server/src/modules/`
- Each module contains:
  - `{module}.controller.js` — HTTP request/response handling only
  - `{module}.service.js` — Pure business logic
  - `{module}.model.js` — Mongoose schema and model definition
  - `{module}.routes.js` — Express router setup
  - `{module}.validation.js` — Zod request validation schemas
  - `__tests__/` — Module-specific unit and integration tests
- Services contain business logic; controllers handle HTTP request/response only.
- All database queries for workspace resources must include `workspaceId` for strict multi-tenant isolation.
- Never import another module's model directly — call its service.
- Follow existing patterns in the codebase before creating new ones.

---

## Coding Conventions

- **File naming:** kebab-case for files (`user.controller.js`, not `UserController.js`)
- **Variable/function naming:** camelCase (`getUserById`, `handleWebhook`)
- **Class naming:** PascalCase (`ApiError`, `ApiResponse`)
- **Constants:** UPPER_SNAKE_CASE (`JWT_EXPIRES_IN`, `ROLES`)
- Always use `async/await`, never raw `.then()` chains.
- Always wrap async route handlers with the `asyncHandler` utility.
- Use descriptive variable names (never single letters or ambiguous abbreviations like `x`, `temp`, `data`).
- Every API response must use the standard response format: `{ success: true, data: ..., message: ... }`.
- Every error must use the custom `ApiError` class.

---

## API Conventions

- Reference `docs/04_API/API_STANDARDS.md` for naming, pagination, and error formats.
- All API routes follow: `/api/v1/{module}/{resource}`.
- Use HTTP methods correctly: `GET` (read), `POST` (create), `PUT`/`PATCH` (update), `DELETE` (delete).
- Always validate request body and parameters using Zod validation middleware before reaching controllers.

---

## Security Rules (Non-Negotiable)

- **Never store JWT or sensitive tokens in localStorage** — use `httpOnly`, `secure`, `sameSite` cookies only.
- **Never expose GitHub access tokens to the frontend.**
- **Encrypt GitHub tokens at rest** before storing in MongoDB using AES-256.
- **Always verify GitHub webhook signatures** (`X-Hub-Signature-256`) before processing events.
- **Every protected route must use `authenticate` middleware.**
- **Every workspace-scoped route must verify membership via `workspaceContext` middleware.**
- **Never trust user-supplied IDs from the frontend alone** — always verify workspace ownership or membership on the backend.
- **Never log tokens, passwords, or secrets.**
- **Treat all user input and repository content as untrusted.**

---

## Before Implementing Any Feature

1. Read the relevant documentation listed above.
2. Check existing code in the same module for established patterns.
3. If a pattern exists, follow it.
4. If no pattern exists, propose the approach before implementing.
5. If requirements are unclear, ASK — do not guess.

---

## What NOT to Do

- Do not change approved architecture without explicit discussion.
- Do not rewrite or refactor code you were not asked to modify.
- Do not add npm dependencies without explaining why they are needed.
- Do not skip error handling, validation, or auth checks.
- Do not create new modules without updating `SYSTEM_ARCHITECTURE.md`.
- Do not add new database collections without updating `DATABASE_DESIGN.md`.
- Do not create API endpoints that don't follow `API_STANDARDS.md`.
- Do not duplicate functionality that exists in another module.

---

## After Implementing a Feature

1. Verify the implementation works (run relevant tests or build checks).
2. If you added/changed a collection → update `DATABASE_DESIGN.md`.
3. If you added a module → update `SYSTEM_ARCHITECTURE.md`.
4. If you created new API patterns → verify they match `API_STANDARDS.md`.

---

## Teaching & Mentorship Mode

The developer is learning while building (3rd year CS student, see `learning/LEARNING_PROFILE.md`).

When introducing a new concept:
1. Explain it briefly (3-5 sentences, not an overwhelming lecture).
2. Explain why MergeNest needs it specifically.
3. Show the implementation clearly.
4. After implementation, ask 2-3 verification questions to test understanding.
5. Suggest relevant entries for `learning/INTERVIEW_PREP.md`.

When the developer makes an error, explain **WHY** it is wrong, don't just fix it silently.
Prioritize understanding and engineering mastery over pure speed.
