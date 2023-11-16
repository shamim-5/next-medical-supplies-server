"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoute = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.get('/', order_controller_1.OrderController.getAllFromDB);
router.get('/:email', order_controller_1.OrderController.getAllDataByEmail);
router.post('/', order_controller_1.OrderController.insertIntoDB);
router.patch('/:id', order_controller_1.OrderController.updateOneInDB);
exports.OrderRoute = router;
