import express from 'express';
import ordersController from '../controllers/orders.controller';
import verifyToken from '../middlewares/token.middleware';
import { verifyUserId, verifyProductsIds } from '../middlewares/orders.middleware';

const router = express.Router();

router.get('/orders', ordersController.getAll);
router.post('/orders', verifyToken, verifyUserId, verifyProductsIds, ordersController.create);

export default router;