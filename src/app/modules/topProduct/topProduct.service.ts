import { TopRatedProduct } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<TopRatedProduct[]> => {
  const result = await prisma.topRatedProduct.findMany({});

  return result;
}

export const TopProductService = {
  getAllFromDB,
};
