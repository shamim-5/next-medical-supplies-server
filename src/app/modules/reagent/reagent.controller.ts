import { Reagent } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { reagentFilterableFields } from './reagent.constant';
import { ReagentService } from './reagent.service';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, reagentFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await ReagentService.getAllFromDB(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    meta: result.meta,
    message: 'Reagents fetched successfully',
    data: result.data,
  });
});

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await ReagentService.getDataById(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reagent fetched successfully',
    data: result,
  });
});

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ReagentService.insertIntoDB(req.body);

  sendResponse<Reagent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester successfully created!',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReagentService.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semster updated successfully',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReagentService.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semster delete successfully',
    data: result,
  });
});

export const ReagentController = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateOneInDB,
  deleteByIdFromDB,
};
