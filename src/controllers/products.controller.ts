import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function create(req: Request, res: Response): Promise<void> {
  const product = req.body;
  const createdProduct = await productsService.create(product);
  res.status(201).send(createdProduct);
}  

async function getAll(req: Request, res: Response): Promise<void> {
  const products = await productsService.getAll();
  res.status(200).send(products);
}

export default {
  create,
  getAll,
};