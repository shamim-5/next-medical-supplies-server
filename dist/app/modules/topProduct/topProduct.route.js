"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const topProduct_controller_1 = require("./topProduct.controller");
const router = express_1.default.Router();
router.get('/', topProduct_controller_1.TopProductController.getAllFromDB);
exports.TopProductRoute = router;
