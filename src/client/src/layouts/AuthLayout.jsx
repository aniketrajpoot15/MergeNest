import { Link, Outlet } from 'react-router-dom';
import BrandLogo from '../components/shared/BrandLogo.jsx';

/**
 * Centered glassmorphic authentication layout wrapping /login and /register.
 */
function AuthLayout() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-surface px-4 py-10 text-on-surface transition-colors duration-200">
      {/* Subtle ambient editorial backdrop */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 left-1/4 h-[460px] w-[460px] rounded-full bg-lavender-soft/80 opacity-80 blur-3xl dark:opacity-45" />
        <div className="absolute right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-surface-high/60 opacity-70 blur-3xl dark:opacity-35" />
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col gap-6">
        <div className="flex items-center justify-between gap-3">
          <BrandLogo />
          <Link
            to="/"
            className="text-[13px] font-medium text-on-surface-muted transition-colors hover:text-primary"
          >
            Back to home
          </Link>
        </div>

        <div className="rounded-xl border border-outline-variant/85 bg-surface-card/80 p-6 shadow-[0_12px_32px_-8px_rgba(59,53,107,0.09)] backdrop-blur-xl sm:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
