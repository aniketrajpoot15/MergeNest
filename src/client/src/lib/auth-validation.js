const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmailField = (email) => {
  const trimmedEmail = (email || '').trim();
  if (!trimmedEmail) {
    return 'Email is required';
  }
  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    return 'Please provide a valid email address';
  }
  return '';
};

/**
 * Validate registration form values against backend registerSchema rules plus confirmPassword.
 * @param {{ name: string, email: string, password: string, confirmPassword: string }} values
 * @returns {{ isValid: boolean, fieldErrors: Record<string, string> }}
 */
export const validateRegisterForm = ({
  name,
  email,
  password,
  confirmPassword,
}) => {
  const fieldErrors = {};
  const trimmedName = (name || '').trim();

  if (!trimmedName) {
    fieldErrors.name = 'Name is required';
  } else if (trimmedName.length < 2) {
    fieldErrors.name = 'Name must be at least 2 characters';
  } else if (trimmedName.length > 50) {
    fieldErrors.name = 'Name cannot exceed 50 characters';
  }

  const emailError = validateEmailField(email);
  if (emailError) {
    fieldErrors.email = emailError;
  }

  const rawPassword = password || '';
  if (!rawPassword) {
    fieldErrors.password = 'Password is required';
  } else if (rawPassword.length < 8) {
    fieldErrors.password = 'Password must be at least 8 characters';
  } else if (rawPassword.length > 72) {
    fieldErrors.password = 'Password cannot exceed 72 characters';
  } else if (
    !/[a-z]/.test(rawPassword) ||
    !/[A-Z]/.test(rawPassword) ||
    !/\d/.test(rawPassword)
  ) {
    fieldErrors.password =
      'Password must include lowercase, uppercase, and a number';
  }

  if (!confirmPassword) {
    fieldErrors.confirmPassword = 'Please confirm your password';
  } else if (confirmPassword !== rawPassword) {
    fieldErrors.confirmPassword = 'Passwords do not match';
  }

  return {
    isValid: Object.keys(fieldErrors).length === 0,
    fieldErrors,
  };
};

/**
 * Validate login credentials before sending to POST /api/v1/auth/login.
 * @param {{ email: string, password: string }} values
 * @returns {{ isValid: boolean, fieldErrors: Record<string, string> }}
 */
export const validateLoginForm = ({ email, password }) => {
  const fieldErrors = {};

  const emailError = validateEmailField(email);
  if (emailError) {
    fieldErrors.email = emailError;
  }

  if (!password) {
    fieldErrors.password = 'Password is required';
  }

  return {
    isValid: Object.keys(fieldErrors).length === 0,
    fieldErrors,
  };
};

/**
 * Convert normalized backend { errors: [{ field, message }] } payload into field lookup map.
 * @param {{ errors?: Array<{ field?: string, message?: string }> } | null | undefined} apiError
 * @returns {Record<string, string>}
 */
export const mapApiFieldErrors = (apiError) => {
  if (!Array.isArray(apiError?.errors)) {
    return {};
  }

  return apiError.errors.reduce((accumulator, item) => {
    if (item?.field && item?.message && !accumulator[item.field]) {
      accumulator[item.field] = item.message;
    }
    return accumulator;
  }, {});
};
