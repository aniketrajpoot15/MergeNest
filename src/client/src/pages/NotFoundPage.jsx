import { Link } from 'react-router-dom';

/**
 * Fallback 404 page for unmatched client routes.
 */
function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <span className="rounded-md bg-lavender-soft px-3 py-1 font-mono text-[12px] text-on-lavender-soft">
        404 · Not Found
      </span>
      <h1 className="font-display text-2xl font-semibold text-on-surface">
        Page not found
      </h1>
      <p className="max-w-md text-[14px] text-on-surface-muted">
        The workspace route you tried to visit doesn&apos;t exist.
      </p>
      <Link
        to="/"
        className="mt-2 rounded-lg bg-primary px-4 py-2 text-[13px] font-medium text-on-primary transition-colors hover:bg-primary-hover"
      >
        Return to overview
      </Link>
    </div>
  );
}

export default NotFoundPage;
