import jwt from 'jsonwebtoken';
import { env } from '../../config/env.js';

export const AUTH_COOKIE_NAME = 'accessToken';

const DEFAULT_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
const DURATION_MULTIPLIERS_MS = {
  s: 1000,
  m: 60 * 1000,
  h: 60 * 60 * 1000,
  d: 24 * 60 * 60 * 1000,
};

/**
 * Convert short duration strings (e.g. '7d', '24h', '30m') into milliseconds.
 * Falls back to 7 days if format is unrecognized.
 * @param {string} duration
 * @returns {number}
 */
const parseDurationToMs = (duration) => {
  if (/^\d+$/.test(duration)) {
    return Number(duration) * 1000;
  }

  const match = /^(\d+)([smhd])$/i.exec(duration.trim());
  if (!match) {
    return DEFAULT_MAX_AGE_MS;
  }

  const value = Number(match[1]);
  const unit = match[2].toLowerCase();
  return value * DURATION_MULTIPLIERS_MS[unit];
};

/**
 * Shared cookie attributes without maxAge so login and logout options match cleanly.
 * Uses SameSite='none' + Secure in production when SPA and API are on separate domains.
 * @returns {import('express').CookieOptions}
 */
const getBaseCookieOptions = () => {
  const isProduction = env.NODE_ENV === 'production';

  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    path: '/',
  };
};

/**
 * Sign a stateless JWT containing the authenticated user's ID.
 * @param {string} userId
 * @returns {string}
 */
export const signAuthToken = (userId) =>
  jwt.sign({ userId }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });

/**
 * Verify a JWT signature and expiration using the server secret.
 * @param {string} token
 * @returns {import('jsonwebtoken').JwtPayload & { userId?: string }}
 */
export const verifyAuthToken = (token) => jwt.verify(token, env.JWT_SECRET);

/**
 * Cookie options for setting the httpOnly JWT cookie on login.
 * @returns {import('express').CookieOptions}
 */
export const getAuthCookieOptions = () => ({
  ...getBaseCookieOptions(),
  maxAge: parseDurationToMs(env.JWT_EXPIRES_IN),
});

/**
 * Matching cookie options (without maxAge) required when clearing the auth cookie.
 * @returns {import('express').CookieOptions}
 */
export const getClearAuthCookieOptions = () => getBaseCookieOptions();
