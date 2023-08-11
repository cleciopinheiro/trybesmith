import express from 'express';
import loginController from '../controllers/login.controller';
import verifyUser from '../middlewares/login.middleware';

const router = express.Router();

router.post('/login', verifyUser, loginController.login);

export default router;