import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { NewOrder } from '../types/Order';

async function getAll(): Promise<Array<NewOrder>> {
  const orders = await OrderModel.findAll({
    include: [
      { model: ProductModel,
        as: 'productIds',
        attributes: { exclude: ['price', 'name', 'orderId'] },
      }],
  });

  const newObject = orders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((product) => product.id),
  }));
  
  return newObject;
}

export default {
  getAll,
};