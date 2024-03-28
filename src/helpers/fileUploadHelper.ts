import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import multer from 'multer';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// store file in uploads folder using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// uploading an asset to cloudinary
const uploadToCloudinary = async (
  file: IUploadFile,
): Promise<ICloudinaryResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file.path,
      (error: Error, result: ICloudinaryResponse) => {
        fs.unlinkSync(file.path);

        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      },
    );
  });
};

export const FileUploadHelper = {
  uploadToCloudinary,
  upload,
};
