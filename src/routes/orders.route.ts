import express from 'express';
import ordersController from '../controllers/orders.controller';

const router = express.Router();

router.get('/orders', ordersController.getAll);

export default router;