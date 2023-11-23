import { Subscription } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { SubscriptionService } from './subscription.service';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await SubscriptionService.getAllFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Subscriptions fetched successfully',
    data: result,
  });
});

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await SubscriptionService.insertIntoDB(req.body);

  sendResponse<Subscription>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Subscriptions inserted successfully',
    data: result,
  });
});

export const SubscriptionController = {
  getAllFromDB,
  insertIntoDB,
};
