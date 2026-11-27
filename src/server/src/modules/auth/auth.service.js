import bcrypt from 'bcryptjs';
import { ApiError } from '../../shared/utils/api-error.js';
import { signAuthToken } from '../../shared/utils/jwt.js';
import * as userService from '../users/user.service.js';

// Cost factor 12+ per docs/05_Security/SECURITY.md specification
const BCRYPT_SALT_ROUNDS = 12;

/**
 * Register a new user account with hashed password and return safe profile data.
 * @param {{ name: string, email: string, password: string }} registrationData
 * @returns {Promise<object>}
 */
export const register = async ({ name, email, password }) => {
  const existingUser = await userService.findUserByEmail(email);

  if (existingUser) {
    throw new ApiError(409, 'An account with this email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

  const createdUser = await userService.createUser({
    name,
    email,
    password: hashedPassword,
  });

  return userService.toSafeUser(createdUser);
};

/**
 * Verify email/password credentials and return safe user profile + signed JWT.
 * @param {{ email: string, password: string }} credentials
 * @returns {Promise<{ user: object, token: string }>}
 */
export const login = async ({ email, password }) => {
  const user = await userService.findUserByEmail(email, {
    includePassword: true,
  });

  if (!user || !user.password) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const token = signAuthToken(user._id.toString());

  return {
    user: userService.toSafeUser(user),
    token,
  };
};
