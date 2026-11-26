# MergeNest

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** The public-facing overview of MergeNest. This is the first thing recruiters, interviewers, and developers see on GitHub.
> - **Who reads it:** Everyone — recruiters, interviewers, open-source contributors, and AI coding assistants.
> - **When to update:** After each major phase completion — add screenshots, update feature status markers, and update setup instructions.

---

> "Connect your GitHub repo, get AI-powered code reviews, and collaborate with your team — all in one place."

## Overview

**MergeNest** is an AI-powered collaborative development platform designed for modern engineering teams and student developers. It bridges the gap between raw git hosting and intelligent code review by integrating GitHub repositories with Google Gemini AI. With MergeNest, teams can manage multi-tenant workspaces, conduct line-by-line pull request reviews with inline discussions, generate automated test suites, and receive structured AI code reviews — eliminating review bottlenecks and accelerating software delivery.

---

## Features

### 📋 Planned (V1 Roadmap)

#### 🔐 Authentication & User Profiles
- 📋 User registration with secure password hashing (`bcrypt`)
- 📋 JWT authentication stored in secure `httpOnly` cookies (XSS protection)
- 📋 Route protection and authentication middleware
- 📋 GitHub OAuth account linking (AES-256 encrypted token storage)
- 📋 User profile management (skills, bio, avatar, linked accounts)

#### 🏢 Workspaces & Teams
- 📋 Multi-tenant workspace management (CRUD)
- 📋 Team member invitations via email with secure tokens and TTL expiry
- 📋 Invitation acceptance and rejection workflows
- 📋 Role-Based Access Control (RBAC) with 3 tiers: Owner, Admin, Member

#### 📁 Projects & Dashboard
- 📋 Project management inside workspaces
- 📋 Project overview dashboard with repository stats and recent activity

#### 🐙 GitHub Integration
- 📋 Connect GitHub repositories to workspace projects via Octokit
- 📋 Real-time branch and commit history exploration
- 📋 Pull request listing with status filtering (Open, Closed, Merged)
- 📋 Detailed pull request inspection (diffs, additions/deletions, file changes)
- 📋 Real-time GitHub Webhook processing with HMAC-SHA256 signature verification

#### 🔍 Code Review System
- 📋 Side-by-side & unified code diff viewer with syntax highlighting
- 📋 Inline review comments anchored to exact files and line numbers
- 📋 Multi-user review threads and threaded discussions
- 📋 Thread resolution management (Resolve / Reopen)
- 📋 PR review status lifecycle (Pending, In Review, Changes Requested, Approved)

#### 🤖 AI Features (Powered by Google Gemini)
- 📋 **AI PR Summarizer:** Instant breakdown of changes, architecture risks, and testing suggestions (`gemini-2.0-flash`)
- 📋 **AI Code Reviewer:** Automated line-level issue detection and security suggestions (`gemini-1.5-pro`)
- 📋 **AI Code Explainer:** On-demand explanations and algorithmic complexity analysis for selected code blocks
- 📋 **Enhanced AI Test Generator:** Multi-framework test generation (Jest, Pytest, Mocha, JUnit) matching repository conventions
- 📋 **Project AI Chat:** Context-aware interactive assistant for codebase questions with streaming responses

#### ⚡ Real-Time Notifications
- 📋 Real-time notification delivery via Socket.IO WebSocket rooms
- 📋 Notification center with unread counters and mark-as-read controls

#### 🚀 Deployment & DevOps
- 📋 Containerized deployment with Docker and Docker Compose
- 📋 Cloud hosting on Render (backend) and Vercel (frontend)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Frontend Single Page Application (SPA) |
| **Vite** | Modern, fast frontend build tooling and dev server |
| **Tailwind CSS v4** | Utility-first responsive styling system |
| **Node.js** | Backend JavaScript runtime |
| **Express.js** | RESTful API server framework |
| **MongoDB Atlas** | Primary cloud NoSQL document database |
| **Mongoose** | Schema-based ODM for MongoDB |
| **Google Gemini API** | AI code review, test generation, and PR analysis |
| **Octokit** | Official GitHub REST API client |
| **Socket.IO** | Real-time bidirectional WebSocket events |
| **JWT & httpOnly Cookies** | Secure session management & authentication |
| **Zod** | Schema validation for API requests |
| **Docker** | Containerization for reproducible environments |
| **Render & Vercel** | Free-tier cloud deployment hosting |

