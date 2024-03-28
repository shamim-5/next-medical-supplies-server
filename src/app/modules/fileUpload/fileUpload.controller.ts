import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FileUploadService } from './fileUpload.service';
// import { FileUploadHelper } from '../../../helpers/fileUploadHelper';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await FileUploadService.getAllFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'FileUploads fetched successfully',
    data: result,
  });
});

// file upload controller
const insertIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  
  try {
    const result = await FileUploadService.insertIntoDB(req);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'FileUpload success',
      data: result,
    });

    // console.log(result);
    // res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

export const FileUploadController = {
  getAllFromDB,
  insertIntoDB,
};
