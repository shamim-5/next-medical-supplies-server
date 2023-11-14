import { MedicalEquipment } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<MedicalEquipment[]> => {
  const result = await prisma.medicalEquipment.findMany({});

  return result;
}

export const MedicalEquipmentService = {
  getAllFromDB,
};
