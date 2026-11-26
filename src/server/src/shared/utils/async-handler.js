/**
 * Wraps an async Express route handler and forwards rejected promises to next(error).
 * Eliminates repetitive try/catch blocks in controllers.
 * @param {Function} requestHandler
 * @returns {import('express').RequestHandler}
 */
export const asyncHandler = (requestHandler) => (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).catch(next);
};
