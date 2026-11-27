import { create } from 'zustand';
import * as authService from '../services/authService.js';

/**
 * Global authentication state store backed by httpOnly JWT cookies on the API server.
 * Only safe user profile attributes are held in memory; JWT credentials never touch JS/localStorage.
 */
export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isCheckingAuth: false,
  error: null,

  clearError: () => set({ error: null }),

  register: async ({ name, email, password }) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.register({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      });
      set({ isLoading: false });
      return response.data?.user || null;
    } catch (apiError) {
      set({
        isLoading: false,
        error: apiError?.message || 'Unable to create account',
      });
      throw apiError;
    }
  },

  login: async ({ email, password }) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.login({
        email: email.trim().toLowerCase(),
        password,
      });
      const authenticatedUser = response.data?.user || null;
      set({
        user: authenticatedUser,
        isAuthenticated: Boolean(authenticatedUser),
        isLoading: false,
      });
      return authenticatedUser;
    } catch (apiError) {
      set({
        isLoading: false,
        error: apiError?.message || 'Invalid email or password',
      });
      throw apiError;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await authService.logout();
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    } catch (apiError) {
      set({
        isLoading: false,
        error: apiError?.message || 'Unable to sign out right now',
      });
      throw apiError;
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await authService.getMe();
      const currentUser = response.data?.user || null;
      set({
        user: currentUser,
        isAuthenticated: Boolean(currentUser),
        isCheckingAuth: false,
      });
      return currentUser;
    } catch {
      set({
        user: null,
        isAuthenticated: false,
        isCheckingAuth: false,
      });
      return null;
    }
  },
}));
