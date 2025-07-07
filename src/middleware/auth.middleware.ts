// src/middleware/auth.middleware.ts
import { config } from '@config/env';
import { auth } from 'express-oauth2-jwt-bearer';

export const authMiddleware = auth({
  audience: config.AUTH0.AUDIENCE,
  issuerBaseURL: config.AUTH0.ISSUER,
  tokenSigningAlg: 'RS256',
});
