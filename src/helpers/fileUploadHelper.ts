import {
  v2 as cloudinary,
  UploadApiErrorResponse,
  UploadApiResponse,
} from 'cloudinary';
// import * as fs from 'fs';
import multer from 'multer';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// option-1: store file in uploads folder using multer disk storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// option-2: store file in multer memory storage
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

// option-1: uploading an asset to cloudinary for disk storage
// const uploadToCloudinary = async (
//   file: IUploadFile,
// ): Promise<ICloudinaryResponse | undefined> => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(
//       file.path,
//       (error: Error, result: ICloudinaryResponse) => {
//         fs.unlinkSync(file.path);

//         if (error) {
//           reject(error);
//         } else {
//           resolve(result);
//         }
//       },
//     );
//   });
// };

// option-2: uploading an asset to cloudinary for memory storage  
const uploadToCloudinary = async (
  file: IUploadFile,
): Promise<ICloudinaryResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { resource_type: 'raw' }, // Adjust as needed for the file type
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
      .end(file.buffer); // Use the buffer instead of file.path
  });
};


export const FileUploadHelper = {
  uploadToCloudinary,
  upload,
};
