import { FileUpload } from '@prisma/client';
import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { IUploadFile } from '../../../interfaces/file';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<FileUpload[]> => {
  const result = await prisma.fileUpload.findMany({});

  return result;
};

// file upload service
const insertIntoDB = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  // image upload done. use secure_url as body imageUrl value
  if (uploadedImage) {
    req.body.photoURL = uploadedImage.secure_url;
  }

  const result = await prisma.fileUpload.create({
    data: req.body,
  });

  return result;
};

export const FileUploadService = {
  getAllFromDB,
  insertIntoDB,
};
