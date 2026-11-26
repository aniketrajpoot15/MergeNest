import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { env } from './config/env.js';
import authRoutes from './modules/auth/auth.routes.js';
import {
  errorHandler,
  notFoundHandler,
} from './shared/middleware/error-handler.js';
import { ApiResponse } from './shared/utils/api-response.js';
import { asyncHandler } from './shared/utils/async-handler.js';

const JSON_BODY_LIMIT = '16kb';

const app = express();

// Set security-related HTTP response headers early in the pipeline
app.use(helmet());

// Enable cross-origin requests with httpOnly cookie credentials from the React client
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

// Parse incoming JSON and URL-encoded request bodies with size caps
app.use(express.json({ limit: JSON_BODY_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: JSON_BODY_LIMIT }));

// Parse cookies so authentication middleware can read httpOnly JWT cookies
app.use(cookieParser(env.COOKIE_SECRET || undefined));

// Health check route
app.get(
  '/api/v1/health',
  asyncHandler(async (_req, res) => {
    return new ApiResponse(
      200,
      { status: 'ok', environment: env.NODE_ENV },
      'MergeNest API running'
    ).send(res);
  })
);

// Feature module routes
app.use('/api/v1/auth', authRoutes);

// Handle unmatched routes and forward errors to the global error handler
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
