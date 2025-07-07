// src/middleware/auth.middleware.ts
import { auth } from 'express-oauth2-jwt-bearer';

export const authMiddleware = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER,
  tokenSigningAlg: 'RS256',
});
