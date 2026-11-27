import api from './api.js';

/**
 * Register a new developer account.
 * @param {{ name: string, email: string, password: string }} payload
 */
export const register = (payload) => api.post('/auth/register', payload);

/**
 * Authenticate with email and password (backend sets httpOnly accessToken cookie).
 * @param {{ email: string, password: string }} credentials
 */
export const login = (credentials) => api.post('/auth/login', credentials);

/**
 * Clear the authenticated session cookie on the server.
 */
export const logout = () => api.post('/auth/logout');

/**
 * Fetch the currently authenticated user profile from the server session cookie.
 */
export const getMe = () => api.get('/auth/me');
