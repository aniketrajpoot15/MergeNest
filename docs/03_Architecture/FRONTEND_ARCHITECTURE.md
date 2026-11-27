# Frontend Architecture

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** Blueprint for the React 19 SPA — folder organization, routing patterns, Axios API communication, state management rules, and component conventions.
> - **Who reads it:** Developers and AI coding assistants before adding new pages, components, hooks, or stores.
> - **When to update:** Whenever client folders, routing guards, state patterns, or styling conventions change.

---

## Folder Structure

```text
src/client/src/
├── components/              # Reusable UI components
│   ├── ui/                  # Base UI primitives (FormInput, Alert, ToastViewport)
│   ├── layout/              # Layout sub-components (Sidebar, TopBar, Navbar)
│   └── shared/              # Cross-cutting shared UI (BrandLogo, ThemeToggle)
├── layouts/                 # Route-level layout shells using <Outlet />
│   ├── MainLayout.jsx       # Translucent glass sidebar + top bar + main workspace
│   └── AuthLayout.jsx       # Centered glass card for login & registration
├── pages/                   # Route-level screens
│   ├── auth/                # LoginPage, RegisterPage
│   ├── workspaces/          # (Stage 2) Workspace list & settings
│   ├── projects/            # (Stage 2+) Project dashboard & details
│   ├── HomePage.jsx
│   ├── DashboardPage.jsx
│   └── NotFoundPage.jsx
├── routes/                  # React Router nested route tree
│   └── AppRoutes.jsx
├── services/                # Axios instance & domain API modules
│   ├── api.js               # Configured Axios client (withCredentials: true)
│   └── authService.js       # Auth API endpoints (/auth/register, /login, /logout, /me)
├── stores/                  # Zustand global client state
│   ├── authStore.js         # Authenticated user session state & actions
│   └── toastStore.js        # Global toast notification queue
├── hooks/                   # Custom React hooks (useTheme)
├── lib/                     # Pure helpers, validators, constants (auth-validation.js)
├── App.jsx                  # Wraps AppRoutes in BrowserRouter
├── index.css                # Tailwind CSS v4 @import + Stitch Editorial @theme tokens
└── main.jsx                 # React DOM mount
```

---

## State Management Strategy

- **Client & Session State (`Zustand`):** Used for lightweight global UI/session state (logged-in user object, auth loading status, active workspace selection, mobile sidebar toggle). No Redux — Zustand avoids boilerplate.
- **Server / Async Data State (`TanStack Query` / Services):** API calls are centralized in `src/services/` rather than calling Axios directly inside JSX components.

---

## API Communication Pattern (`services/api.js`)

- Uses a single shared Axios instance configured with:
  - `baseURL`: `import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1'`
  - `withCredentials: true`: Required so browsers send and save `httpOnly` JWT cookies across origins (`localhost:5173` ↔ `localhost:5000`, and Vercel ↔ Render in production).
- Response interceptor automatically unwraps `response.data` on success and normalizes backend `{ success: false, message, errors }` errors on failure.

---

## Routing & Layouts

- **React Router (`BrowserRouter` + nested `<Route>`):**
  - Public/workspace screens nest inside `<MainLayout />` (renders `<Outlet />` inside the main content area).
  - Authentication screens (`/login`, `/register`) nest inside `<AuthLayout />`.
- **Guards (added in Step 1.7 & Stage 2):**
  - Protected routes wrap with `<ProtectedRoute />` checking authenticated session.
  - Workspace-scoped routes validate workspace selection before loading project views.

---

## Styling & Component Conventions

- **Design System:** Uses the **MergeNest — Editorial Developer Workspace** Stitch theme with semantic Tailwind CSS v4 `@theme` tokens and adaptive light/dark mode (`html.dark` overrides + `useTheme` hook + `ThemeToggle` button on `/` home page):
  - **Light Mode:** Warm ivory (`#F4EFE6`), soft cream cards (`#FAF7F1`), muted indigo (`#453F78`), soft lavender highlights (`#ECE7F7`).
  - **Dark Mode:** Obsidian charcoal (`#121412`), elevated dark cards (`#1F201E`), lavender-indigo primary (`#C7BFFF`), crisp stone ink (`#E3E2DF`).
  - **Typography & Glass:** Plus Jakarta Sans, Inter, and Geist Mono, with selective `backdrop-blur-xl` frosted glassmorphism.
- **One Component Per File:** Match file name to PascalCase component name (e.g., `MainLayout.jsx`, `BrandLogo.jsx`).
- **Props Documentation:** Document non-trivial component props with concise JSDoc comments.
