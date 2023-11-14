import { Consumable } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<Consumable[]> => {
  const result = await prisma.consumable.findMany({});

  return result;
}

export const ConsumableService = {
  getAllFromDB,
};
