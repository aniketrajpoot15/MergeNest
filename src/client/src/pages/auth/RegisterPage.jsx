import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../../components/ui/Alert.jsx';
import FormInput from '../../components/ui/FormInput.jsx';
import {
  mapApiFieldErrors,
  validateRegisterForm,
} from '../../lib/auth-validation.js';
import { useAuthStore } from '../../stores/authStore.js';
import { toast } from '../../stores/toastStore.js';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

/**
 * Developer registration page connected to POST /api/v1/auth/register via authStore.
 */
function RegisterPage() {
  const navigate = useNavigate();
  const register = useAuthStore((state) => state.register);
  const isLoading = useAuthStore((state) => state.isLoading);
  const clearError = useAuthStore((state) => state.clearError);

  const [formValues, setFormValues] = useState(INITIAL_VALUES);
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

    const validation = validateRegisterForm(formValues);
    if (!validation.isValid) {
      setFieldErrors(validation.fieldErrors);
      return;
    }

    setFieldErrors({});

    try {
      await register({
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
      });

      toast.success('Your MergeNest account is ready. Please sign in.', {
        title: 'Account created',
      });

      navigate('/login', {
        state: {
          registered: true,
          registeredEmail: formValues.email.trim().toLowerCase(),
        },
      });
    } catch (apiError) {
      const apiFieldErrors = mapApiFieldErrors(apiError);
      const errorMessage =
        apiError?.message || 'Unable to create your account right now.';

      setFieldErrors(apiFieldErrors);
      setFormError(errorMessage);
      toast.error(errorMessage, { title: 'Registration failed' });
    }
  };

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

      {formError && (
        <Alert variant="error" title="Could not create account">
          {formError}
        </Alert>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <FormInput
          id="register-name"
          name="name"
          label="Full name"
          type="text"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Aniket Rajpoot"
          autoComplete="name"
          error={fieldErrors.name}
          disabled={isLoading}
        />

        <FormInput
          id="register-email"
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
          id="register-password"
          name="password"
          label="Password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Create a strong password"
          autoComplete="new-password"
          hint="8+ chars with uppercase, lowercase, and at least one number"
          error={fieldErrors.password}
          disabled={isLoading}
        />

        <FormInput
          id="register-confirm-password"
          name="confirmPassword"
          label="Confirm password"
          type="password"
          value={formValues.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter your password"
          autoComplete="new-password"
          error={fieldErrors.confirmPassword}
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-[14px] font-medium text-on-primary shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 disabled:cursor-not-allowed disabled:opacity-65"
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </button>
      </form>

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
