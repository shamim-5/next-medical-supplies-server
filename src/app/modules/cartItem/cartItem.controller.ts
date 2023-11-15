import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CartItemService } from './cartItem.service';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CartItemService.getAllFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CartItems fetched successfully',
    data: result,
  });
});

const getAllDataByEmail = catchAsync(async (req: Request, res: Response) => {
  const result = await CartItemService.getAllDataByEmail(req.params.email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CartItems fetched successfully',
    data: result,
  });
});

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CartItemService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CartItems successfully created!',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CartItemService.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CartItems delete successfully',
    data: result,
  });
});

export const CartItemController = {
  getAllFromDB,
  getAllDataByEmail,
  insertIntoDB,
  deleteByIdFromDB,
};
