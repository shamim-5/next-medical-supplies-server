import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { IUploadFile } from '../../../interfaces/file';

// file upload service
const insertIntoDB = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

  // image upload done. use secure_url as body imageUrl value
  if (uploadedImage) {
    req.body.photoURL = uploadedImage.secure_url;
  }

  const result = req.body.photoURL;

  return result;
};

export const FileUploadService = {
  insertIntoDB,
};
