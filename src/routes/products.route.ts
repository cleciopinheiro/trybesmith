import express from 'express';
import productsController from '../controllers/products.controller';
import { verifyName, verifyPrice } from '../middlewares/products.middleware';

const router = express.Router();

router.post('/products', verifyName, verifyPrice, productsController.create);
router.get('/products', productsController.getAll);

export default router;