import express from 'express';
import ProductsRoute from './routes/products.route';
import OrdersRoute from './routes/orders.route';

const app = express();

app.use(express.json());
app.use(ProductsRoute);
app.use(OrdersRoute);

export default app;
