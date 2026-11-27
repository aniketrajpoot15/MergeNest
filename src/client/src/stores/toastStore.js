import { create } from 'zustand';

const DEFAULT_TOAST_DURATION_MS = 4000;
const activeTimers = new Map();
let nextToastSequence = 1;

/**
 * Global notification toast queue for cross-route feedback.
 */
export const useToastStore = create((set) => ({
  toasts: [],

  addToast: ({
    type = 'info',
    title,
    message,
    duration = DEFAULT_TOAST_DURATION_MS,
  }) => {
    const id = `toast-${nextToastSequence++}`;

    set((state) => ({
      toasts: [...state.toasts, { id, type, title, message }],
    }));

    if (duration > 0 && typeof window !== 'undefined') {
      const timerId = window.setTimeout(() => {
        activeTimers.delete(id);
        set((state) => ({
          toasts: state.toasts.filter((item) => item.id !== id),
        }));
      }, duration);
      activeTimers.set(id, timerId);
    }

    return id;
  },

  dismissToast: (id) => {
    const timerId = activeTimers.get(id);
    if (timerId !== undefined && typeof window !== 'undefined') {
      window.clearTimeout(timerId);
      activeTimers.delete(id);
    }

    set((state) => ({
      toasts: state.toasts.filter((item) => item.id !== id),
    }));
  },
}));

export const toast = {
  success: (message, options = {}) =>
    useToastStore.getState().addToast({ type: 'success', message, ...options }),
  error: (message, options = {}) =>
    useToastStore.getState().addToast({ type: 'error', message, ...options }),
  info: (message, options = {}) =>
    useToastStore.getState().addToast({ type: 'info', message, ...options }),
};
