import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserDetailService } from './userDetail.service';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserDetailService.getAllFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'UserDetails fetched successfully',
    data: result,
  });
});

const getAllDataByEmail = catchAsync(async (req: Request, res: Response) => {
  const result = await UserDetailService.getAllDataByEmail(req.params.email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Detail fetched successfully',
    data: result,
  });
});

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserDetailService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Detail successfully created',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserDetailService.updateOneInDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Detail successfully updated',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserDetailService.deleteByIdFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Detail successfully deleted',
    data: result,
  });
});

export const UserDetailController = {
  getAllFromDB,
  getAllDataByEmail,
  insertIntoDB,
  updateOneInDB,
  deleteByIdFromDB,
};
