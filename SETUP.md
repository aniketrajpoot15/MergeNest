# Local Development Setup

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** Step-by-step guide to installing dependencies, configuring environment variables, connecting MongoDB, and running MergeNest locally.
> - **Who reads it:** Developers setting up MergeNest on a local machine for the first time.
> - **When to update:** Whenever new services, tools, or environment variables are added.

---

## Prerequisites

Make sure the following tools are installed before starting:

- **Node.js:** v18.0.0 or higher (recommended v20+ or v24)
- **npm:** v9+ (included with Node.js)
- **MongoDB:** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) free M0 cluster (recommended) or local MongoDB Community Server
- **Git:** Installed and configured
- **GitHub Account:** Needed in later stages for OAuth and repository integration
- **Google AI Studio Account:** Needed in Stage 4 for a free Gemini API key

---

## Clone and Install

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aniketrajpoot15/MergeNest.git
   cd MergeNest
   ```

2. **Install backend dependencies:**
   ```bash
   cd src/server
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../client
   npm install
   ```

---

## Environment Setup

Copy `.env.example` from the project root into `src/server/.env`:

```bash
# Windows PowerShell (from project root)
Copy-Item .env.example src/server/.env

# macOS / Linux (from project root)
cp .env.example src/server/.env
```

Never commit `.env` to Git (`.gitignore` already excludes it).

### Environment Variables Explained

| Variable | Required In | Description & How to Get It |
|---|---|---|
| `PORT` | Stage 1 (Step 1.1) | Port for the Express API server (default: `5000`). |
| `NODE_ENV` | Stage 1 (Step 1.1) | Runtime mode (`development`, `test`, or `production`). |
| `MONGODB_URI` | Stage 1 (Step 1.1) | Use `mongodb://localhost:27017/mergenest` for local MongoDB, or your `mongodb+srv://...` connection string from a free MongoDB Atlas M0 cluster. |
| `CLIENT_URL` | Stage 1 (Step 1.1) | Frontend origin allowed by CORS (default: `http://localhost:5173`). |
| `COOKIE_SECRET` | Stage 1 (Step 1.1+) | Random string for signing cookies if needed. Generate with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`. |
| `JWT_SECRET` | Stage 1 (Step 1.4) | Minimum 32-character secret used to sign JWT auth tokens. Generate with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`. |
| `JWT_EXPIRES_IN` | Stage 1 (Step 1.4) | Token lifetime (e.g., `7d`). |
| `GITHUB_CLIENT_ID` | Stage 1 (Step 1.9) | From your GitHub OAuth App at `github.com/settings/developers`. |
| `GITHUB_CLIENT_SECRET` | Stage 1 (Step 1.9) | Secret generated for your GitHub OAuth App. |
| `GITHUB_CALLBACK_URL` | Stage 1 (Step 1.9) | Must match the Authorization callback URL in your GitHub OAuth App (`http://localhost:5000/api/v1/auth/github/callback`). |
| `ENCRYPTION_KEY` | Stage 1 (Step 1.9) | 32-byte hex key for encrypting GitHub OAuth tokens in MongoDB. |
| `GITHUB_WEBHOOK_SECRET` | Stage 3 (Step 3.6) | Shared secret for verifying `X-Hub-Signature-256` on GitHub webhook payloads. |
| `GEMINI_API_KEY` | Stage 4 (Step 4.1) | Free API key from [Google AI Studio](https://aistudio.google.com/). |

---

## Running the Application

1. **Ensure MongoDB is accessible:**
   - If using **MongoDB Atlas**, make sure your current IP address is added under **Network Access** (`0.0.0.0/0` for dev testing or your current IP) and your database user credentials match `MONGODB_URI`.
   - If using **local MongoDB**, ensure the `mongod` service is running.

2. **Start the backend server (Terminal 1):**
   ```bash
   cd src/server
   npm run dev
   ```
   You should see:
   - `Connected to MongoDB`
   - `MergeNest API server listening on port 5000 (development)`

3. **Start the frontend app (Terminal 2):**
   ```bash
   cd src/client
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:5173`.

---

## Running Tests & Code Quality Checks

Run backend linting and formatting checks from `src/server`:

```bash
cd src/server
npm run lint
npm run format:check
npm test
```

Run frontend linting from `src/client`:

```bash
cd src/client
npm run lint
```

---

## Common Issues

- **"Invalid or missing environment variables: MONGODB_URI"**
  Make sure `src/server/.env` exists and `MONGODB_URI` starts with `mongodb://` or `mongodb+srv://`.
- **"MongoDB connection failed" / `querySrv ENOTFOUND` / authentication failed**
  - Verify MongoDB is running (if local) or check your Atlas cluster URL, username, and password (URL-encode special characters like `@` or `#` in passwords).
  - Verify your IP address is whitelisted in MongoDB Atlas **Network Access**.
- **"Port 5000 already in use" (`EADDRINUSE`)**
  Stop the conflicting process or change `PORT` in `src/server/.env` (and update `CLIENT_URL` / proxy settings if needed).
- **Webhook issues in local development**
  GitHub cannot send webhooks directly to `localhost`. Use `ngrok` (`ngrok http 5000`) to expose your local server during Stage 3 testing.
