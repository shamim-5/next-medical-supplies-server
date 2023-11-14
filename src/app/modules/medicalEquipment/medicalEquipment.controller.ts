import { Request, Response } from 'express';
import { MedicalEquipmentService } from './medicalEquipment.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
const result = await MedicalEquipmentService.getAllFromDB();

sendResponse(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: 'medicalEquipments fetched successfully',
  data: result,
 });
});

export const MedicalEquipmentController = {
  getAllFromDB,
};
