const ALERT_VARIANTS = {
  error: 'border-error/30 bg-error-container text-on-error-container',
  success: 'border-success/30 bg-success-container text-on-success-container',
  info: 'border-primary/25 bg-lavender-soft text-on-lavender-soft',
};

/**
 * Semantic inline alert banner for form errors, API warnings, and confirmations.
 * @param {{ variant?: 'error' | 'success' | 'info', title?: string, children: import('react').ReactNode, className?: string }} props
 */
function Alert({ variant = 'info', title, children, className = '' }) {
  const variantClasses = ALERT_VARIANTS[variant] || ALERT_VARIANTS.info;

  return (
    <div
      role={variant === 'error' ? 'alert' : 'status'}
      className={`rounded-lg border px-3.5 py-2.5 text-[13px] leading-relaxed ${variantClasses} ${className}`}
    >
      {title && <p className="font-semibold">{title}</p>}
      <div>{children}</div>
    </div>
  );
}

export default Alert;
