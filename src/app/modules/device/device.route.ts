import express from 'express';
import { DeviceController } from './device.controller';
import { DeviceValidation } from './device.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/', DeviceController.getAllFromDB);
router.get('/:id', DeviceController.getDataById);

router.post(
  '/',
  validateRequest(DeviceValidation.create),
  DeviceController.insertIntoDB,
);
router.patch('/:id', DeviceController.updateOneInDB);
router.delete('/:id', DeviceController.deleteByIdFromDB);

export const DeviceRoute = router;
