import { Request, Response } from 'express';
import { ConsumableService } from './consumable.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
const result = await ConsumableService.getAllFromDB();

sendResponse(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'consumables fetched successfully',
  data: result,
 });
});

export const ConsumableController = {
  getAllFromDB,
};
