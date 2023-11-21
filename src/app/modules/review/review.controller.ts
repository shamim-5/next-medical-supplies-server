import { Review } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReviewService } from './review.service';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.getAllFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews fetched successfully',
    data: result,
  });
});

const getAllReviewByIdFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ReviewService.getAllReviewByIdFromDB(req.params.id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Reviews fetched successfully',
      data: result,
    });
  },
);

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.getDataById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review fetched successfully',
    data: result,
  });
});

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.insertIntoDB(req.body);

  sendResponse<Review>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review successfully created!',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReviewService.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review updated successfully',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReviewService.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review delete successfully',
    data: result,
  });
});

export const ReviewController = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateOneInDB,
  deleteByIdFromDB,
  getAllReviewByIdFromDB,
};
