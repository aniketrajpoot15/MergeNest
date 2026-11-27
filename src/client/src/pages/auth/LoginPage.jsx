import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Alert from '../../components/ui/Alert.jsx';
import FormInput from '../../components/ui/FormInput.jsx';
import {
  mapApiFieldErrors,
  validateLoginForm,
} from '../../lib/auth-validation.js';
import { useAuthStore } from '../../stores/authStore.js';
import { toast } from '../../stores/toastStore.js';

/**
 * Developer sign-in page connected to POST /api/v1/auth/login (httpOnly cookie session).
 */
function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);
  const clearError = useAuthStore((state) => state.clearError);

  const initialEmail = location.state?.registeredEmail || '';
  const justRegistered = Boolean(location.state?.registered);
  const redirectedFrom = location.state?.from?.pathname;
  const redirectTarget = redirectedFrom || '/dashboard';

  const [formValues, setFormValues] = useState({
    email: initialEmail,
    password: '',
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (formError) {
      setFormError('');
      clearError();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    clearError();
    setFormError('');

    const validation = validateLoginForm(formValues);
    if (!validation.isValid) {
      setFieldErrors(validation.fieldErrors);
      return;
    }

    setFieldErrors({});

    try {
      const authenticatedUser = await login({
        email: formValues.email,
        password: formValues.password,
      });

      toast.success(
        `Welcome back, ${authenticatedUser?.name || 'developer'}!`,
        { title: 'Signed in' }
      );
      navigate(redirectTarget, { replace: true });
    } catch (apiError) {
      const apiFieldErrors = mapApiFieldErrors(apiError);
      const errorMessage =
        apiError?.message || 'Invalid email or password. Please try again.';

      setFieldErrors(apiFieldErrors);
      setFormError(errorMessage);
      toast.error(errorMessage, { title: 'Sign in failed' });
    }
  };

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

      {justRegistered && !formError && (
        <Alert variant="success" title="Registration complete">
          Your account has been created. Sign in below to start your session.
        </Alert>
      )}

      {redirectedFrom && !justRegistered && !formError && (
        <Alert variant="info" title="Sign in required">
          Please sign in to access{' '}
          <span className="font-mono text-[12px]">{redirectedFrom}</span>.
        </Alert>
      )}

      {formError && (
        <Alert variant="error" title="Sign in failed">
          {formError}
        </Alert>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <FormInput
          id="login-email"
          name="email"
          label="Email address"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="developer@example.com"
          autoComplete="email"
          error={fieldErrors.email}
          disabled={isLoading}
        />

        <FormInput
          id="login-password"
          name="password"
          label="Password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Enter your password"
          autoComplete="current-password"
          error={fieldErrors.password}
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-[14px] font-medium text-on-primary shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 disabled:cursor-not-allowed disabled:opacity-65"
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>

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
