import express from 'express';
import { MedicalEquipmentController } from './medicalEquipment.controller';

const router = express.Router();

router.get('/', MedicalEquipmentController.getAllFromDB);

export const MedicalEquipmentRoute = router;
