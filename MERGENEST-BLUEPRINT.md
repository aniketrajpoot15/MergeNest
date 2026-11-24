# MergeNest — Complete Project Blueprint

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** The complete functional and architectural blueprint for the MergeNest platform. It details all V1 and V2 features, technical evaluation ratings, full tech stack matrix, 8-week timeline, and resume bullet points.
> - **Who reads it:** You (as reference for product scope, features, and resume design) and AI coding assistants (for architectural context and feature limits).
> - **When to update:** When adding new features, re-prioritizing the roadmap, or refining resume bullet points.

---

## What Is MergeNest?

**MergeNest** is an AI-powered collaborative development platform where teams connect GitHub repositories, review pull requests with AI-powered code analysis, and collaborate on software projects.

**One-line pitch:**
> "Connect your GitHub repo, get AI-powered code reviews, and collaborate with your team — all in one place."

**What makes it special (not another TODO/e-commerce clone):**
- Real GitHub integration (not fake data)
- AI that actually reviews your code and generates tests
- Multi-tenant workspaces with proper authorization
- Code diff viewer with inline review comments
- Real-time notifications

---

## Project Info

| Field | Value |
|---|---|
| **Developer** | Solo (3rd year student) |
| **Purpose** | Resume project for internship applications |
| **Budget** | ₹0 (completely free) |
| **Stack** | MERN (MongoDB, Express, React, Node.js) + Gemini AI |
| **Architecture** | Modular Monolith |
| **V1 Timeline** | 8 weeks |
| **AI Provider** | Google Gemini API (free tier) |
| **Database** | MongoDB Atlas (free tier) |
| **Hosting** | Render (backend, free) + Vercel (frontend, free) |

---

## Cost Breakdown

| Service | What For | Cost |
|---|---|---|
| Google Gemini API | All AI features | **₹0** (1500 req/day free) |
| MongoDB Atlas M0 | Database | **₹0** (512 MB free forever) |
| Render | Backend hosting | **₹0** (sleeps after 15 min) |
| Vercel | Frontend hosting | **₹0** |
| GitHub OAuth App | GitHub login | **₹0** |
| GitHub Actions | CI/CD | **₹0** (2000 min/month free) |
| All npm packages | Libraries | **₹0** (open source) |
| Docker Desktop | Containerization | **₹0** (free for education) |
| **TOTAL** | | **₹0** |

---

# VERSION 1 — The 8-Week Build (26 Features)

## Module 1: Authentication & User Accounts

> **Week 1 | 7 days | Difficulty: ⭐⭐**
> You already know most of this. The new parts are httpOnly cookies and OAuth.

### Feature 1.1: User Registration

| Field | Detail |
|---|---|
| **What it does** | New users create account with name, email, password |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential — no app works without it |
| **Difficulty** | ⭐ Very Easy |
| **Time to build** | 3-4 hours |
| **Tech used** | Express.js, MongoDB, Mongoose, bcrypt |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| Express.js | Handles the POST /register API route | ✅ Yes | — |
| MongoDB + Mongoose | Stores user document (name, email, passwordHash) | ✅ Yes | — |
| bcrypt | Hashes password before storing (never store plain text) | ❌ New | 1 hour |

---

### Feature 1.2: Login & Logout

| Field | Detail |
|---|---|
| **What it does** | User logs in with email/password, gets JWT in httpOnly cookie. Logout clears cookie. |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential |
| **Difficulty** | ⭐⭐ Easy |
| **Time to build** | 4-5 hours |
| **Tech used** | JWT, httpOnly cookies, Express.js |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| JWT (jsonwebtoken) | Creates a token containing userId, signs it with a secret | Partially | 3-4 hours |
| httpOnly cookie | Stores JWT in a cookie that JavaScript cannot access (prevents XSS theft) | ❌ New | 2-3 hours |
| cookie-parser | Express middleware to read cookies from requests | ❌ New | 30 min |

> **Why httpOnly cookies instead of localStorage?**
> localStorage is accessible by any JavaScript on the page. If an attacker injects script (XSS), they steal the token. httpOnly cookies are invisible to JavaScript — only the browser sends them automatically. This is the **secure** way. Interviewers will ask about this.

---

### Feature 1.3: Auth Middleware (Protected Routes)

| Field | Detail |
|---|---|
| **What it does** | Middleware that checks JWT on every protected API request. Blocks unauthenticated users. |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential |
| **Difficulty** | ⭐⭐ Easy |
| **Time to build** | 2-3 hours |
| **Tech used** | JWT verification, Express middleware |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| Express middleware | Function that runs before route handler, checks token | ✅ Yes | — |
| jwt.verify() | Decodes and validates the JWT token | Partially | 1 hour |

---

### Feature 1.4: GitHub OAuth (Connect GitHub Account)

| Field | Detail |
|---|---|
| **What it does** | "Connect GitHub" button → redirects to GitHub → user authorizes → GitHub sends back a code → your server exchanges code for access token → stores token (encrypted) on user profile |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential — entire GitHub integration depends on this |
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time to build** | 1-1.5 days |
| **Tech used** | OAuth 2.0, GitHub OAuth App, Express, axios/fetch |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| OAuth 2.0 (concept) | Authorization protocol — lets your app access user's GitHub data with their permission | ❌ New | 3-4 hours (watch YouTube + read docs) |
| GitHub OAuth App | You register your app on GitHub, get a Client ID and Client Secret | ❌ New | 1-2 hours (GitHub docs) |
| Authorization Code Flow | The specific OAuth flow: redirect → authorize → code → token | ❌ New | 3-4 hours |
| Token encryption | Encrypt the GitHub token before storing in MongoDB (AES-256 or similar) | ❌ New | 2-3 hours |

