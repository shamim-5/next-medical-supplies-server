import { Request, Response } from 'express';
import { ReagentService } from './reagent.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
const result = await ReagentService.getAllFromDB();

sendResponse(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'reagents fetched successfully',
  data: result,
 });
});

export const ReagentController = {
  getAllFromDB,
};
