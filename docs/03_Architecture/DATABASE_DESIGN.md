# Database Design

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** Master data layer specification for MergeNest. Defines every MongoDB collection, schema fields, data types, indexes, cross-collection relationships, and access patterns.
> - **Who reads it:** Developers and AI assistants before creating or updating any Mongoose model or running complex queries.
> - **When to update:** Every time a new Mongoose collection is created, an index is added, or an existing schema is modified.

---

## 1. Design Principles

- **Document Model:** Built on MongoDB NoSQL. Entities with independent lifecycles use distinct collections with `ObjectId` references; tightly coupled, atomic data is embedded.
- **Mandatory Tenant Scoping:** Every collection holding workspace-scoped data MUST include an indexed `workspaceId: { type: ObjectId, ref: 'Workspace', required: true }` field.
- **Query-Driven Indexing:** Indexes are designed specifically for application access patterns (compound indexes for filtered multi-tenant queries, unique constraints for slugs and identifiers).
- **Automatic Timestamps:** All Mongoose schemas enforce `{ timestamps: true }` generating `createdAt` and `updatedAt`.
- **Encryption at Rest:** Sensitive tokens (GitHub OAuth tokens, webhook secrets) are encrypted before persisting to MongoDB.

---

## 2. Collections Specification

### Phase 1 Collections (Authentication, Users, Workspaces, Projects)

#### `users`
- **Purpose:** Stores core user account information and authentication credentials. Global collection (not workspace-scoped).
- **Schema:**
  | Field | Type | Required | Description | Index |
  |---|---|---|---|---|
  | `_id` | ObjectId | Auto | Primary Key | Primary |
  | `name` | String | Yes | User display name | — |
  | `email` | String | Yes | Unique login email (lowercase, trimmed) | Unique |
  | `password` | String | Yes* | Bcrypt password hash (*optional for GitHub-only auth) | — |
  | `avatar` | String | No | Profile photo URL | — |
  | `bio` | String | No | Short user biography | — |
  | `skills` | [String] | No | Array of technologies/skills | — |
  | `githubId` | String | No | GitHub user ID | Unique, Sparse |
  | `githubUsername` | String | No | GitHub username handle | — |
  | `githubAccessToken`| String | No | AES-256 encrypted OAuth access token | — |
  | `createdAt` | Date | Auto | Account creation timestamp | — |
  | `updatedAt` | Date | Auto | Profile last updated timestamp | — |
- **Indexes:** `{ email: 1 }` (unique), `{ githubId: 1 }` (unique, sparse).
- **Access Patterns:** Find by email (login), find by githubId (OAuth callback), find by `_id` (session verification).

---

#### `workspaces`
- **Purpose:** Represents a collaborative organization/team. Serves as the primary tenant boundary.
- **Schema:**
  | Field | Type | Required | Description | Index |
  |---|---|---|---|---|
  | `_id` | ObjectId | Auto | Primary Key | Primary |
  | `name` | String | Yes | Workspace display name | — |
  | `description` | String | No | Purpose of workspace | — |
  | `slug` | String | Yes | URL-friendly unique identifier (e.g. `acme-dev`) | Unique |
  | `owner` | ObjectId (ref: `User`) | Yes | Creator / owner user ID | Index |
  | `createdAt` | Date | Auto | Creation timestamp | — |
  | `updatedAt` | Date | Auto | Update timestamp | — |
- **Indexes:** `{ slug: 1 }` (unique), `{ owner: 1 }`.
- **Access Patterns:** Find by slug (workspace routing), find by owner (workspace listing).

---

#### `workspacemembers`
- **Purpose:** Maps users to workspaces with assigned roles. Junction collection enabling users to participate in multiple workspaces.
- **Schema:**
  | Field | Type | Required | Description | Index |
  |---|---|---|---|---|
  | `_id` | ObjectId | Auto | Primary Key | Primary |
  | `workspaceId` | ObjectId (ref: `Workspace`) | Yes | Workspace reference | Compound Index |
  | `userId` | ObjectId (ref: `User`) | Yes | User reference | Compound Index |
  | `role` | String | Yes | Enum: `owner`, `admin`, `member` (default: `member`)| — |
  | `joinedAt` | Date | Auto | Timestamp user joined | — |
