"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadRoute = void 0;
const express_1 = __importDefault(require("express"));
const fileUploadHelper_1 = require("../../../helpers/fileUploadHelper");
const fileUpload_controller_1 = require("./fileUpload.controller");
const fileUpload_validation_1 = require("./fileUpload.validation");
const router = express_1.default.Router();
router.get('/', fileUpload_controller_1.FileUploadController.getAllFromDB);
// upload file into cloudinary
router.post('/', fileUploadHelper_1.FileUploadHelper.upload.single('file'), (req, res, next) => {
    req.body = fileUpload_validation_1.FileUploadValidation.create.parse(JSON.parse(req.body.data));
    return fileUpload_controller_1.FileUploadController.insertIntoDB(req, res, next);
});
exports.FileUploadRoute = router;
