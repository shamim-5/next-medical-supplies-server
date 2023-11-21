"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRoute = void 0;
const express_1 = __importDefault(require("express"));
const review_controller_1 = require("./review.controller");
const router = express_1.default.Router();
router.get('/', review_controller_1.ReviewController.getAllFromDB);
router.get('/filter/:id', review_controller_1.ReviewController.getAllReviewByIdFromDB);
router.get('/:id', review_controller_1.ReviewController.getDataById);
router.post('/', review_controller_1.ReviewController.insertIntoDB);
router.patch('/:id', review_controller_1.ReviewController.updateOneInDB);
router.delete('/:id', review_controller_1.ReviewController.deleteByIdFromDB);
exports.ReviewRoute = router;
