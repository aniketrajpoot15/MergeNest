import { Link } from 'react-router-dom';

/**
 * MergeNest brand mark matching the Stitch Editorial Design System.
 */
function BrandLogo({ showSubtitle = true, to = '/' }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-on-primary shadow-sm">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 5V19M7 12C11.5 12 12.5 7 17 7M17 7V17"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="5" r="2" fill="currentColor" />
          <circle cx="17" cy="7" r="2" fill="currentColor" />
          <circle cx="17" cy="17" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-display text-[15px] font-semibold leading-none text-on-surface">
          MergeNest
        </span>
        {showSubtitle && (
          <span className="mt-1 text-[11px] font-medium leading-none text-on-surface-muted">
            Dev Platform
          </span>
        )}
      </div>
    </Link>
  );
}

export default BrandLogo;
