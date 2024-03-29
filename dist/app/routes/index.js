"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartItem_route_1 = require("../modules/cartItem/cartItem.route");
const consumable_route_1 = require("../modules/consumable/consumable.route");
const device_route_1 = require("../modules/device/device.route");
const dueList_route_1 = require("../modules/dueList/dueList.route");
const fileUpload_route_1 = require("../modules/fileUpload/fileUpload.route");
const medicalEquipment_route_1 = require("../modules/medicalEquipment/medicalEquipment.route");
const order_route_1 = require("../modules/order/order.route");
const product_route_1 = require("../modules/product/product.route");
const reagent_route_1 = require("../modules/reagent/reagent.route");
const review_route_1 = require("../modules/review/review.route");
const shopDetail_route_1 = require("../modules/shopDetail/shopDetail.route");
const subscription_route_1 = require("../modules/subscription/subscription.route");
const topProduct_route_1 = require("../modules/topProduct/topProduct.route");
const userDetail_route_1 = require("../modules/userDetail/userDetail.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/shop-details',
        route: shopDetail_route_1.ShopDetailRoute,
    },
    {
        path: '/user-details',
        route: userDetail_route_1.UserDetailRoute,
    },
    {
        path: '/top-products',
        route: topProduct_route_1.TopProductRoute,
    },
    {
        path: '/products',
        route: product_route_1.ProductRoute,
    },
    {
        path: '/reagents',
        route: reagent_route_1.ReagentRoute,
    },
    {
        path: '/devices',
        route: device_route_1.DeviceRoute,
    },
    {
        path: '/consumables',
        route: consumable_route_1.ConsumableRoute,
    },
    {
        path: '/medical-equipments',
        route: medicalEquipment_route_1.MedicalEquipmentRoute,
    },
    {
        path: '/cart-items',
        route: cartItem_route_1.CartItemRoute,
    },
    {
        path: '/orders',
        route: order_route_1.OrderRoute,
    },
    {
        path: '/due-list',
        route: dueList_route_1.DueListRoute,
    },
    {
        path: '/reviews',
        route: review_route_1.ReviewRoute,
    },
    {
        path: '/subscriptions',
        route: subscription_route_1.SubscriptionRoute,
    },
    {
        path: '/file-uploads',
        route: fileUpload_route_1.FileUploadRoute,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
