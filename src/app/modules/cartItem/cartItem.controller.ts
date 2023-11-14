import { Request, Response } from 'express';
import { CartItemService } from './cartItem.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
const result = await CartItemService.getAllFromDB();

sendResponse(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'cartItems fetched successfully',
  data: result,
 });
});

export const CartItemController = {
  getAllFromDB,
};
