import { useState } from 'react';

/**
 * Accessible labeled form input styled for the Stitch Editorial Design System,
 * with inline validation error state and built-in password visibility toggle.
 * @param {{ id: string, name: string, label: string, type?: string, value: string, onChange: Function, placeholder?: string, error?: string, hint?: string, autoComplete?: string, disabled?: boolean }} props
 */
function FormInput({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  hint,
  autoComplete,
  disabled = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === 'password';
  const resolvedType = isPasswordField && showPassword ? 'text' : type;

  const describedById = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[13px] font-medium text-on-surface"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={name}
          type={resolvedType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={describedById}
          className={`w-full rounded-lg border bg-surface-card px-3.5 py-2.5 text-[14px] text-on-surface placeholder:text-outline transition-colors focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60 ${
            isPasswordField ? 'pr-10' : ''
          } ${
            error
              ? 'border-error focus:border-error focus:ring-error/20'
              : 'border-outline-variant focus:border-primary focus:ring-primary/20'
          }`}
        />

        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            disabled={disabled}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute inset-y-0 right-2 flex items-center rounded-md px-1.5 text-on-surface-muted transition-colors hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          >
            {showPassword ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>

      {error ? (
        <p id={`${id}-error`} className="text-[12px] font-medium text-error">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-[12px] text-on-surface-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export default FormInput;
