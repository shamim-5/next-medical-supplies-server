import { Request, Response } from 'express';
import { DueListService } from './dueList.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
const result = await DueListService.getAllFromDB();

sendResponse(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'DueList fetched successfully',
  data: result,
 });
});


const getAllDataByEmail = catchAsync(async (req: Request, res: Response) => {
  const result = await DueListService.getAllDataByEmail(req.params.email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'DueList fetched successfully',
    data: result,
  });
});

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await DueListService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'DueList successfully created!',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DueListService.updateOneInDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'DueList updated successfully',
    data: result,
  });
});

export const DueListController = {
  getAllFromDB,
  getAllDataByEmail,
  insertIntoDB,
  updateOneInDB,
};
