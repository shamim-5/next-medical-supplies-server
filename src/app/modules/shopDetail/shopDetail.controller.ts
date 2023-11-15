import { Request, Response } from 'express';
import { ShopDetailService } from './shopDetail.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
const result = await ShopDetailService.getAllFromDB();

sendResponse(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'shopDetails fetched successfully',
  data: result,
 });
});

export const ShopDetailController = {
  getAllFromDB,
};
