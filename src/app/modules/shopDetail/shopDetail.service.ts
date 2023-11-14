import { ShopDetail } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<ShopDetail[]> => {
  const result = await prisma.shopDetail.findMany({});

  return result;
}

export const ShopDetailService = {
  getAllFromDB,
};
