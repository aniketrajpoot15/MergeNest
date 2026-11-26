/**
 * Generic Zod validation middleware factory for request body, params, or query.
 * Replaces req[source] with Zod's parsed/trimmed data on success, or forwards ZodError to errorHandler.
 * @param {import('zod').ZodTypeAny} schema - Zod schema to validate against
 * @param {'body'|'params'|'query'} [source='body'] - Request property to validate
 * @returns {import('express').RequestHandler}
 */
export const validate =
  (schema, source = 'body') =>
  (req, _res, next) => {
    const parsed = schema.safeParse(req[source]);

    if (!parsed.success) {
      return next(parsed.error);
    }

    req[source] = parsed.data;
    return next();
  };
