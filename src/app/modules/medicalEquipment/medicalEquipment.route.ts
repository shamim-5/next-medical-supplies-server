import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { MedicalEquipmentController } from './medicalEquipment.controller';
import { MedicalEquipmentValidation } from './medicalEquipment.validation';

const router = express.Router();

router.get('/', MedicalEquipmentController.getAllFromDB);
router.get('/:id', MedicalEquipmentController.getDataById);

router.post(
  '/',
  validateRequest(MedicalEquipmentValidation.create),
  MedicalEquipmentController.insertIntoDB,
);
router.patch('/:id', MedicalEquipmentController.updateOneInDB);
router.delete('/:id', MedicalEquipmentController.deleteByIdFromDB);

export const MedicalEquipmentRoute = router;
