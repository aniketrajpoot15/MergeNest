import { ApiResponse } from '../../shared/utils/api-response.js';
import { asyncHandler } from '../../shared/utils/async-handler.js';
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
