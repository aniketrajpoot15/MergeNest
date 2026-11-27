import { ApiResponse } from '../../shared/utils/api-response.js';
import { asyncHandler } from '../../shared/utils/async-handler.js';
import {
  AUTH_COOKIE_NAME,
  getAuthCookieOptions,
  getClearAuthCookieOptions,
} from '../../shared/utils/jwt.js';
import * as authService from './auth.service.js';

/**
 * Handle POST /api/v1/auth/register
 */
export const register = asyncHandler(async (req, res) => {
  const user = await authService.register(req.body);

  return new ApiResponse(201, { user }, 'User registered successfully').send(
    res
  );
});

/**
 * Handle POST /api/v1/auth/login
 */
export const login = asyncHandler(async (req, res) => {
  const { user, token } = await authService.login(req.body);

  res.cookie(AUTH_COOKIE_NAME, token, getAuthCookieOptions());

  return new ApiResponse(200, { user }, 'Logged in successfully').send(res);
});

/**
 * Handle POST /api/v1/auth/logout
 */
export const logout = asyncHandler(async (_req, res) => {
  res.clearCookie(AUTH_COOKIE_NAME, getClearAuthCookieOptions());

  return new ApiResponse(200, null, 'Logged out successfully').send(res);
});

/**
 * Handle GET /api/v1/auth/me (protected)
 */
export const getMe = asyncHandler(async (req, res) =>
  new ApiResponse(
    200,
    { user: req.user },
    'Current user fetched successfully'
  ).send(res)
);
