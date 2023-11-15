import express from 'express';
import { ProductRoute } from '../modules/product/product.route';
import { TopProductRoute } from '../modules/topProduct/topProduct.route';
import { ReagentRoute } from '../modules/reagent/reagent.route';
import { ConsumableRoute } from '../modules/consumable/consumable.route';
import { MedicalEquipmentRoute } from '../modules/medicalEquipment/medicalEquipment.route';
import { CartItemRoute } from '../modules/cartItem/cartItem.route';
import { OrderRoute } from '../modules/order/order.route';
import { ShopDetailRoute } from '../modules/shopDetail/shopDetail.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/shop-details',
    route: ShopDetailRoute,
  },
  {
    path: '/top-products',
    route: TopProductRoute,
  },
  {
    path: '/products',
    route: ProductRoute,
  },
  {
    path: '/reagents',
    route: ReagentRoute,
  },
  {
    path: '/consumables',
    route: ConsumableRoute,
  },
  {
    path: '/medical-equipments',
    route: MedicalEquipmentRoute,
  },
  {
    path: '/cart-items',
    route: CartItemRoute,
  },
  {
    path: '/orders',
    route: OrderRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
