import { Home } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<Home[]> => {
  const result = await prisma.home.findMany({});

  return result;
}

export const HomeService = {
  getAllFromDB,
};
