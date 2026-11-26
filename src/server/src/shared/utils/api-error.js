/**
 * Custom operational error class with HTTP status code and structured error details.
 */
export class ApiError extends Error {
  /**
   * @param {number} statusCode - HTTP status code (e.g. 400, 401, 404, 409)
   * @param {string} [message='Something went wrong'] - Human-readable error summary
   * @param {Array<object|string>} [errors=[]] - Field-level or validation error details
   * @param {string} [stack=''] - Optional custom stack trace
   */
  constructor(
    statusCode,
    message = 'Something went wrong',
    errors = [],
    stack = ''
  ) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.errors = errors;
    this.isOperational = true;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
