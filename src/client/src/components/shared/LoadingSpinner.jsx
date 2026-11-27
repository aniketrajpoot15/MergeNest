const SPINNER_SIZES = {
  sm: 'h-4 w-4 border-2',
  md: 'h-7 w-7 border-[2.5px]',
  lg: 'h-10 w-10 border-[3px]',
};

/**
 * Accessible loading indicator styled with Stitch Editorial semantic colors.
 * @param {{ fullScreen?: boolean, size?: 'sm' | 'md' | 'lg', label?: string }} props
 */
function LoadingSpinner({
  fullScreen = false,
  size = 'md',
  label = 'Loading...',
}) {
  const sizeClass = SPINNER_SIZES[size] || SPINNER_SIZES.md;

  const content = (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-3 text-center"
    >
      <span
        aria-hidden="true"
        className={`animate-spin rounded-full border-outline-variant border-t-primary ${sizeClass}`}
      />
      {label && (
        <p className="text-[13px] font-medium text-on-surface-muted">{label}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface px-4 text-on-surface">
        {content}
      </div>
    );
  }

  return content;
}

export default LoadingSpinner;