> **The OAuth flow in simple terms:**
> 1. User clicks "Connect GitHub"
> 2. Your frontend redirects to `github.com/login/oauth/authorize?client_id=YOUR_ID`
> 3. User clicks "Authorize" on GitHub
> 4. GitHub redirects back to your app with a `?code=abc123`
> 5. Your backend sends this code + your client secret to GitHub
> 6. GitHub responds with an access token
> 7. You store this token (encrypted) — now you can call GitHub API as this user

---

### Feature 1.5: User Profile

| Field | Detail |
|---|---|
| **What it does** | View and edit profile — name, bio, skills, avatar, linked GitHub username |
| **Usefulness** | ⭐⭐⭐ Moderate |
| **Difficulty** | ⭐ Very Easy |
| **Time to build** | 3-4 hours |
| **Tech used** | React, Express, MongoDB (basic CRUD) |

Nothing new to learn here. Standard CRUD.

---

## Module 2: Workspaces & Teams

> **Week 2 | 7 days | Difficulty: ⭐⭐⭐**
> CRUD plus authorization. The RBAC middleware is the important learning here.

### Feature 2.1: Workspace CRUD

| Field | Detail |
|---|---|
| **What it does** | Create, view, edit, delete workspaces (a workspace = a team/organization) |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential — workspaces are the top-level container |
| **Difficulty** | ⭐ Very Easy |
| **Time to build** | 3-4 hours |
| **Tech used** | React, Express, MongoDB |

Nothing new. Standard CRUD.

---

### Feature 2.2: Invite Members by Email

| Field | Detail |
|---|---|
| **What it does** | Workspace admin enters an email → system creates an invitation with a unique token → invited user accepts using that token |
| **Usefulness** | ⭐⭐⭐⭐ High |
| **Difficulty** | ⭐⭐ Easy |
| **Time to build** | 4-5 hours |
| **Tech used** | Express, MongoDB, crypto (for token generation) |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| crypto.randomBytes() | Generates a random unique invitation token | ❌ New (but very simple) | 30 min |
| TTL index (MongoDB) | Auto-deletes expired invitations after a set time | ❌ New | 1 hour |

---

### Feature 2.3: Accept / Reject Invitations

| Field | Detail |
|---|---|
| **What it does** | User views pending invitations → accepts (becomes member) or rejects |
| **Usefulness** | ⭐⭐⭐⭐ High |
| **Difficulty** | ⭐ Very Easy |
| **Time to build** | 2-3 hours |
| **Tech used** | React, Express, MongoDB |

---

### Feature 2.4: Role-Based Access Control (RBAC)

| Field | Detail |
|---|---|
| **What it does** | 3 roles (Owner, Admin, Member) with different permissions. Backend middleware checks role before allowing actions. |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential — this is what interviewers will ask about |
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time to build** | 1 day |
| **Tech used** | Express middleware, MongoDB |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| RBAC pattern | Design pattern — define what each role can do in a permission matrix | ❌ New (concept) | 3-4 hours |
| Authorization middleware | Middleware that checks: is user a member? what role? does role allow this action? | ❌ New (pattern) | 3-4 hours |
| Multi-tenant query scoping | Every database query includes `workspaceId` filter so users never see other workspaces' data | ❌ New (concept) | 2-3 hours |

**Permission matrix you'll hardcode:**

| Action | Owner | Admin | Member |
|---|---|---|---|
| Delete workspace | ✅ | ❌ | ❌ |
| Edit workspace | ✅ | ✅ | ❌ |
| Invite members | ✅ | ✅ | ❌ |
| Remove members | ✅ | ✅ | ❌ |
| Create projects | ✅ | ✅ | ✅ |
| View projects | ✅ | ✅ | ✅ |
| Create reviews | ✅ | ✅ | ✅ |
| Use AI features | ✅ | ✅ | ✅ |

---

## Module 3: Projects

> **Week 2 (continued) | Difficulty: ⭐**

### Feature 3.1: Project CRUD

| Field | Detail |
|---|---|
| **What it does** | Create, view, edit, archive projects inside a workspace |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential |
| **Difficulty** | ⭐ Very Easy |
| **Time to build** | 3-4 hours |
| **Tech used** | React, Express, MongoDB |

---

### Feature 3.2: Project Dashboard

| Field | Detail |
|---|---|
| **What it does** | Overview page showing: connected repo info, recent PRs, review activity, quick stats |
| **Usefulness** | ⭐⭐⭐⭐ High |
| **Difficulty** | ⭐⭐ Easy |
| **Time to build** | 4-5 hours |
| **Tech used** | React (data fetching + display) |

---

## Module 4: GitHub Integration

> **Week 3-4 | 14 days | Difficulty: ⭐⭐⭐**
> This is the first major learning challenge. You're integrating a real external API.

### Feature 4.1: Connect Repository to Project

| Field | Detail |
|---|---|
| **What it does** | User selects from their GitHub repos → connects one repo to a MergeNest project |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential — the foundation for everything |
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time to build** | 1 day |
| **Tech used** | GitHub API, Octokit, Express, MongoDB |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| Octokit | Official GitHub SDK for Node.js — makes API calls easy | ❌ New | 2-3 hours |
| GitHub REST API | The API endpoints to fetch user repos, branches, commits, PRs | ❌ New | 1 day |