- **Indexes:** `{ workspaceId: 1, userId: 1 }` (unique compound), `{ userId: 1 }`.
- **Access Patterns:** Verify membership and role, list members of a workspace, list workspaces for a user.

---

#### `invitations`
- **Purpose:** Stores pending workspace membership invitations sent via email.
- **Schema:**
  | Field | Type | Required | Description | Index |
  |---|---|---|---|---|
  | `_id` | ObjectId | Auto | Primary Key | Primary |
  | `workspaceId` | ObjectId (ref: `Workspace`) | Yes | Target workspace | Compound Index |
  | `email` | String | Yes | Recipient email address | Compound Index |
  | `invitedBy` | ObjectId (ref: `User`) | Yes | Inviter user ID | — |
  | `token` | String | Yes | Cryptographic invite token | Unique |
  | `role` | String | Yes | Enum: `admin`, `member` (default: `member`) | — |
  | `status` | String | Yes | Enum: `pending`, `accepted`, `rejected` | — |
  | `expiresAt` | Date | Yes | Expiry timestamp (default: 7 days) | TTL Index |
- **Indexes:** `{ token: 1 }` (unique), `{ workspaceId: 1, email: 1 }` (compound), `{ expiresAt: 1 }` (TTL: auto-deletes expired records).
- **Access Patterns:** Find invitation by token, list pending invites for workspace.

---

#### `projects`
- **Purpose:** A development project within a workspace, linking repositories and code reviews.
- **Schema:**
  | Field | Type | Required | Description | Index |
  |---|---|---|---|---|
  | `_id` | ObjectId | Auto | Primary Key | Primary |
  | `workspaceId` | ObjectId (ref: `Workspace`) | Yes | Workspace owner | Compound Index |
  | `name` | String | Yes | Project title | Compound Index |
  | `description` | String | No | Project overview | — |
  | `status` | String | Yes | Enum: `active`, `archived` (default: `active`) | — |
  | `createdBy` | ObjectId (ref: `User`) | Yes | Creator user ID | — |
  | `createdAt` | Date | Auto | Creation timestamp | — |
  | `updatedAt` | Date | Auto | Update timestamp | — |
- **Indexes:** `{ workspaceId: 1 }`, `{ workspaceId: 1, name: 1 }` (unique compound).
- **Access Patterns:** List active projects in workspace, find by ID with workspace check.

---

### Phase 2 Collections (GitHub Integration — Stage 3)

#### `connectedrepositories`
- **Purpose:** Links a GitHub repository to a MergeNest project.
- **Schema:**
  | Field | Type | Required | Description | Index |
  |---|---|---|---|---|
  | `_id` | ObjectId | Auto | Primary Key | Primary |
  | `projectId` | ObjectId (ref: `Project`) | Yes | Associated project | Unique |
  | `workspaceId` | ObjectId (ref: `Workspace`) | Yes | Tenant boundary | Index |
  | `githubRepoId` | Number | Yes | Numeric GitHub repository ID | Index |
  | `owner` | String | Yes | GitHub repo owner (username/org) | — |
  | `repo` | String | Yes | Repository name | — |
  | `fullName` | String | Yes | Full identifier (e.g. `facebook/react`) | — |
  | `defaultBranch` | String | Yes | Default branch name (e.g. `main`) | — |
  | `webhookId` | Number | No | Registered GitHub webhook ID | — |
  | `webhookSecret` | String | No | Encrypted HMAC webhook secret | — |
  | `connectedBy` | ObjectId (ref: `User`) | Yes | User who connected repo | — |
  | `connectedAt` | Date | Auto | Connection timestamp | — |
- **Indexes:** `{ projectId: 1 }` (unique), `{ workspaceId: 1 }`, `{ githubRepoId: 1 }`.

