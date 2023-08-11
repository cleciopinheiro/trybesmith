import express from 'express';
import ProductsRoute from './routes/products.route';

const app = express();

app.use(express.json());
app.use(ProductsRoute);

export default app;
