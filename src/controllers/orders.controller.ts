import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function getAll(_req: Request, res: Response): Promise<void> {
  const orders = await ordersService.getAll();
  res.status(200).send(orders);
}

async function create(req: Request, res: Response): Promise<Response> {
  const { userId, productIds } = req.body;
  const { status, data } = await ordersService.create(userId, productIds);
  return res.status(status).send(data);
}

export default {
  getAll,
  create,
};