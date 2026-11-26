# Backend Architecture

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** Detailed specification of the Node.js / Express backend folder layout, module structure, middleware pipeline, service layer rules, and centralized error handling.
> - **Who reads it:** Developers and AI coding assistants before creating any new backend module, route, or middleware.
> - **When to update:** Whenever new modules are added, middleware order changes, or backend conventions evolve.

---

## Folder Structure

```text
src/server/src/
├── config/                   # Runtime configuration & external clients
│   ├── env.js                # Zod-validated environment variables (fail-fast)
│   └── database.js           # Mongoose connection & retry logic
├── modules/                  # Feature modules (Modular Monolith)
│   ├── auth/                 # Registration, login, JWT cookies, GitHub OAuth
│   ├── users/                # User profiles & account lookups
│   ├── workspaces/           # Workspaces, memberships, invitations, RBAC
│   ├── projects/             # Workspace-scoped projects
│   ├── github/               # Octokit REST client, repo links, webhook processing
│   ├── reviews/              # PR review threads, inline comments, status
│   ├── ai/                   # Google Gemini integration (summaries, reviews, tests, chat)
│   ├── notifications/        # Real-time Socket.IO & notification inbox
│   └── collaboration/        # (V2) Real-time collaborative editing
├── shared/                   # Cross-cutting infrastructure
│   ├── middleware/           # error-handler.js, authenticate.js, workspace-context.js, etc.
│   └── utils/                # api-error.js, api-response.js, async-handler.js
├── socket/                   # Socket.IO server setup & room handlers (Stage 6)
├── app.js                    # Express app pipeline, health check, error handling
└── server.js                 # HTTP server bootstrap & graceful shutdown
```

---

## Module Structure Pattern

Every feature module inside `src/server/src/modules/{module-name}/` follows this consistent layout:

```text
{module-name}/
├── {module-name}.controller.js   # HTTP request parsing & ApiResponse output only
├── {module-name}.service.js      # Pure business logic & database operations
├── {module-name}.model.js        # Mongoose schema, indexes & model definition
├── {module-name}.routes.js       # Express router & middleware wiring
├── {module-name}.validation.js   # Zod request validation schemas
└── __tests__/                    # Unit & integration tests
```

---

## Middleware Pipeline

Requests flow through middleware in deterministic order:

1. **Security & Parsing (`app.js`):** `helmet()` → `cors({ origin, credentials: true })` → `express.json({ limit: '16kb' })` → `express.urlencoded()` → `cookieParser()`
2. **Route-Level Protection & Validation:** `authenticate` → `workspaceContext` → `authorize(role)` → `validate(zodSchema)`
3. **Controller:** Invoked wrapped in `asyncHandler(...)`
4. **Error Pipeline (`app.js` bottom):** `notFoundHandler` → `errorHandler`

---

## Service Layer Rules

- **Controllers:** Parse `req.body` / `req.params` / `req.query`, call a service method, and send `new ApiResponse(...).send(res)`. No business logic or direct Mongoose calls in controllers.
- **Services:** Own all business rules, tenant isolation checks (`workspaceId`), and database queries. Modules communicate exclusively through exported service functions — **never** import another module's Mongoose model directly.
- **Models:** Define schemas, indexes, and model-level hooks/methods only.

---

## Error Handling

- **Custom Error Class (`src/shared/utils/api-error.js`):** `ApiError` extends `Error` with `statusCode`, `message`, `errors[]`, `isOperational = true`.
- **Async Wrapper (`src/shared/utils/async-handler.js`):** `asyncHandler` wraps every async route handler and forwards rejected promises to `next(error)`.
- **Global Error Handler (`src/shared/middleware/error-handler.js`):** 4-argument Express middleware `(error, _req, res, _next)` normalizing `ApiError`, `ZodError`, Mongoose `ValidationError` / `CastError`, Mongo duplicate key `11000`, malformed JSON `SyntaxError`, and unexpected 500 errors into:
  ```json
  {
    "success": false,
    "message": "Human readable error",
    "errors": []
  }
  ```

---

## Logging

- **What to log:** Server startup, database connection lifecycle events, graceful shutdown signals, and unhandled server errors (`5xx` stack traces in `development` mode).
- **What NEVER to log:** Passwords, JWT tokens, GitHub access tokens, `MONGODB_URI` credentials, cookies, or API keys.
