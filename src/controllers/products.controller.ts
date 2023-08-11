import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function create(req: Request, res: Response): Promise<void> {
  const product = req.body;
  const createdProduct = await productsService.create(product);
  res.status(201).send(createdProduct);
}  

export default {
  create,
};