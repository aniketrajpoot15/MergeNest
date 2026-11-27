import axios from 'axios';

const API_BASE_URL =
  import.meta.env?.VITE_API_URL || 'http://localhost:5000/api/v1';

/**
 * Shared Axios HTTP client configured for cookie-based authentication.
 * `withCredentials: true` ensures the browser sends/stores httpOnly JWT cookies cross-origin.
 */
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const normalizedError = error.response?.data || {
      success: false,
      message: 'Unable to reach server. Please check your connection.',
      errors: [],
    };

    return Promise.reject(normalizedError);
  }
);

export default api;
