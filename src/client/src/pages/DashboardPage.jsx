import { Link } from 'react-router-dom';

/**
 * Developer dashboard placeholder (auth guard added in Step 1.7; live data in Stage 2+).
 */
function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 py-2">
      <header className="flex flex-col justify-between gap-4 border-b border-outline-variant/70 pb-6 sm:flex-row sm:items-end">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-on-surface">
            Developer dashboard
          </h1>
          <p className="mt-1 text-[14px] text-on-surface-muted">
            Your workspace overview, linked repositories, and open pull requests will live here.
          </p>
        </div>

        <span className="inline-flex w-fit items-center gap-2 rounded-md bg-success-container px-3 py-1 text-[12px] font-medium text-on-success-container">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          Route ready
        </span>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="rounded-xl border border-outline-variant/85 bg-surface-card p-6 shadow-[0_1px_2px_rgba(26,28,26,0.04)] lg:col-span-7">
          <h2 className="font-display text-[16px] font-semibold text-on-surface">
            Active projects
          </h2>
          <p className="mt-2 font-mono text-[12px] text-on-surface-muted">
            Workspaces &amp; Projects module arrives in Stage 2.
          </p>
        </div>

        <div className="rounded-xl border border-outline-variant/85 bg-surface-card/75 p-6 shadow-[0_8px_24px_-4px_rgba(59,53,107,0.07)] backdrop-blur-lg lg:col-span-5">
          <h2 className="font-display text-[16px] font-semibold text-on-surface">
            Authentication status
          </h2>
          <p className="mt-2 text-[13px] text-on-surface-muted">
            Next up: wiring login, registration, and route protection in{' '}
            <span className="font-mono text-[12px] text-primary">
              Steps 1.6–1.7
            </span>
            .
          </p>
          <div className="mt-4">
            <Link
              to="/login"
              className="text-[13px] font-medium text-primary hover:underline"
            >
              Go to login →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
