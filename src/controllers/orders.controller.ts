import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function getAll(_req: Request, res: Response): Promise<void> {
  const orders = await ordersService.getAll();
  res.status(200).send(orders);
}

export default {
  getAll,
};