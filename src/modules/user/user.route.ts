import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/', UserController.createUser);
router.post('/sync', UserController.syncUser);

export const UserRoutes = router;
