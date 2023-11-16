"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemRoute = void 0;
const express_1 = __importDefault(require("express"));
const cartItem_controller_1 = require("./cartItem.controller");
const router = express_1.default.Router();
router.get('/', cartItem_controller_1.CartItemController.getAllFromDB);
router.get('/:email', cartItem_controller_1.CartItemController.getAllDataByEmail);
router.post('/', cartItem_controller_1.CartItemController.insertIntoDB);
router.delete('/:id', cartItem_controller_1.CartItemController.deleteByIdFromDB);
exports.CartItemRoute = router;
