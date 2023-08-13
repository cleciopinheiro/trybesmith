const OrdersMock = [
  {
    id: 1,
    userId: 1,
    productIds: [
      {
        id: 1,
        name: 'Asa de frango',
        price: '50 pratas',
        orderId: 1
      }
    ]
  },
  {
    id: 2,
    userId: 2,
    productIds: [
      {
        id: 2,
        name: 'Coxinha',
        price: '90 pratas',
        orderId: 2
      }
    ]
  }
];

const buildOrderMock = {
  id: 1,
  userId: 1
};

const createOrderMock = {
  userId: 1,
  productIds: [1]
};

export {
  OrdersMock,
  buildOrderMock,
  createOrderMock
}