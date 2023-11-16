"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReagentRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const reagent_controller_1 = require("./reagent.controller");
const reagent_validation_1 = require("./reagent.validation");
const router = express_1.default.Router();
router.get('/', reagent_controller_1.ReagentController.getAllFromDB);
router.get('/:id', reagent_controller_1.ReagentController.getDataById);
router.post('/', (0, validateRequest_1.default)(reagent_validation_1.ReagentValidation.create), reagent_controller_1.ReagentController.insertIntoDB);
router.patch('/:id', reagent_controller_1.ReagentController.updateOneInDB);
router.delete('/:id', reagent_controller_1.ReagentController.deleteByIdFromDB);
exports.ReagentRoute = router;
