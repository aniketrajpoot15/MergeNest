import { useToastStore } from '../../stores/toastStore.js';

const TOAST_STYLES = {
  success: {
    container: 'border-success/40 bg-surface-card/95 text-on-surface',
    dot: 'bg-success',
  },
  error: {
    container: 'border-error/45 bg-surface-card/95 text-on-surface',
    dot: 'bg-error',
  },
  info: {
    container: 'border-primary/35 bg-surface-card/95 text-on-surface',
    dot: 'bg-primary',
  },
};

/**
 * Floating toast viewport mounted at the application root so messages persist across route transitions.
 */
function ToastViewport() {
  const toasts = useToastStore((state) => state.toasts);
  const dismissToast = useToastStore((state) => state.dismissToast);

  if (toasts.length === 0) {
    return null;
  }

  return (
    <div
      aria-live="polite"
      aria-label="Notifications"
      className="pointer-events-none fixed right-4 bottom-4 z-50 flex w-full max-w-sm flex-col gap-2.5 pl-4"
    >
      {toasts.map((item) => {
        const style = TOAST_STYLES[item.type] || TOAST_STYLES.info;

        return (
          <div
            key={item.id}
            role="status"
            className={`pointer-events-auto flex items-start justify-between gap-3 rounded-xl border p-3.5 shadow-[0_12px_28px_-8px_rgba(26,28,26,0.2)] backdrop-blur-xl ${style.container}`}
          >
            <div className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${style.dot}`}
              />
              <div className="flex flex-col gap-0.5 text-[13px]">
                {item.title && <p className="font-semibold">{item.title}</p>}
                <p className="text-on-surface-muted">{item.message}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => dismissToast(item.id)}
              aria-label="Dismiss notification"
              className="rounded-md p-1 text-on-surface-muted transition-colors hover:bg-surface-low hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ToastViewport;
