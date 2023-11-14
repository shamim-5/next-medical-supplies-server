import { Request, Response } from 'express';
import { TopProductService } from './topProduct.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
const result = await TopProductService.getAllFromDB();

sendResponse(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'topProducts fetched successfully',
  data: result,
 });
});

export const TopProductController = {
  getAllFromDB,
};
