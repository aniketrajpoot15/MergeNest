# API Standards

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** Single source of truth for MergeNest REST API URL conventions, HTTP methods, request/response envelopes, pagination, validation, and rate limiting.
> - **Who reads it:** Backend and frontend developers and AI assistants before creating or consuming any API endpoint.
> - **When to update:** Whenever new API patterns or global conventions are introduced.

---

## Base URL

All API routes are prefixed with:

```text
/api/v1
```

Example health endpoint: `GET /api/v1/health`

---

## Route Naming

- **Use plural nouns** for collections: `/workspaces`, `/projects`, `/reviews` (not `/workspace` or `/project`).
- **Use nested resources** when ownership is hierarchical: `/workspaces/:workspaceId/projects/:projectId`.
- **Use action sub-routes** when an operation is a state transition or verb:
  - `POST /workspaces/:workspaceId/invite`
  - `POST /reviews/:reviewId/resolve`

---

## HTTP Methods

| Method | Meaning | Usage |
|---|---|---|
| `GET` | Read | Retrieve one resource or list (never mutates state) |
| `POST` | Create / Action | Create a new resource or trigger an action |
| `PATCH` | Partial Update | Update specific fields (preferred over `PUT`) |
| `DELETE` | Remove | Delete or archive a resource |

---

## Request Format

- **Body:** JSON (`Content-Type: application/json`, `16kb` default size limit).
- **Authentication:** `httpOnly` cookie (`jwt`) sent automatically by the browser (`credentials: true`) — no `Authorization` header required for standard client calls.
- **Workspace Context:** Passed via URL parameter (`:workspaceId`) and verified on the backend via membership lookup.

---

## Response Format — Success

All successful responses use `ApiResponse` (`src/server/src/shared/utils/api-response.js`):

**Single Resource / Action:**
```json
{
  "success": true,
  "message": "MergeNest API running",
  "data": {
    "status": "ok",
    "environment": "development"
  }
}
```

**Paginated List:**
```json
{
  "success": true,
  "message": "Projects fetched successfully",
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "totalPages": 3
  }
}
```

---

## Response Format — Error

All errors are normalized by `errorHandler` (`src/server/src/shared/middleware/error-handler.js`):

```json
{
  "success": false,
  "message": "Human readable error",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email address"
    }
  ]
}
```

### Standard HTTP Status Codes

| Code | Meaning | When Used |
|---|---|---|
| `400` | Bad Request | Zod validation failure, invalid ObjectId, malformed JSON |
| `401` | Unauthorized | Missing, expired, or invalid JWT cookie |
| `403` | Forbidden | Authenticated user lacks required workspace role (RBAC) |
| `404` | Not Found | Resource or route does not exist |
| `409` | Conflict | Duplicate unique field (e.g., email already registered) |
| `422` | Unprocessable Entity | Semantically invalid business state |
| `429` | Too Many Requests | Rate limit exceeded |
| `500` | Internal Server Error | Unexpected unhandled server failure |

---

## Pagination, Filtering & Sorting

- **Pagination query params:** `?page=1&limit=20` (default: `page=1`, `limit=20`, max `limit=100`).
- **Filtering:** `?status=open&author=userId`.
- **Sorting:** `?sort=createdAt&order=desc` (default sort: `createdAt` descending).

---

## Validation

- All request bodies, route params, and query strings are validated with **Zod** schemas in middleware **before** reaching controllers.
- Invalid requests return `400 Bad Request` with structured field-level entries in `errors[]`.

---

## Rate Limiting (Planned Targets)

- **Global:** 100 requests/minute per IP.
- **Auth endpoints:** 10 requests/minute per IP (brute-force protection).
- **AI endpoints:** 20 requests/minute per user (Gemini quota & cost protection).
