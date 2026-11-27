import { Link } from 'react-router-dom';

/**
 * Login page placeholder (form wiring and Zustand authStore added in Step 1.6).
 */
function LoginPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h1 className="font-display text-2xl font-semibold text-on-surface">
          Sign in to MergeNest
        </h1>
        <p className="text-[13px] text-on-surface-muted">
          Enter your credentials to access your developer workspaces.
        </p>
      </div>

      <div className="rounded-lg border border-outline-variant/80 bg-surface-low/75 p-4 text-[13px] text-on-surface-muted">
        Login form and cookie session wiring will be connected here in{' '}
        <span className="font-mono text-[12px] text-primary">Step 1.6</span>.
      </div>

      <div className="flex items-center justify-between border-t border-outline-variant/65 pt-4 text-[13px]">
        <span className="text-on-surface-muted">New to MergeNest?</span>
        <Link
          to="/register"
          className="font-medium text-primary hover:underline"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
