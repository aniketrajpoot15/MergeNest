import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { env } from './config/env.js';

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

export default app;
