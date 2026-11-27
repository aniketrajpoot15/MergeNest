import { Link } from 'react-router-dom';

/**
 * Landing overview page inside MainLayout.
 */
function HomePage() {
  return (
    <div className="flex flex-col gap-8 py-4">
      <section className="flex flex-col gap-4 border-b border-outline-variant/70 pb-8">
        <span className="inline-flex w-fit items-center gap-2 rounded-md bg-lavender-soft px-3 py-1 text-[12px] font-medium text-on-lavender-soft">
          Editorial Workspace · Stage 1 Setup
        </span>
        <h1 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">
          Connect your GitHub repository, review pull requests, and ship with clarity.
        </h1>
        <p className="max-w-xl text-[15px] leading-relaxed text-on-surface-muted">
          MergeNest brings team workspaces, line-by-line code reviews, and Gemini AI analysis together in one calm developer workspace.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            to="/register"
            className="rounded-lg bg-primary px-5 py-2.5 text-[13px] font-medium text-on-primary shadow-sm transition-colors hover:bg-primary-hover"
          >
            Create workspace account
          </Link>
          <Link
            to="/dashboard"
            className="rounded-lg border border-outline-variant bg-surface-card px-5 py-2.5 text-[13px] font-medium text-on-surface transition-colors hover:bg-surface-low"
          >
            Preview dashboard
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-outline-variant/85 bg-surface-card p-6 shadow-[0_1px_2px_rgba(26,28,26,0.04)]">
          <h2 className="font-display text-[15px] font-semibold text-on-surface">
            Multi-tenant workspaces
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-on-surface-muted">
            Organize repositories and reviews across teams with strict role-based permissions.
          </p>
        </article>

        <article className="rounded-xl border border-outline-variant/85 bg-surface-card p-6 shadow-[0_1px_2px_rgba(26,28,26,0.04)]">
          <h2 className="font-display text-[15px] font-semibold text-on-surface">
            Live GitHub pull requests
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-on-surface-muted">
            Inspect branches, commit history, and webhook-synced PR diffs in one place.
          </p>
        </article>

        <article className="rounded-xl border border-outline-variant/85 bg-surface-card p-6 shadow-[0_1px_2px_rgba(26,28,26,0.04)]">
          <h2 className="font-display text-[15px] font-semibold text-on-surface">
            Gemini AI review assistant
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-on-surface-muted">
            Summarize pull requests, surface security risks, and generate unit test suites.
          </p>
        </article>
      </section>
    </div>
  );
}

export default HomePage;
