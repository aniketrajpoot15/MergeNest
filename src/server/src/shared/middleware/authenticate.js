import * as userService from '../../modules/users/user.service.js';
import { ApiError } from '../utils/api-error.js';
import { asyncHandler } from '../utils/async-handler.js';
import { AUTH_COOKIE_NAME, verifyAuthToken } from '../utils/jwt.js';

/**
 * Protect routes by verifying the httpOnly JWT cookie and loading the current user.
 * Attaches sanitized user object to `req.user` on success.
 */
export const authenticate = asyncHandler(async (req, _res, next) => {
  const token = req.cookies?.[AUTH_COOKIE_NAME];

  if (!token) {
    throw new ApiError(401, 'Authentication required. Please log in.');
  }

  let decodedPayload;
  try {
    decodedPayload = verifyAuthToken(token);
  } catch (error) {
    const message =
      error.name === 'TokenExpiredError'
        ? 'Session expired. Please log in again.'
        : 'Invalid authentication token';
    throw new ApiError(401, message);
  }

  if (!decodedPayload?.userId) {
    throw new ApiError(401, 'Invalid authentication token');
  }

  const user = await userService.findUserById(decodedPayload.userId);
  if (!user) {
    throw new ApiError(
      401,
      'User associated with this session no longer exists'
    );
  }

  req.user = userService.toSafeUser(user);
  next();
});
