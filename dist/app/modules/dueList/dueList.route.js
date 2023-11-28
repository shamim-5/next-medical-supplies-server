"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DueListRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const dueList_controller_1 = require("./dueList.controller");
const dueList_validation_1 = require("./dueList.validation");
const router = express_1.default.Router();
router.get('/', dueList_controller_1.DueListController.getAllFromDB);
router.get('/:email', dueList_controller_1.DueListController.getAllDataByEmail);
router.post('/', (0, validateRequest_1.default)(dueList_validation_1.DueListValidation.create), dueList_controller_1.DueListController.insertIntoDB);
router.patch('/:id', dueList_controller_1.DueListController.updateOneInDB);
exports.DueListRoute = router;
