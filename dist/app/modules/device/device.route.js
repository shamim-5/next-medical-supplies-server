"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceRoute = void 0;
const express_1 = __importDefault(require("express"));
const device_controller_1 = require("./device.controller");
const device_validation_1 = require("./device.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = express_1.default.Router();
router.get('/', device_controller_1.DeviceController.getAllFromDB);
router.get('/:id', device_controller_1.DeviceController.getDataById);
router.post('/', (0, validateRequest_1.default)(device_validation_1.DeviceValidation.create), device_controller_1.DeviceController.insertIntoDB);
router.patch('/:id', device_controller_1.DeviceController.updateOneInDB);
router.delete('/:id', device_controller_1.DeviceController.deleteByIdFromDB);
exports.DeviceRoute = router;