```javascript
// What Octokit looks like (it's just an HTTP client for GitHub)
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({ auth: userGithubToken });

// Fetch user's repos
const repos = await octokit.repos.listForAuthenticatedUser();

// Fetch branches
const branches = await octokit.repos.listBranches({ owner, repo });

// Fetch pull requests
const prs = await octokit.pulls.list({ owner, repo, state: "open" });
```

---

### Feature 4.2: View Branches & Commits

| Field | Detail |
|---|---|
| **What it does** | Display list of branches and recent commit history for connected repo |
| **Usefulness** | ⭐⭐⭐⭐ High |
| **Difficulty** | ⭐⭐ Easy (once Octokit is set up) |
| **Time to build** | 4-5 hours |
| **Tech used** | GitHub API (via Octokit), React |

---

### Feature 4.3: View Pull Requests

| Field | Detail |
|---|---|
| **What it does** | List all open/closed/merged PRs with title, author, status, branch info |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential — PRs are the center of code review |
| **Difficulty** | ⭐⭐ Easy |
| **Time to build** | 4-5 hours |
| **Tech used** | GitHub API, React, MongoDB (cache PR metadata) |

---

### Feature 4.4: PR Detail Page

| Field | Detail |
|---|---|
| **What it does** | Full PR view — title, description, author, source/target branch, files changed count, additions/deletions |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential |
| **Difficulty** | ⭐⭐ Easy |
| **Time to build** | 4-5 hours |
| **Tech used** | GitHub API, React |

---

### Feature 4.5: GitHub Webhooks

| Field | Detail |
|---|---|
| **What it does** | GitHub sends HTTP POST to your server when events happen (new PR, push, PR merged). Your server processes these events and updates data. |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential — without this, you'd have to manually refresh data |
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time to build** | 1.5 days |
| **Tech used** | Express, crypto, GitHub Webhooks |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| Webhooks (concept) | GitHub calls YOUR server when something happens (instead of you polling GitHub) | ❌ New | 2-3 hours |
| Webhook signature verification | Verify the request actually came from GitHub (not a hacker) using HMAC-SHA256 | ❌ New | 2-3 hours |
| Idempotency handling | Prevent processing the same event twice (GitHub may retry) | ❌ New | 1-2 hours |
| ngrok (for development) | Exposes your localhost to the internet so GitHub can reach your dev server | ❌ New | 30 min |

> **How webhooks work:**
> 1. You register a webhook URL on GitHub (e.g., `https://your-app.com/api/webhooks/github`)
> 2. When someone opens a PR on that repo, GitHub sends a POST request to your URL
> 3. Your server verifies the signature, reads the event, and updates your database
> 4. During development, use **ngrok** to expose localhost

---

## Module 5: Code Review System

> **Week 7 | 7 days | Difficulty: ⭐⭐⭐**
> The diff viewer library does the heavy lifting. Your job is inline comments.

### Feature 5.1: Code Diff Viewer

| Field | Detail |
|---|---|
| **What it does** | Shows code changes — old version on left, new version on right, with green (added) and red (removed) highlighting |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential — the core of code review |
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time to build** | 1 day |
| **Tech used** | react-diff-viewer-continued, GitHub API |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| react-diff-viewer-continued | React component that renders code diffs beautifully | ❌ New | 2-3 hours |
| Unified diff format | The standard format for representing code changes (+/- lines) | ❌ New (concept) | 1-2 hours |
| GitHub API (file diff) | Fetching the actual diff content for a PR's files | Already learned | — |

---

### Feature 5.2: Inline Review Comments

| Field | Detail |
|---|---|
| **What it does** | Click on a line in the diff → add a comment on that specific line. Comment is linked to file + line number. |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential — this IS code review |
| **Difficulty** | ⭐⭐⭐ Medium (UI positioning is tricky) |
| **Time to build** | 1.5 days |
| **Tech used** | React (custom UI), Express, MongoDB |

---

### Feature 5.3: Review Threads & Replies

| Field | Detail |
|---|---|
| **What it does** | Each inline comment starts a thread. Others can reply. Creates a discussion on specific code. |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential |
| **Difficulty** | ⭐⭐ Easy |
| **Time to build** | 4-5 hours |
| **Tech used** | React, Express, MongoDB (nested/threaded comment model) |

---

### Feature 5.4: Resolve / Unresolve Threads

| Field | Detail |
|---|---|
| **What it does** | Mark a review discussion as resolved (issue addressed) or reopen it |
| **Usefulness** | ⭐⭐⭐⭐ High |
| **Difficulty** | ⭐ Very Easy |
| **Time to build** | 1-2 hours |
| **Tech used** | React, Express, MongoDB |

---

### Feature 5.5: Review Status Tracking

| Field | Detail |
|---|---|
| **What it does** | PR has a review status: Pending → In Review → Changes Requested → Approved |
| **Usefulness** | ⭐⭐⭐⭐ High |
| **Difficulty** | ⭐⭐ Easy |
| **Time to build** | 3-4 hours |
| **Tech used** | React, Express, MongoDB |

---

## Module 6: AI Features

> **Week 5-6 | 14 days | Difficulty: ⭐⭐⭐**
> You're learning one new thing: calling the Gemini API with good prompts. The pattern repeats for all AI features.

