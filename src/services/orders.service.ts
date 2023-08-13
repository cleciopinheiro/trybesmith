import { Op } from 'sequelize';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { NewOrder } from '../types/Order';
import UserModel from '../database/models/user.model';
import { Error } from '../types/Error';

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

async function create(userId: number, productIds: number[]): Promise<Error> {
  const user = await UserModel.findOne({ where: { id: userId } });

  if (!user) {
    return { status: 404, data: { message: '"userId" not found' } };
  }

  const newOrder = await OrderModel.create({ userId });

  await ProductModel.update({ orderId: newOrder.dataValues.id }, {
    where: {
      id: {
        [Op.in]: productIds,
      },
    },
  });

  return { status: 201, data: { userId, productIds } };
}

export default {
  getAll,
  create,
};