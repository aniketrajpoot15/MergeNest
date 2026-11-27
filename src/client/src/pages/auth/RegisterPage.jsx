import { Link } from 'react-router-dom';

/**
 * Registration page placeholder (form wiring and validation added in Step 1.6).
 */
function RegisterPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h1 className="font-display text-2xl font-semibold text-on-surface">
          Create your account
        </h1>
        <p className="text-[13px] text-on-surface-muted">
          Join MergeNest to collaborate on pull requests and code reviews.
        </p>
      </div>

      <div className="rounded-lg border border-outline-variant/80 bg-surface-low/75 p-4 text-[13px] text-on-surface-muted">
        Registration form and Zod validation feedback will be added here in{' '}
        <span className="font-mono text-[12px] text-primary">Step 1.6</span>.
      </div>

      <div className="flex items-center justify-between border-t border-outline-variant/65 pt-4 text-[13px]">
        <span className="text-on-surface-muted">Already registered?</span>
        <Link to="/login" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