### Feature 6.1: AI PR Summarizer

| Field | Detail |
|---|---|
| **What it does** | Click "Generate Summary" on a PR → AI reads the diff → produces structured summary (overview, key changes, risks, what to test) |
| **Usefulness** | ⭐⭐⭐⭐⭐ Very High — saves reviewers significant time |
| **Difficulty** | ⭐⭐ Easy |
| **Time to build** | 4-5 hours |
| **Tech used** | Google Gemini API (gemini-2.0-flash), Express |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| Google Gemini API | Send a prompt + code → get AI response | ❌ New | 3-4 hours |
| @google/genai (npm) | Official Google AI SDK for Node.js | ❌ New | 1-2 hours |
| Prompt engineering | Writing clear instructions so AI gives useful, structured output | ❌ New | 3-4 hours (ongoing) |
| Structured output | Tell AI to respond in JSON format so you can parse it reliably | ❌ New | 1-2 hours |

```javascript
// What your AI call looks like — it's this simple
const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const response = await ai.models.generateContent({
  model: "gemini-2.0-flash",
  contents: `You are a code review assistant.
    Summarize this pull request diff in JSON format:
    { "overview": "...", "keyChanges": [...], "risks": [...] }
    
    DIFF:
    ${prDiff}`
});
```

---

### Feature 6.2: AI Code Reviewer

| Field | Detail |
|---|---|
| **What it does** | Click "AI Review" on a PR → AI analyzes each changed file → returns structured findings (file, line, issue type, severity, suggestion) → displayed as inline comments on the diff |
| **Usefulness** | ⭐⭐⭐⭐⭐ Very High — the flagship AI feature |
| **Difficulty** | ⭐⭐⭐ Medium (prompt quality matters a lot) |
| **Time to build** | 1.5 days |
| **Tech used** | Google Gemini API (gemini-1.5-pro for quality), Express, MongoDB |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| Gemini 1.5 Pro | More capable model for complex code analysis (50 free req/day) | Same SDK | — |
| Structured JSON output | AI must return findings in exact JSON schema so you can render them | Learning in 6.1 | — |
| Prompt iteration | You'll rewrite the prompt 5-10 times to get good results | ❌ New (practice) | Ongoing |

---

### Feature 6.3: AI Code Explainer

| Field | Detail |
|---|---|
| **What it does** | Select code → "Explain this" → AI explains what it does, how it works, time complexity |
| **Usefulness** | ⭐⭐⭐⭐ High |
| **Difficulty** | ⭐⭐ Easy (same pattern as 6.1) |
| **Time to build** | 3-4 hours |
| **Tech used** | Gemini API, React, Express |

---

### Feature 6.4: AI Test Generator (Enhanced)

| Field | Detail |
|---|---|
| **What it does** | Select a function or code block → "Generate Tests" → AI auto-detects the language, picks the right testing framework (Jest for JS/TS, Mocha, Pytest for Python, JUnit for Java), generates comprehensive test cases covering normal, edge, and error cases. If existing test files are found in the project, AI follows the same patterns and conventions. |
| **Usefulness** | ⭐⭐⭐⭐⭐ Very High — developers love this |
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time to build** | 1.5 days |
| **Tech used** | Gemini API, React, Express |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| Gemini API | Same SDK you already use for other AI features | Already learned | — |
| Language detection logic | Check file extension (.js, .py, .java) to pick correct framework | Simple logic | 1-2 hours |
| Prompt engineering (advanced) | Include existing test file patterns in prompt so AI matches project style | Learning in 6.1 | Ongoing |

**What makes the enhanced version better than a basic test generator:**

