# MergeNest Design System

> **FILE PURPOSE & USAGE GUIDE**
> - **What this file is for:** Authoritative reference for MergeNest's visual tokens, typography, light/dark themes, frosted glass surfaces, and form/feedback UI conventions derived from the Stitch Editorial Developer Workspace design.
> - **Who reads it:** Developers and AI coding assistants before creating new React UI components or pages.
> - **When to update:** Whenever color tokens, typography, theme variables, or shared UI primitives (`components/ui/`) change.

---

## 1. Visual Direction

MergeNest uses a calm **Editorial Developer Workspace** aesthetic built with **Tailwind CSS v4** (`@theme` semantic CSS custom properties in `src/client/src/index.css`) and class-based Light / Dark switching (`@custom-variant dark (&:where(.dark, .dark *));` controlled by `useTheme.js` + `ThemeToggle` on `/`).

- **Pre-paint Persistence:** An inline `<script>` in `src/client/index.html` applies `html.dark` from `localStorage.getItem('mergenest-theme')` (or OS `prefers-color-scheme`) before React mounts to prevent white/cream flash on reload.
- **Semantic Tokens Only:** Components use semantic utility names (`bg-surface`, `bg-surface-card`, `text-on-surface`, `border-outline-variant`, `bg-primary`) instead of hardcoded hex values so every surface switches automatically between Light and Dark modes.

---

## 2. Color Tokens (`src/client/src/index.css`)

### Surfaces & Backgrounds

| Token | Tailwind Usage | Light Mode | Dark Mode (`html.dark`) | Purpose |
|---|---|---|---|---|
| `--color-surface` | `bg-surface` | `#F4EFE6` | `#121412` | Primary page canvas |
| `--color-surface-card` | `bg-surface-card` | `#FAF7F1` | `#1F201E` | Elevated cards, inputs, modals |
| `--color-surface-low` | `bg-surface-low` | `#EFE9DF` | `#1A1C1A` | Subtle hover & inset panels |
| `--color-surface-high` | `bg-surface-high` | `#E3DCD0` | `#292A29` | Ambient accents & elevated bars |
| `--color-surface-highest` | `bg-surface-highest` | `#DCD4C7` | `#343533` | Nested controls / badges |

### Ink, Borders & Interactive Accents

| Token | Tailwind Usage | Light Mode | Dark Mode (`html.dark`) | Purpose |
|---|---|---|---|---|
| `--color-on-surface` | `text-on-surface` | `#242320` | `#E3E2DF` | Primary headings & body copy |
| `--color-on-surface-muted` | `text-on-surface-muted` | `#54504A` | `#C9C5D0` | Secondary labels & subtitles |
| `--color-outline` | `border-outline` | `#7A746B` | `#928F9A` | Input placeholders & high-contrast strokes |
| `--color-outline-variant` | `border-outline-variant` | `#D6CFC2` | `#47454F` | Default card, divider, and input borders |
| `--color-primary` | `bg-primary` / `text-primary` | `#453F78` | `#C7BFFF` | Primary CTAs, links, focus borders |
| `--color-primary-hover` | `hover:bg-primary-hover` | `#5B5491` | `#B4AAFA` | Primary button hover state |
| `--color-on-primary` | `text-on-primary` | `#FAF7F1` | `#2F295F` | Text inside primary buttons & icons |
| `--color-lavender-soft` | `bg-lavender-soft` | `#ECE7F7` | `#302E44` | Active nav items, pills, text selection |
| `--color-on-lavender-soft` | `text-on-lavender-soft` | `#322C61` | `#E4DFFC` | Ink on soft lavender pills |

### Semantic Status Colors

| Token Group | Light Ink / Fill | Dark Ink / Fill | Usage |
|---|---|---|---|
| **Success** (`--color-success*`) | `#2E6F56` / `#DFECE4` | `#5FC89C` / `#1A382B` | Active sessions, completed actions |
| **Warning** (`--color-warning*`) | `#8A5A00` / `#F6EBD5` | `#E6B85C` / `#382809` | Caution badges & pending states |
| **Error** (`--color-error*`) | `#B3261E` / `#F9DEDC` | `#FFB4AB` / `#93000A` | Invalid fields, failed API requests |

---

## 3. Typography Scale

Loaded from Google Fonts in `src/client/index.html`:

- **Display (`font-display`):** `Plus Jakarta Sans` — Hero titles (`text-3xl sm:text-4xl font-semibold tracking-tight`), page headings (`text-2xl`), card headings (`text-[15px]–[16px]`).
- **Body (`font-body`):** `Inter` — Body copy (`text-[14px]–[15px]`), form inputs (`text-[14px]`), secondary captions and buttons (`text-[13px]`), helper/error text (`text-[12px]`).
- **Monospace (`font-mono`):** `Geist Mono` — Workspace slugs, commit/PR refs, validation steps, and code identifiers (`text-[12px]`).

---

## 4. Core Component Patterns (`src/client/src/components/`)

- **Frosted Glass Containers:** Floating headers, sidebar, and auth cards use `bg-surface-card/75` (or `/80`) paired with `backdrop-blur-xl` and `border-outline-variant/75`.
- **Form Inputs (`ui/FormInput.jsx`):**
  - Always pair `<label htmlFor>` with `<input id>`.
  - Focus state uses `focus:border-primary focus:ring-2 focus:ring-primary/20`; invalid state switches to `border-error focus:border-error focus:ring-error/20` with `aria-invalid="true"` and `aria-describedby`.
  - Password fields include a `type="button"` eye toggle to avoid accidental `<form>` submission.
- **Inline Alerts (`ui/Alert.jsx`):** Semantic banners for `error` (`role="alert"`), `success` (`role="status"`), and `info`.
- **Toast Notifications (`ui/ToastViewport.jsx` + `stores/toastStore.js`):** Mounted once in `App.jsx` (`fixed right-4 bottom-4 z-50`) so success/error messages survive route redirects (e.g., `/register` → `/login`).
- **Primary Buttons:** Rounded `rounded-lg`, padding `px-4 py-2.5` (or `px-3.5 py-1.5` in top bar), disabled state `disabled:cursor-not-allowed disabled:opacity-65`.
