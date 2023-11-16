"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumableRoute = void 0;
const express_1 = __importDefault(require("express"));
const consumable_controller_1 = require("./consumable.controller");
const consumable_validation_1 = require("./consumable.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = express_1.default.Router();
router.get('/', consumable_controller_1.ConsumableController.getAllFromDB);
router.get('/:id', consumable_controller_1.ConsumableController.getDataById);
router.post('/', (0, validateRequest_1.default)(consumable_validation_1.ConsumableValidation.create), consumable_controller_1.ConsumableController.insertIntoDB);
router.patch('/:id', consumable_controller_1.ConsumableController.updateOneInDB);
router.delete('/:id', consumable_controller_1.ConsumableController.deleteByIdFromDB);
exports.ConsumableRoute = router;