| Capability | Basic Version | Enhanced Version (what you're building) |
|---|---|---|
| Language support | Jest only | Auto-detects: Jest, Mocha, Pytest, JUnit |
| Test patterns | Generic | Reads existing test files from repo → follows same style |
| Output | Just tests | Tests + explanation of what each test covers |
| Edge cases | Basic | Normal + edge + boundary + error + negative cases |

**What the AI generates:**
```javascript
// Input: user selects this function
function divide(a, b) {
  return a / b;
}

// AI detects: JavaScript → Jest framework
// AI generates:
describe('divide', () => {
  // Normal cases
  test('divides two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });
  test('divides negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  // Edge cases
  test('handles division by zero', () => {
    expect(divide(10, 0)).toBe(Infinity);
  });
  test('handles zero numerator', () => {
    expect(divide(0, 5)).toBe(0);
  });
  test('handles decimal results', () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  // Boundary cases
  test('handles very large numbers', () => {
    expect(divide(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
  });
  test('handles negative divisor', () => {
    expect(divide(10, -2)).toBe(-5);
  });
});
```

```python
# If the user selects Python code instead, AI auto-switches:
# AI detects: Python → Pytest framework

import pytest
from calculator import divide

def test_divide_positive_numbers():
    assert divide(10, 2) == 5

def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        divide(10, 0)

def test_divide_negative():
    assert divide(-10, 2) == -5
```

---

### Feature 6.5: AI Chat per Project

| Field | Detail |
|---|---|
| **What it does** | Chat interface within a project. Ask questions about the PR, code, or general dev questions. Conversation history saved. |
| **Usefulness** | ⭐⭐⭐⭐ High |
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time to build** | 1.5 days |
| **Tech used** | Gemini API, React, Express, MongoDB, streaming |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| Conversation history | Store messages in MongoDB, send last N messages as context to AI | ❌ New pattern | 2-3 hours |
| Streaming responses | AI response appears word-by-word (like ChatGPT) instead of waiting for full response | ❌ New | 3-4 hours |
| Token management | Don't send infinite history — keep within model's context limit | ❌ New concept | 1-2 hours |

---

## Module 7: Real-Time Notifications

> **Week 8 (first half) | Difficulty: ⭐⭐⭐**

### Feature 7.1: Real-Time Notification Delivery

| Field | Detail |
|---|---|
| **What it does** | When someone comments on your PR, you get an instant notification without refreshing the page |
| **Usefulness** | ⭐⭐⭐⭐ High |
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time to build** | 1 day |
| **Tech used** | Socket.IO, Express, MongoDB |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| Socket.IO (server) | Maintains persistent connection with each online user | ❌ New | 3-4 hours |
| Socket.IO (client) | Listens for events from server, updates UI in real-time | ❌ New | 2-3 hours |
| WebSocket (concept) | Persistent two-way connection (unlike HTTP which is request-response) | ❌ New concept | 2-3 hours |
| Rooms | Socket.IO rooms — each user joins their own room, you emit to that room | ❌ New | 1-2 hours |

```javascript
// Server: send notification to a specific user
io.to(`user:${userId}`).emit("notification", {
  type: "pr_comment",
  message: "Rahul commented on your PR #21",
  link: "/projects/123/pr/21"
});

// Client: listen for notifications
socket.on("notification", (data) => {
  showNotificationToast(data.message);
  addToNotificationList(data);
});
```

---

### Feature 7.2: Notification Center

| Field | Detail |
|---|---|
| **What it does** | Bell icon → dropdown showing all notifications → read/unread state → mark as read |
| **Usefulness** | ⭐⭐⭐⭐ High |
| **Difficulty** | ⭐⭐ Easy |
| **Time to build** | 4-5 hours |
| **Tech used** | React, Express, MongoDB |

---

## Module 8: Deployment & Polish

> **Week 8 (second half) | Difficulty: ⭐⭐⭐**

### Feature 8.1: Docker Setup

| Field | Detail |
|---|---|
| **What it does** | Dockerfile + docker-compose.yml so anyone can run your project with one command |
| **Usefulness** | ⭐⭐⭐⭐ High (shows professionalism) |
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time to build** | 4-5 hours |
| **Tech used** | Docker, Docker Compose |

| Technology | What It Does Here | You Know It? | Time to Learn |
|---|---|---|---|
| Docker | Packages your app + all its dependencies into a container | ❌ New | 3-4 hours |
| Dockerfile | Instructions to build your app container (install Node, copy code, npm install, start) | ❌ New | 2-3 hours |
| Docker Compose | Runs multiple containers together (your app + MongoDB) with one command | ❌ New | 2-3 hours |

---

### Feature 8.2: Cloud Deployment

| Field | Detail |
|---|---|
| **What it does** | Your app is live on the internet — anyone can visit the URL |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential — recruiters WILL click the link |
| **Difficulty** | ⭐⭐ Easy |
| **Time to build** | 3-4 hours |
| **Tech used** | Render (backend), Vercel (frontend) |

---

### Feature 8.3: README + Documentation

| Field | Detail |
|---|---|
| **What it does** | Professional README with screenshots, architecture diagram, setup instructions, feature list |
| **Usefulness** | ⭐⭐⭐⭐⭐ Essential — first thing recruiters/interviewers see on GitHub |
| **Difficulty** | ⭐ Very Easy |
| **Time to build** | 3-4 hours |

---

## V1 Feature Summary Table

| # | Feature | Usefulness | Difficulty | Build Time | Week |
|---|---|---|---|---|---|
| 1 | User Registration | ⭐⭐⭐⭐⭐ | ⭐ | 3-4 hrs | 1 |
| 2 | Login / Logout (JWT + cookies) | ⭐⭐⭐⭐⭐ | ⭐⭐ | 4-5 hrs | 1 |
| 3 | Auth Middleware | ⭐⭐⭐⭐⭐ | ⭐⭐ | 2-3 hrs | 1 |
| 4 | GitHub OAuth | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 1-1.5 days | 1 |
| 5 | User Profile | ⭐⭐⭐ | ⭐ | 3-4 hrs | 1 |
| 6 | Workspace CRUD | ⭐⭐⭐⭐⭐ | ⭐ | 3-4 hrs | 2 |
| 7 | Invite Members | ⭐⭐⭐⭐ | ⭐⭐ | 4-5 hrs | 2 |
| 8 | Accept/Reject Invitations | ⭐⭐⭐⭐ | ⭐ | 2-3 hrs | 2 |
| 9 | RBAC (3 roles) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 1 day | 2 |
| 10 | Project CRUD | ⭐⭐⭐⭐⭐ | ⭐ | 3-4 hrs | 2 |
| 11 | Project Dashboard | ⭐⭐⭐⭐ | ⭐⭐ | 4-5 hrs | 2 |
| 12 | Connect GitHub Repo | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 1 day | 3 |
| 13 | View Branches & Commits | ⭐⭐⭐⭐ | ⭐⭐ | 4-5 hrs | 3 |
| 14 | View Pull Requests | ⭐⭐⭐⭐⭐ | ⭐⭐ | 4-5 hrs | 3 |
| 15 | PR Detail Page | ⭐⭐⭐⭐⭐ | ⭐⭐ | 4-5 hrs | 3 |
| 16 | GitHub Webhooks | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 1.5 days | 4 |
| 17 | Code Diff Viewer | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 1 day | 7 |
| 18 | Inline Review Comments | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 1.5 days | 7 |
| 19 | Review Threads & Replies | ⭐⭐⭐⭐⭐ | ⭐⭐ | 4-5 hrs | 7 |
| 20 | Resolve/Unresolve | ⭐⭐⭐⭐ | ⭐ | 1-2 hrs | 7 |
| 21 | Review Status Tracking | ⭐⭐⭐⭐ | ⭐⭐ | 3-4 hrs | 7 |
| 22 | AI PR Summarizer | ⭐⭐⭐⭐⭐ | ⭐⭐ | 4-5 hrs | 5 |
| 23 | AI Code Reviewer | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 1.5 days | 5 |
| 24 | AI Code Explainer | ⭐⭐⭐⭐ | ⭐⭐ | 3-4 hrs | 6 |
| 25 | AI Test Generator (Enhanced) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 1.5 days | 6 |
| 26 | AI Chat per Project | ⭐⭐⭐⭐ | ⭐⭐⭐ | 1.5 days | 6 |
| 27 | Real-Time Notifications | ⭐⭐⭐⭐ | ⭐⭐⭐ | 1 day | 8 |
| 28 | Notification Center | ⭐⭐⭐⭐ | ⭐⭐ | 4-5 hrs | 8 |
| 29 | Docker Setup | ⭐⭐⭐⭐ | ⭐⭐⭐ | 4-5 hrs | 8 |
| 30 | Cloud Deployment | ⭐⭐⭐⭐⭐ | ⭐⭐ | 3-4 hrs | 8 |
| 31 | README + Docs | ⭐⭐⭐⭐⭐ | ⭐ | 3-4 hrs | 8 |

---

# VERSION 2 — Post-Launch Features (Add After 8 Weeks)

> Build these in order after V1 is shipped and deployed. Each one makes the project more impressive.

---

### V2 Feature 1: Collaborative Code Editor

| Field | Detail |
|---|---|
| **What it does** | Multiple developers edit the same code file simultaneously. Live cursors, real-time sync, shared sessions. |
| **Usefulness** | ⭐⭐⭐⭐⭐ |
| **Difficulty** | ⭐⭐⭐⭐⭐ Very Hard |
| **Time to build** | 3-4 weeks |
| **Priority** | 🔴 Add first — most impressive feature for interviews |

| Technology | What It Does | Difficulty | Time to Learn |
|---|---|---|---|
| Monaco Editor | The code editor UI (VS Code's editor in the browser) | ⭐⭐⭐ | 3-4 days |
| Yjs | CRDT library — handles what happens when 2 people edit the same line | ⭐⭐⭐⭐⭐ | 1-2 weeks |
| y-monaco | Connects Yjs to Monaco so edits sync automatically | ⭐⭐⭐ | 1-2 days |
| y-websocket | WebSocket server that syncs Yjs documents between users | ⭐⭐⭐⭐ | 2-3 days |
| CRDT (concept) | Conflict-free Replicated Data Type — the theory behind collaborative editing | ⭐⭐⭐⭐⭐ | 1 week |
| Awareness protocol | Shows other users' cursor positions and selections | ⭐⭐⭐ | 1-2 days |

---

### V2 Feature 2: Repository-Aware AI (RAG)

| Field | Detail |
|---|---|
| **What it does** | AI reads your ENTIRE codebase. Ask "how does authentication work?" → AI finds relevant files and explains with references. |
| **Usefulness** | ⭐⭐⭐⭐⭐ |
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time to build** | 3-4 weeks |
| **Priority** | 🔴 Add second — makes your AI features 10× more impressive |

| Technology | What It Does | Difficulty | Time to Learn |
|---|---|---|---|
| Embeddings (concept) | Convert text/code into numbers that capture meaning | ⭐⭐⭐⭐ | 2-3 days |
| Gemini Embeddings API | Generate embedding vectors (free) | ⭐⭐ | 2-3 hours |
| Vector Search (concept) | Find similar code/text using math (cosine similarity) | ⭐⭐⭐⭐ | 2-3 days |
| MongoDB Atlas Vector Search | Store and query vectors inside MongoDB | ⭐⭐⭐ | 1-2 days |
| Chunking | Splitting large files into smaller searchable pieces | ⭐⭐⭐⭐ | 3-4 days |
| RAG pipeline (concept) | Index → Embed → Store → Retrieve → Generate | ⭐⭐⭐⭐ | 1 week |
| Context engineering | Assembling the right code snippets for the AI to read | ⭐⭐⭐⭐ | 1 week |

---

### V2 Feature 3: AI Bug Detective

| Field | Detail |
|---|---|
| **What it does** | Paste error/stack trace → AI searches your codebase → identifies likely files and suggests fix |
| **Usefulness** | ⭐⭐⭐⭐⭐ |
| **Difficulty** | ⭐⭐⭐ Medium (after RAG is built) |
| **Time to build** | 1-2 weeks |
| **Depends on** | V2 Feature 3 (RAG) |
| **Tech to learn** | LLM Tool Calling — AI decides which files to look at (⭐⭐⭐⭐, 3-4 days) |
| **Priority** | 🟡 After RAG |

---

### V2 Feature 4: AI Knowledge Assistant

| Field | Detail |
|---|---|
| **What it does** | "Why did we choose MongoDB?" → AI searches review comments, docs, and discussions for the answer |
| **Usefulness** | ⭐⭐⭐⭐ |
| **Difficulty** | ⭐⭐⭐ Medium (after RAG) |
| **Time to build** | 1 week |
| **Depends on** | V2 Feature 3 (RAG) + indexing review comments |
| **Priority** | 🟡 After RAG |

---

### V2 Feature 5: Collaborative Documentation

| Field | Detail |
|---|---|
| **What it does** | Create and edit technical docs (architecture, API docs) with real-time collaboration |
| **Usefulness** | ⭐⭐⭐ |
| **Difficulty** | ⭐⭐⭐⭐ Hard |
| **Time to build** | 2 weeks |
| **Depends on** | V2 Feature 2 (same Yjs/CRDT knowledge) |
| **Tech to learn** | TipTap editor (⭐⭐⭐, 2-3 days), y-prosemirror binding (⭐⭐⭐, 1-2 days) |
| **Priority** | 🟢 Medium |

---

### V2 Feature 6: AI Issue-to-Code

| Field | Detail |
|---|---|
| **What it does** | Give it a GitHub issue → AI finds relevant files → suggests solution → generates code patch |
| **Usefulness** | ⭐⭐⭐⭐⭐ |
| **Difficulty** | ⭐⭐⭐⭐⭐ Very Hard |
| **Time to build** | 2-3 weeks |
| **Depends on** | V2 Feature 3 (RAG) |
| **Tech to learn** | Agent loops (⭐⭐⭐⭐⭐, 2-3 weeks), multi-step planning |
| **Priority** | 🟡 Stretch goal |

---

### V2 Feature 7: AI Pair Programming Assistant

| Field | Detail |
|---|---|
| **What it does** | During collaborative coding sessions, ask AI to review/explain the code you're writing |
| **Usefulness** | ⭐⭐⭐⭐ |
| **Difficulty** | ⭐⭐⭐ Medium (once editor + AI both exist) |
| **Time to build** | 1 week |
| **Depends on** | V2 Feature 2 (Editor) + existing AI |
| **Priority** | 🟢 After editor |

---

### V2 Feature 8: User Presence (Online/Offline)

| Field | Detail |
|---|---|
| **What it does** | See who's online in your workspace in real-time |
| **Usefulness** | ⭐⭐⭐ |
| **Difficulty** | ⭐⭐ Easy |
| **Time to build** | 3-4 hours |
| **Tech to learn** | Socket.IO rooms (already learned in V1) |
| **Priority** | 🟢 Easy addition |

---

### V2 Feature 9: Activity Feed

| Field | Detail |
|---|---|
| **What it does** | Timeline of workspace events — "Aniket opened PR #21", "Rahul commented on review" |
| **Usefulness** | ⭐⭐⭐ |
| **Difficulty** | ⭐⭐ Easy |
| **Time to build** | 1 day |
| **Priority** | 🟢 Easy addition |

---

### V2 Feature 10: Redis Caching

| Field | Detail |
|---|---|
| **What it does** | Cache GitHub API responses to reduce API calls and speed up page loads |
| **Usefulness** | ⭐⭐⭐ |
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time to build** | 3-5 days |
| **Tech to learn** | Redis (⭐⭐⭐, 3-5 days), caching patterns, cache invalidation |
| **Priority** | 🔵 Only if performance needs it |

---

### V2 Feature 11: CI/CD Pipeline

| Field | Detail |
|---|---|
| **What it does** | Automated testing + deployment on every git push using GitHub Actions |
| **Usefulness** | ⭐⭐⭐⭐ |
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time to build** | 1-2 days |
| **Tech to learn** | GitHub Actions (⭐⭐⭐, 2-3 days), YAML workflow files |
| **Priority** | 🟢 Add with V1 deployment |

---

## V2 Priority Order

| Order | Feature | Time | Impact |
|---|---|---|---|
| 1st | Collaborative Code Editor | 3-4 weeks | ⭐⭐⭐⭐⭐ Highest |
| 2nd | RAG / Repo-Aware AI | 3-4 weeks | ⭐⭐⭐⭐⭐ Highest |
| 3rd | AI Bug Detective | 1-2 weeks | ⭐⭐⭐⭐ High |
| 4th | AI Knowledge Assistant | 1 week | ⭐⭐⭐⭐ High |
| 5th | Collaborative Docs | 2 weeks | ⭐⭐⭐ Medium |
| 6th | AI Issue-to-Code | 2-3 weeks | ⭐⭐⭐⭐ High |
| 7th | AI Pair Programming | 1 week | ⭐⭐⭐ Medium |
| Quick | Presence, Activity Feed, CI/CD | 2-3 days each | ⭐⭐⭐ Medium |

---

## Complete Tech Stack — Everything in One Place

### V1 Technologies (what you use in 8 weeks)

| Technology | Category | Purpose | Difficulty | Time to Learn | Cost |
|---|---|---|---|---|---|
| React.js | Frontend | UI framework | ⭐ (known) | — | Free |
| Vite | Frontend | Build tool (fast dev server) | ⭐ | 1-2 hrs | Free |
| Tailwind CSS | Frontend | Utility-class styling | ⭐ | 2-3 hrs | Free |
| shadcn/ui | Frontend | Pre-built UI components (buttons, modals, dropdowns) | ⭐⭐ | 3-4 hrs | Free |
| React Router | Frontend | Page navigation | ⭐ (known) | — | Free |
| TanStack Query | Frontend | Data fetching, caching, loading states | ⭐⭐ | 4-5 hrs | Free |
| Zustand | Frontend | Simple state management | ⭐⭐ | 2-3 hrs | Free |
| react-diff-viewer | Frontend | Render code diffs | ⭐⭐ | 2-3 hrs | Free |
| Node.js | Backend | JavaScript runtime | ⭐ (known) | — | Free |
| Express.js | Backend | Backend framework | ⭐ (known) | — | Free |
| MongoDB | Database | Document database | ⭐ (known) | — | Free |
| Mongoose | Database | MongoDB ODM | ⭐ (known) | — | Free |
| JWT | Auth | Token-based authentication | ⭐⭐ | 3-4 hrs | Free |
| bcrypt | Auth | Password hashing | ⭐ | 1 hr | Free |
| OAuth 2.0 | Auth | GitHub authorization flow | ⭐⭐⭐ | 1 day | Free |
| Octokit | GitHub | GitHub API SDK for Node.js | ⭐⭐ | 2-3 hrs | Free |
| GitHub Webhooks | GitHub | Receive repo events | ⭐⭐⭐ | 1 day | Free |
| Google Gemini API | AI | LLM for code review, summaries, tests | ⭐⭐ | 3-4 hrs | **Free** |
| Socket.IO | Real-time | Notifications push | ⭐⭐⭐ | 3-4 hrs | Free |
| Docker | DevOps | Containerization | ⭐⭐⭐ | 3-5 hrs | Free |
| Render | Hosting | Backend deployment | ⭐⭐ | 2-3 hrs | **Free** |
| Vercel | Hosting | Frontend deployment | ⭐⭐ | 1-2 hrs | **Free** |

### V2 Additional Technologies (learn later)

| Technology | Category | Purpose | Difficulty | Time to Learn | Cost |
|---|---|---|---|---|---|
| Monaco Editor | Editor | Code editor (VS Code in browser) | ⭐⭐⭐ | 3-4 days | Free |
| Yjs | CRDT | Collaborative editing engine | ⭐⭐⭐⭐⭐ | 1-2 weeks | Free |
| y-monaco | Editor | Connects Yjs ↔ Monaco | ⭐⭐⭐ | 1-2 days | Free |
| y-websocket | Real-time | Syncs Yjs documents over WebSocket | ⭐⭐⭐⭐ | 2-3 days | Free |
| Gemini Embeddings | AI | Vector representations of code | ⭐⭐⭐ | 2-3 hrs | **Free** |
| MongoDB Atlas Vector Search | AI | Semantic search over code | ⭐⭐⭐ | 1-2 days | **Free** (M0) |
| LLM Tool Calling | AI | AI requests actions (read file, search) | ⭐⭐⭐⭐ | 3-4 days | Free |
| Redis | Infrastructure | Caching, rate limiting | ⭐⭐⭐ | 3-5 days | Free tier |
| GitHub Actions | DevOps | CI/CD pipelines | ⭐⭐⭐ | 2-3 days | Free |
| TipTap | Editor | Rich-text editor for docs | ⭐⭐⭐ | 2-3 days | Free |

---

## Weekly Schedule Summary

```
WEEK 1  ░░░░░░░░  Auth + Profiles + GitHub OAuth
WEEK 2  ░░░░░░░░  Workspaces + RBAC + Projects
WEEK 3  ░░░░░░░░  GitHub Integration (repos, branches, PRs)
WEEK 4  ░░░░░░░░  GitHub Webhooks + PR Data Sync
WEEK 5  ░░░░░░░░  AI PR Summarizer + AI Code Reviewer
WEEK 6  ░░░░░░░░  AI Explainer + AI Test Gen + AI Chat
WEEK 7  ░░░░░░░░  Code Diff Viewer + Review Comments
WEEK 8  ░░░░░░░░  Notifications + Docker + Deploy + README
        ────────────────────────────────────────────────
        🚀 V1 SHIPPED — Apply to internships with this

WEEK 9+  ░░░░░░░░  Collaborative Editor (3-4 weeks)
WEEK 13+ ░░░░░░░░  RAG / Repo-Aware AI (3-4 weeks)
WEEK 17+ ░░░░░░░░  Bug Detective + Knowledge AI + Extras
```

---

## What Your Resume Says After V1

> **MergeNest** — AI-Powered Collaborative Development Platform
> - Built multi-tenant platform for teams to manage projects and review code with AI assistance
> - Integrated GitHub OAuth + REST API for real-time repository data (branches, commits, PRs, webhooks)
> - Implemented AI code review, PR summarization, and multi-language test generation (Jest, Pytest, JUnit) using Google Gemini API with structured outputs
> - Designed RBAC with backend-enforced authorization and workspace-level data isolation
> - Built interactive code diff viewer with inline comments and threaded review discussions
> - **Stack:** React, Node.js, Express, MongoDB, GitHub API, Gemini AI, JWT, OAuth 2.0, Socket.IO, Docker

## What Your Resume Says After V2

> All of the above, **plus:**
> - Built real-time collaborative code editor using Monaco Editor and Yjs (CRDT-based conflict resolution)
> - Implemented RAG pipeline for repository-aware AI — code indexing, embeddings, vector search, context-aware responses
> - **Additional Stack:** Monaco Editor, Yjs, CRDT, Embeddings, MongoDB Atlas Vector Search
