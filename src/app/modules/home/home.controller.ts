
import { Request, Response } from 'express';
import { HomeService } from './home.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
const result = await HomeService.getAllFromDB();

sendResponse(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'Home Route fetched successfully',
  data: result,
 });
});

export const HomeController = {
  getAllFromDB,
};
