"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("../modules/product/product.route");
const topProduct_route_1 = require("../modules/topProduct/topProduct.route");
const reagent_route_1 = require("../modules/reagent/reagent.route");
const consumable_route_1 = require("../modules/consumable/consumable.route");
const medicalEquipment_route_1 = require("../modules/medicalEquipment/medicalEquipment.route");
const cartItem_route_1 = require("../modules/cartItem/cartItem.route");
const order_route_1 = require("../modules/order/order.route");
const shopDetail_route_1 = require("../modules/shopDetail/shopDetail.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/shop-details',
        route: shopDetail_route_1.ShopDetailRoute,
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
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;