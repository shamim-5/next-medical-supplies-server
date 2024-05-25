import {
  v2 as cloudinary,
  UploadApiErrorResponse,
  UploadApiResponse,
} from 'cloudinary';
import multer from 'multer';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// store file in uploads folder using multer
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

// uploading an asset to cloudinary
const uploadToCloudinary = async (
  file: IUploadFile,
): Promise<ICloudinaryResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { resource_type: 'raw' },
        (
          error: UploadApiErrorResponse | undefined,
          result: UploadApiResponse | undefined,
        ) => {
          if (error) {
            reject(error);
          } else {
            resolve(result as unknown as ICloudinaryResponse);
          }
        },
      )
      .end(file.buffer);
  });
};

export const FileUploadHelper = {
  uploadToCloudinary,
  upload,
};
