"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const router = express_1.default.Router();
router.get('/', product_controller_1.ProductController.getAllFromDB);
router.get('/:id', product_controller_1.ProductController.getDataById);
router.post('/', (0, validateRequest_1.default)(product_validation_1.ProductValidation.create), product_controller_1.ProductController.insertIntoDB);
router.patch('/:id', product_controller_1.ProductController.updateOneInDB);
router.delete('/:id', product_controller_1.ProductController.deleteByIdFromDB);
exports.ProductRoute = router;
