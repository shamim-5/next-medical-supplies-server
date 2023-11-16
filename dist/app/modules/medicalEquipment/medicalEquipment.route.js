"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalEquipmentRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const medicalEquipment_controller_1 = require("./medicalEquipment.controller");
const medicalEquipment_validation_1 = require("./medicalEquipment.validation");
const router = express_1.default.Router();
router.get('/', medicalEquipment_controller_1.MedicalEquipmentController.getAllFromDB);
router.get('/:id', medicalEquipment_controller_1.MedicalEquipmentController.getDataById);
router.post('/', (0, validateRequest_1.default)(medicalEquipment_validation_1.MedicalEquipmentValidation.create), medicalEquipment_controller_1.MedicalEquipmentController.insertIntoDB);
router.patch('/:id', medicalEquipment_controller_1.MedicalEquipmentController.updateOneInDB);
router.delete('/:id', medicalEquipment_controller_1.MedicalEquipmentController.deleteByIdFromDB);
exports.MedicalEquipmentRoute = router;
