import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/', UserController.createUser);
router.put('/sync', UserController.syncUser);

export const UserRoutes = router;
