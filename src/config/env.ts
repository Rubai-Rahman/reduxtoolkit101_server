import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const envVarsSchema = z.object({
  NODE_ENV: z.enum(['production', 'development', 'test']),
  PORT: z.coerce.number().default(5000),
  MONGO_URI: z.string(),
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info'),
  CORS_ORIGIN: z.string().default('*'),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(15 * 60 * 1000), // 15 minutes
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().default(100),
  AUTH0_ISSUER: z.string(),
  AUTH0_AUDIENCE: z.string(),
});

const envVars = envVarsSchema.parse(process.env);

export const config = {
  NODE_ENV: envVars.NODE_ENV,
  PORT: envVars.PORT,
  MONGO_URI: envVars.MONGO_URI,
  LOG_LEVEL: envVars.LOG_LEVEL,
  CORS_ORIGIN: envVars.CORS_ORIGIN,
  RATE_LIMIT_WINDOW_MS: envVars.RATE_LIMIT_WINDOW_MS,
  RATE_LIMIT_MAX_REQUESTS: envVars.RATE_LIMIT_MAX_REQUESTS,
  AUTH0: {
    ISSUER: envVars.AUTH0_ISSUER,
    AUDIENCE: envVars.AUTH0_AUDIENCE,
  },
};