---

## Screenshots

*Coming soon — UI is currently under active development.*

---

## Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **MongoDB**: Local MongoDB instance or free MongoDB Atlas cluster
- **Git**: Installed and configured
- **GitHub Account & OAuth App**: Required for GitHub integration features
- **Google Gemini API Key**: Free tier API key from Google AI Studio

For step-by-step setup details, see [SETUP.md](SETUP.md).

### Quick Start

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

4. **Set up environment variables:**
   ```bash
   # From the project root
   cp .env.example src/server/.env
   # Edit src/server/.env with your MongoDB URI, JWT secret, and API keys
   ```

5. **Run the development servers:**
   - **Backend:** `cd src/server && npm run dev` (starts on `http://localhost:5000` with nodemon auto-reload)
   - **Frontend:** `cd src/client && npm run dev` (starts on `http://localhost:5173`)

### Available NPM Scripts

#### Backend (`src/server`)
| Script | Command | Purpose |
|---|---|---|
| `dev` | `nodemon src/server.js` | Starts server with live auto-restart on file save |
| `start` | `node src/server.js` | Runs the server in production mode |
| `lint` | `eslint src/` | Checks code against ESLint rules |
| `lint:fix` | `eslint src/ --fix` | Automatically fixes auto-fixable ESLint issues |
| `format` | `prettier --write "src/**/*.js"` | Formats code with Prettier |
| `format:check` | `prettier --check "src/**/*.js"` | Verifies that files match Prettier standards |

#### Frontend (`src/client`)
| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite` | Starts local Vite development server with HMR |
| `build` | `vite build` | Compiles optimized production bundle |
| `lint` | `oxlint` | High-speed static analysis with Oxlint |
| `preview` | `vite preview` | Previews production build locally |

---

## Project Structure

```
MergeNest/
├── docs/                      # Comprehensive system & API documentation
│   ├── 01_Product/            # PRD and product roadmaps
│   ├── 02_Design/             # Design system and UI specs
│   ├── 03_Architecture/       # System architecture, DB design, security
│   ├── 04_API/                # REST API standards & endpoint documentation
│   ├── 05_Deployment/         # Deployment guides & Docker setup
│   └── 06_Testing/            # Testing strategy and test cases
├── learning/                  # Engineering study guides & interview prep
│   ├── LEARNING_PROFILE.md    # Developer skill calibration
│   ├── LEARNING_ROADMAP.md    # Phase-by-phase learning plan
│   ├── NEXT_STEP_PREP.md      # Step-level concept study guides
│   ├── SKILLS_TRACKER.md      # Skill mastery checklist
│   ├── LEARNING_LOG.md        # Engineering journal
│   └── INTERVIEW_PREP.md      # Technical interview Q&A & STAR stories
├── progress/                  # Project progress dashboards
│   ├── CURRENT_STATUS.md      # Live step status and active blockers
│   └── STAGES_AND_STEPS.md    # Master 55-step execution checklist
├── src/
│   ├── client/                # React 19 frontend (Vite + Tailwind CSS v4)
│   └── server/                # Express backend (modular monolith architecture)
├── AGENTS.md                  # AI coding assistant guidelines and conventions
├── CLAUDE.md                  # Claude / CLI tool instructions
├── MERGENEST-BLUEPRINT.md      # Master project functional blueprint
└── DOC-CREATION-PLAN.md       # Master documentation specifications
```

---

## Documentation

- 📄 [Product Requirements Document (PRD)](docs/01_Product/PRD.md)
- 🏗️ [System Architecture](docs/03_Architecture/SYSTEM_ARCHITECTURE.md)
- 💾 [Database Design](docs/03_Architecture/DATABASE_DESIGN.md)
- 🗺️ [Complete Project Blueprint](MERGENEST-BLUEPRINT.md)
- 📋 [Stages & Steps Checklist](progress/STAGES_AND_STEPS.md)

---

## License

This project is licensed under the [MIT License](LICENSE).
