import express from 'express';
import { CartItemRoute } from '../modules/cartItem/cartItem.route';
import { ConsumableRoute } from '../modules/consumable/consumable.route';
import { DeviceRoute } from '../modules/device/device.route';
import { DueListRoute } from '../modules/dueList/dueList.route';
import { FileUploadRoute } from '../modules/fileUpload/fileUpload.route';
import { HomeRoute } from '../modules/home/home.route';
import { MedicalEquipmentRoute } from '../modules/medicalEquipment/medicalEquipment.route';
import { OrderRoute } from '../modules/order/order.route';
import { ProductRoute } from '../modules/product/product.route';
import { ReagentRoute } from '../modules/reagent/reagent.route';
import { ReviewRoute } from '../modules/review/review.route';
import { SecureURL } from '../modules/secure_url/fileUpload.route';
import { ShopDetailRoute } from '../modules/shopDetail/shopDetail.route';
import { SubscriptionRoute } from '../modules/subscription/subscription.route';
import { TopProductRoute } from '../modules/topProduct/topProduct.route';
import { UserDetailRoute } from '../modules/userDetail/userDetail.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/shop-details',
    route: ShopDetailRoute,
  },
  {
    path: '/user-details',
    route: UserDetailRoute,
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
    path: '/devices',
    route: DeviceRoute,
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
  {
    path: '/due-list',
    route: DueListRoute,
  },
  {
    path: '/reviews',
    route: ReviewRoute,
  },
  {
    path: '/subscriptions',
    route: SubscriptionRoute,
  },
  {
    path: '/file-uploads',
    route: FileUploadRoute,
  },
  {
    path: '/secure-url',
    route: SecureURL,
  },
  {
    path: '/',
    route: HomeRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
