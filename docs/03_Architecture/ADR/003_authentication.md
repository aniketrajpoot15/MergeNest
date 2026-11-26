# ADR-003: Authentication & Credential Security Strategy

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** Records why MergeNest chose `bcrypt` password hashing + stateless JWT stored in `httpOnly` cookies + GitHub OAuth 2.0 over alternatives.
> - **Who reads it:** Developers, interviewers, and AI coding assistants working on authentication or security middleware.
> - **When to update:** Only if the authentication mechanism changes (in which case mark as `Superseded` by a newer ADR).

---

## Status

Accepted

## Date

2026-11-26

## Context

MergeNest requires user authentication that protects developer accounts and linked GitHub tokens across a separated React SPA (`Vercel` / port `5173`) and Express API (`Render` / port `5000`), deployed strictly on ₹0 free-tier infrastructure without adding Redis or external auth SaaS dependencies.

## Decision

1. **Password Hashing:** Hash user passwords using `bcrypt` (`bcryptjs`) with cost factor **12** before storing in MongoDB (`select: false`). Passwords are never stored or returned in API responses.
2. **Session Tokens:** Issue signed **JWTs** stored inside **`httpOnly`, `Secure` (production), `SameSite` cookies** rather than returning tokens in JSON responses or storing them in browser `localStorage`.
3. **External GitHub Linking:** Use **OAuth 2.0 Authorization Code Flow** server-side and encrypt GitHub access tokens at rest (AES-256) before saving on the `User` document.

## Alternatives Considered

- **Storing JWT in browser `localStorage`:**
  - *Rejected:* `localStorage` is readable by any JavaScript running on the page. Any Cross-Site Scripting (XSS) vulnerability (e.g., via a compromised npm package or unsanitized markdown rendering) could immediately steal user JWTs.
- **Server-Side Stateful Sessions (Express Session + Redis):**
  - *Rejected for V1:* Requires provisioning and maintaining a separate Redis instance (extra operational complexity and free-tier limits on free hosting), whereas stateless JWT cookies scale with zero session-store lookup overhead.
- **Third-Party Auth SaaS (Auth0 / Clerk):**
  - *Rejected:* Adds external vendor lock-in, obscures core authentication implementation needed for engineering mastery and interviews, and imposes free-tier limits.

## Consequences

- **Positive:**
  - Immune to JavaScript/XSS token theft because browsers block JS access to `httpOnly` cookies.
  - Stateless request verification reduces database round-trips on protected routes.
  - High bcrypt cost factor (`12`) dramatically slows offline brute-force attacks if a database dump occurs.
- **Negative:**
  - Stateless JWTs cannot be instantly revoked server-side before expiration without introducing a token blocklist later.
  - Cross-origin cookies between Vercel and Render require careful CORS (`credentials: true`) and `SameSite` cookie attribute configuration.
- **Neutral:**
  - Frontend Axios client must configure `withCredentials: true` on API requests so the browser automatically attaches auth cookies.

## References

- [Product Requirements Document](../../01_Product/PRD.md)
- [Backend Architecture](../BACKEND_ARCHITECTURE.md)
- [Database Design](../DATABASE_DESIGN.md)
- [API Standards](../../04_API/API_STANDARDS.md)
