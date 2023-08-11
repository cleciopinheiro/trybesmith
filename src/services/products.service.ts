import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';

async function create(product: Product): Promise<object> {
  const createdProduct = await ProductModel.create(product);
  return createdProduct;
}

export default {
  create,
};
