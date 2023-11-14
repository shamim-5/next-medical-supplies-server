import { Reagent } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<Reagent[]> => {
  const result = await prisma.reagent.findMany({});

  return result;
}

export const ReagentService = {
  getAllFromDB,
};
