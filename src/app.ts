import express from 'express';
import ProductsRoute from './routes/products.route';
import OrdersRoute from './routes/orders.route';
import LoginRoute from './routes/login.route';

const app = express();

app.use(express.json());
app.use(ProductsRoute);
app.use(OrdersRoute);
app.use(LoginRoute);

export default app;
