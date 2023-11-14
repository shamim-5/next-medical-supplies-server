import express from 'express';
import { ProductRoute } from '../modules/product/product.route';


const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/products',
    route: ProductRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
