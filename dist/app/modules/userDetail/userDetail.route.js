"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetailRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const userDetail_controller_1 = require("./userDetail.controller");
const userDetail_validation_1 = require("./userDetail.validation");
const router = express_1.default.Router();
router.get('/', userDetail_controller_1.UserDetailController.getAllFromDB);
router.get('/:email', userDetail_controller_1.UserDetailController.getAllDataByEmail);
router.post('/', (0, validateRequest_1.default)(userDetail_validation_1.UserDetailValidation.create), userDetail_controller_1.UserDetailController.insertIntoDB);
router.patch('/:id', userDetail_controller_1.UserDetailController.updateOneInDB);
router.delete('/:id', userDetail_controller_1.UserDetailController.deleteByIdFromDB);
exports.UserDetailRoute = router;
