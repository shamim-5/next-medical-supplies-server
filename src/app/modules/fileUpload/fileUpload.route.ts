import express, { NextFunction, Request, Response } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { FileUploadController } from './fileUpload.controller';
import { FileUploadValidation } from './fileUpload.validation';

const router = express.Router();

router.get('/', FileUploadController.getAllFromDB);

// upload file into cloudinary
router.post(
  '/',
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = FileUploadValidation.create.parse(JSON.parse(req.body.data));

    return FileUploadController.insertIntoDB(req, res, next);
  },
);

export const FileUploadRoute = router;
