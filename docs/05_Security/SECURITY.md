# Security Architecture & Standards

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** Master security specification and threat model for MergeNest covering authentication, token encryption, multi-tenant isolation, webhooks, and AI prompts.
> - **Who reads it:** Developers and AI coding assistants before implementing any auth, database, API, GitHub, or AI feature.
> - **When to update:** Whenever new security controls, auth flows, or threat mitigations are introduced.

---

## 1. Authentication Security

- **Password Hashing:** All user passwords are hashed using `bcrypt` (`bcryptjs`) with cost factor **12** before storing in MongoDB (`select: false` on schema).
- **Session Storage (`httpOnly` Cookies):** Signed JWTs are stored exclusively in `httpOnly` cookies (`accessToken`) — **never** stored in browser `localStorage` or returned inside JSON bodies.
- **Startup Secret Enforcement:** `JWT_SECRET` (minimum 32 characters, placeholder values rejected) is validated via Zod on boot in `src/server/src/config/env.js`.
- **User Enumeration Defense:** `POST /api/v1/auth/login` always returns a generic `401 Invalid email or password` regardless of whether the email exists or the password mismatched.
- **Rate Limiting (Planned):** 10 requests/minute per IP on auth endpoints to deter brute-force login attempts.

---

## 2. Token Security (GitHub OAuth)

- **Encryption at Rest:** GitHub OAuth access tokens and webhook secrets are encrypted using **AES-256-GCM** before saving in MongoDB (`select: false`).
- **Key Management:** `ENCRYPTION_KEY` is stored solely in environment variables, never hardcoded or logged.
- **Zero Frontend Exposure:** External GitHub access tokens never leave the backend API server. All GitHub requests are proxied server-side via Octokit.
- **Graceful Revocation Handling:** Expired or revoked GitHub tokens prompt clean re-authorization without crashing API endpoints.

---

## 3. Multi-Tenant Isolation

- **Strict Tenant Boundary:** Every workspace-scoped collection (`projects`, `connectedrepositories`, `pullrequests`, `reviewthreads`, `reviewcomments`, `aiconversations`, `notifications`) requires an indexed `workspaceId`.
- **Backend Verification:** Every workspace-scoped route verifies membership via `workspaceContext` middleware and enforces RBAC roles (`owner`, `admin`, `member`) via `authorize` middleware.
- **Never Trust Client IDs:** Route handlers resolve user identity strictly from `req.user` (populated from verified JWT) and verify ownership/membership in MongoDB on every request.

---

## 4. Input Validation & Sanitization

- **Zod Schema Validation:** Every API body/param/query is validated by `validate(schema)` middleware before reaching controllers (`req.body` is replaced with Zod's stripped/cleaned output).
- **NoSQL Injection Prevention:** Inputs are strictly typed via Zod and queried safely through Mongoose without passing unvalidated objects straight into MongoDB operators.
- **XSS Prevention:** React escapes rendered expressions by default (`dangerouslySetInnerHTML` is forbidden), and `helmet()` configures protective HTTP response headers.

---

## 5. CSRF Protection

- **Development (`http://localhost`):** Cookies use `httpOnly: true` and `sameSite: 'lax'`.
- **Production (Separate Vercel + Render Origins):** Cookies use `httpOnly: true`, `secure: true` (HTTPS only), and `sameSite: 'none'` paired with strict `CORS` (`origin: env.CLIENT_URL`, `credentials: true`) so unauthorized third-party origins cannot perform authenticated fetches.

---

## 6. Webhook Security (Stage 3)

- **Signature Verification:** Every incoming GitHub webhook payload is verified against the `X-Hub-Signature-256` HMAC-SHA256 header using the raw request body and `crypto.timingSafeEqual` (preventing timing attacks).
- **Idempotency:** Processed GitHub delivery IDs (`X-GitHub-Delivery`) are tracked so retries do not create duplicate notifications or PR updates.

---

## 7. AI Security (Stage 4)

- **Server-Side Keys Only:** `GEMINI_API_KEY` stays strictly on the Express backend.
- **Untrusted Repository Content:** PR diffs, commit messages, and code snippets are treated as untrusted data and delimited cleanly from system instructions in Gemini prompts to reduce prompt injection risk.
- **Cost & Abuse Controls:** Per-user AI rate limiting (20 requests/minute) and strict output JSON parsing.
- **No Auto-Execution:** AI-generated code or test suites are never executed automatically on the server.

---

## 8. Threat Model Summary

| Threat | Impact | Likelihood | Mitigation Implemented |
|---|---|---|---|
| **XSS JWT Theft** | High | Medium | Store JWT in `httpOnly` cookie (inaccessible to JS); React escaping; `helmet()` headers |
| **CSRF Requests** | Medium | Medium | `SameSite` cookie attribute + strict CORS `origin` allowlist |
| **Brute-Force Passwords** | High | Medium | `bcrypt` cost factor 12 + planned IP rate limiting on `/auth` |
| **Password DB Breach** | Critical | Low | One-way salted bcrypt hashes; `select: false`; `toJSON` stripping |
| **Cross-Workspace Data Leak** | Critical | Medium | Mandatory `workspaceId` query scoping + `workspaceContext` middleware |
| **Privilege Escalation** | High | Medium | `authorize(role)` RBAC middleware + Zod stripping extra fields (`role`) |
| **Webhook Forgery** | High | Low | HMAC-SHA256 verification via `crypto.timingSafeEqual` |
| **Prompt Injection** | Medium | Medium | System/data prompt separation + Zod schema check on AI JSON outputs |
| **Credential Logging Leak** | High | Low | Startup env logs print key names only; 500 errors hide internals in production |
