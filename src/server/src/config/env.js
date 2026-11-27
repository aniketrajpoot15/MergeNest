import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { z } from 'zod';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serverEnvPath = path.resolve(__dirname, '../../.env');
const rootEnvPath = path.resolve(__dirname, '../../../../.env');
const resolvedEnvPath = fs.existsSync(serverEnvPath)
  ? serverEnvPath
  : rootEnvPath;

dotenv.config({ path: resolvedEnvPath });

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  PORT: z.coerce.number().int().positive().default(5000),
  MONGODB_URI: z
    .string({ required_error: 'MONGODB_URI is required' })
    .trim()
    .min(1, 'MONGODB_URI cannot be empty')
    .refine(
      (uri) => uri.startsWith('mongodb://') || uri.startsWith('mongodb+srv://'),
      'MONGODB_URI must start with mongodb:// or mongodb+srv://'
    ),
  CLIENT_URL: z
    .string()
    .url('CLIENT_URL must be a valid URL')
    .default('http://localhost:5173'),
  JWT_SECRET: z
    .string({ required_error: 'JWT_SECRET is required' })
    .trim()
    .min(32, 'JWT_SECRET must be at least 32 characters')
    .refine(
      (secret) => !secret.includes('your_jwt_secret_key'),
      'JWT_SECRET must be replaced with a real random secret'
    ),
  JWT_EXPIRES_IN: z.string().trim().min(1).default('7d'),
  COOKIE_SECRET: z.string().optional(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  const fieldErrors = parsedEnv.error.flatten().fieldErrors;
  console.error('❌ Invalid or missing environment variables:');
  for (const [key, messages] of Object.entries(fieldErrors)) {
    console.error(`  - ${key}: ${(messages || []).join(', ')}`);
  }
  console.error(
    'Please copy .env.example to src/server/.env and fill in the required values.'
  );
  process.exit(1);
}

/**
 * Validated and frozen runtime configuration loaded at startup.
 */
export const env = Object.freeze(parsedEnv.data);
