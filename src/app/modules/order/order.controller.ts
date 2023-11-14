import { Request, Response } from 'express';
import { OrderService } from './order.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
const result = await OrderService.getAllFromDB();

sendResponse(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'orders fetched successfully',
  data: result,
 });
});

export const OrderController = {
  getAllFromDB,
};