---

#### `pullrequests` (Cached)
- **Purpose:** Caches GitHub PR metadata for fast dashboard queries and review linking.
- **Schema:**
  | Field | Type | Required | Description | Index |
  |---|---|---|---|---|
  | `_id` | ObjectId | Auto | Primary Key | Primary |
  | `workspaceId` | ObjectId (ref: `Workspace`) | Yes | Tenant boundary | Index |
  | `projectId` | ObjectId (ref: `Project`) | Yes | Associated project | Index |
  | `repositoryId` | ObjectId (ref: `ConnectedRepository`) | Yes | Linked repository | Compound Index |
  | `number` | Number | Yes | GitHub PR number | Compound Index |
  | `title` | String | Yes | PR title | — |
  | `body` | String | No | PR markdown description | — |
  | `state` | String | Yes | Enum: `open`, `closed`, `merged` | Index |
  | `author` | Object | Yes | `{ login: String, avatarUrl: String }` | — |
  | `sourceBranch` | String | Yes | Head branch name | — |
  | `targetBranch` | String | Yes | Base branch name | — |
  | `additions` | Number | No | Total added lines | — |
  | `deletions` | Number | No | Total deleted lines | — |
  | `changedFiles` | Number | No | Total changed files | — |
  | `githubCreatedAt` | Date | Yes | GitHub creation timestamp | — |
  | `githubUpdatedAt` | Date | Yes | GitHub update timestamp | — |
  | `mergedAt` | Date | No | GitHub merge timestamp | — |
- **Indexes:** `{ repositoryId: 1, number: 1 }` (unique compound), `{ workspaceId: 1, state: 1 }`.

---

### Phase 3 Collections (Code Review System — Stage 5)

#### `reviewthreads`
- **Purpose:** A discussion thread anchored to a specific file and line in a PR.
- **Schema:**
  | Field | Type | Required | Description | Index |
  |---|---|---|---|---|
  | `_id` | ObjectId | Auto | Primary Key | Primary |
  | `workspaceId` | ObjectId (ref: `Workspace`) | Yes | Tenant boundary | Index |
  | `pullRequestId` | ObjectId (ref: `PullRequest`) | Yes | Target pull request | Index |
  | `file` | String | Yes | File path in repo (e.g. `src/app.js`) | — |
  | `line` | Number | Yes | Line number in diff | — |
  | `side` | String | Yes | Enum: `LEFT` (old), `RIGHT` (new) | — |
  | `status` | String | Yes | Enum: `open`, `resolved` (default: `open`) | — |
  | `createdBy` | ObjectId (ref: `User`) | Yes | Author user ID | — |
  | `createdAt` | Date | Auto | Timestamp | — |
- **Indexes:** `{ pullRequestId: 1 }`, `{ workspaceId: 1 }`.

---

#### `reviewcomments`
- **Purpose:** Individual messages posted within a review thread.
- **Schema:**
  | Field | Type | Required | Description | Index |
  |---|---|---|---|---|
  | `_id` | ObjectId | Auto | Primary Key | Primary |
  | `threadId` | ObjectId (ref: `ReviewThread`) | Yes | Parent thread ID | Index |
  | `workspaceId` | ObjectId (ref: `Workspace`) | Yes | Tenant boundary | Index |
  | `body` | String | Yes | Comment content (Markdown) | — |
  | `author` | ObjectId (ref: `User`) | Yes | Author user ID | — |
  | `isAIGenerated`| Boolean | Yes | True if created by Gemini AI | — |
  | `createdAt` | Date | Auto | Creation timestamp | — |
- **Indexes:** `{ threadId: 1 }`, `{ workspaceId: 1 }`.

---

### Phase 4 Collections (AI Features — Stage 4)

