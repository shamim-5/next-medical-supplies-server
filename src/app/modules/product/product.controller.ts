import { Request, Response } from 'express';
import { ProductService } from './product.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { Product } from '@prisma/client';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
const result = await ProductService.getAllFromDB();

sendResponse(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'products fetched successfully',
  data: result,
 });
});

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.insertIntoDB(req.body);

  sendResponse<Product>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester successfully created!',
    data: result,
  });
});

export const ProductController = {
  getAllFromDB,
  insertIntoDB
};
