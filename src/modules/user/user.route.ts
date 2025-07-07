import express from 'express';
import { UserController } from './user.controller';
import { authMiddleware } from '../../middleware/auth.middleware';

const router = express.Router();

router.post('/', UserController.createUser);
router.put('/sync', authMiddleware, UserController.syncUser);

export const UserRoutes = router;
