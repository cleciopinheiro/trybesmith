export type Order = {
  id?: number;
  userId: number;
  productId?: number;
  productIds?: { id: number }[];
};

export type NewOrder = {
  id?: number;
  userId: number;
  productIds?: number[];
};