#### `aiconversations`
- **Purpose:** Contextual AI chat sessions within a project.
- **Schema:**
  | Field | Type | Required | Description | Index |
  |---|---|---|---|---|
  | `_id` | ObjectId | Auto | Primary Key | Primary |
  | `workspaceId` | ObjectId (ref: `Workspace`) | Yes | Tenant boundary | Index |
  | `projectId` | ObjectId (ref: `Project`) | Yes | Associated project | Index |
  | `userId` | ObjectId (ref: `User`) | Yes | User conversing | Index |
  | `title` | String | Yes | Chat title (e.g. "PR #12 Review") | — |
  | `context` | Object | No | `{ pullRequestId: ObjectId, branch: String }` | — |
  | `messageCount` | Number | Yes | Total messages (default: 0) | — |
- **Indexes:** `{ projectId: 1, userId: 1 }`, `{ workspaceId: 1 }`.

---

#### `aimessages`
- **Purpose:** Individual messages in an AI chat conversation.
- **Schema:**
  | Field | Type | Required | Description | Index |
  |---|---|---|---|---|
  | `_id` | ObjectId | Auto | Primary Key | Primary |
  | `conversationId`| ObjectId (ref: `AIConversation`)| Yes | Parent conversation | Compound Index |
  | `role` | String | Yes | Enum: `user`, `assistant`, `system` | — |
  | `content` | String | Yes | Message content | — |
  | `tokenCount` | Number | No | Estimated tokens | — |
  | `createdAt` | Date | Auto | Timestamp | Compound Index |
- **Indexes:** `{ conversationId: 1, createdAt: 1 }`.

---

### Phase 5 Collections (Notifications — Stage 6)

#### `notifications`
- **Purpose:** Direct user notifications delivered in-app and via Socket.IO.
- **Schema:**
  | Field | Type | Required | Description | Index |
  |---|---|---|---|---|
  | `_id` | ObjectId | Auto | Primary Key | Primary |
  | `userId` | ObjectId (ref: `User`) | Yes | Recipient user | Compound Index |
  | `workspaceId` | ObjectId (ref: `Workspace`) | Yes | Tenant boundary | Index |
  | `type` | String | Yes | Enum: `pr_comment`, `ai_review_done`, `invitation`, `mention` | — |
  | `title` | String | Yes | Short notification title | — |
  | `message` | String | Yes | Description text | — |
  | `link` | String | Yes | Frontend navigation link | — |
  | `read` | Boolean | Yes | Default: `false` | Compound Index |
  | `createdAt` | Date | Auto | Timestamp | Compound Index |
- **Indexes:** `{ userId: 1, read: 1, createdAt: -1 }`, `{ workspaceId: 1 }`.

---

## 3. Entity Relationship Diagram

```
User ─────────◄ WorkspaceMember ►───────── Workspace
 │                                              │
 │                                         Invitation
 │                                              │
 │                                           Project
 │                                              │
 │                                    ConnectedRepository
 │                                              │
 │                                         PullRequest
 │                                              │
 ├──────────────────────────────────────── ReviewThread
 │                                              │
 ├──────────────────────────────────────── ReviewComment
 │
 ├── AIConversation ──► AIMessage
 │
 └── Notification
```

---

## 4. What MergeNest Stores vs What GitHub Owns

| Data Artifact | Stored in MongoDB? | Storage Rationale |
|---|---|---|
| **PR Metadata** (title, author, status) | **Yes** | Cached for high-speed dashboard listings and filtering without hitting GitHub API rate limits. |
| **PR Diffs / Patches** | **No** | Fetched on demand from GitHub API. Diffs can be megabytes in size and quickly exhaust free MongoDB storage. |
| **Commit History & Trees** | **No** | Fetched on demand via Octokit as needed. |
| **Full File Source Code** | **No (V1)** | Fetched on demand from GitHub. (V2 will index code snippets into vector chunks for RAG). |
| **MergeNest Review Comments** | **Yes** | MergeNest owns the inline review experience, threads, resolutions, and AI-generated review notes. |
| **AI Conversations** | **Yes** | Persistent chat histories across sessions. |
| **Notifications & Read States** | **Yes** | In-app user notifications and read/unread flags. |
