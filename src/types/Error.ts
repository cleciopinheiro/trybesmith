export type Error = {
  status: number;
  data: { userId: number, productIds: number[] } | { message: string };
};