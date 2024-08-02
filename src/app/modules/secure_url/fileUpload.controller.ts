import { NextFunction, Request, Response } from 'express';
import { FileUploadService } from './fileUpload.service';

// file upload controller
const insertIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await FileUploadService.insertIntoDB(req);

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const FileUploadController = {
  insertIntoDB,
};
