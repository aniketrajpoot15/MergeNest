import { env } from '../../config/env.js';
import { ApiError } from '../utils/api-error.js';

/**
 * Normalize known framework/database errors into structured ApiError instances.
 * @param {Error & { status?: number, code?: number, keyValue?: object, errors?: object, issues?: Array }} error
 * @returns {ApiError}
 */
const normalizeError = (error) => {
  if (error instanceof ApiError) {
    return error;
  }

  if (error.name === 'ZodError' && Array.isArray(error.issues)) {
    const formattedErrors = error.issues.map((issue) => ({
      field: issue.path.join('.'),
      message: issue.message,
    }));
    return new ApiError(400, 'Validation failed', formattedErrors);
  }

  if (error.name === 'ValidationError' && error.errors) {
    const formattedErrors = Object.values(error.errors).map((valErr) => ({
      field: valErr.path,
      message: valErr.message,
    }));
    return new ApiError(400, 'Database validation failed', formattedErrors);
  }

  if (error.name === 'CastError') {
    return new ApiError(400, `Invalid ${error.path} format`);
  }

  if (error.name === 'TokenExpiredError') {
    return new ApiError(401, 'Session expired. Please log in again.');
  }

  if (error.name === 'JsonWebTokenError') {
    return new ApiError(401, 'Invalid authentication token');
  }

  if (error.code === 11000 && error.keyValue) {
    const duplicateField = Object.keys(error.keyValue)[0];
    return new ApiError(409, `${duplicateField} already exists`);
  }

  if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    return new ApiError(400, 'Invalid JSON request body');
  }

  return new ApiError(500, 'Internal server error');
};

/**
 * Fallback middleware for unmatched routes — forwards a 404 ApiError to errorHandler.
 * @type {import('express').RequestHandler}
 */
export const notFoundHandler = (req, _res, next) => {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
};

/**
 * Global 4-argument Express error-handling middleware.
 * @type {import('express').ErrorRequestHandler}
 */
export const errorHandler = (error, _req, res, _next) => {
  const normalized = normalizeError(error);

  if (normalized.statusCode >= 500) {
    console.error(
      'Unhandled server error:',
      env.NODE_ENV === 'development'
        ? error.stack || error.message
        : error.message
    );
  }

  return res.status(normalized.statusCode).json({
    success: false,
    message: normalized.message,
    errors: normalized.errors,
  });
};
