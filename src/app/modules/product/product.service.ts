import { Product } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<Product[]> => {
  const result = await prisma.product.findMany({});

  return result;
};

const insertIntoDB = async (data: Product): Promise<Product> => {
  const result = await prisma.product.create({
    data,
  });

  return result;
};

export const ProductService = {
  getAllFromDB,
  insertIntoDB,
};
