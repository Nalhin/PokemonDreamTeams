import * as express from 'express';
import { registerUser } from './user.controller';

const router = express.Router();

router.post('/user/register', registerUser);
// router.post('/user/login', loginUser);

export default router;
