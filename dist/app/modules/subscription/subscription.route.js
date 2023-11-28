"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const subscription_controller_1 = require("./subscription.controller");
const subscription_validation_1 = require("./subscription.validation");
const router = express_1.default.Router();
router.get('/', subscription_controller_1.SubscriptionController.getAllFromDB);
router.post('/', (0, validateRequest_1.default)(subscription_validation_1.SubscriptionValidation.create), subscription_controller_1.SubscriptionController.insertIntoDB);
exports.SubscriptionRoute = router;
