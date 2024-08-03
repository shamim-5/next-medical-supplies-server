import { TopRatedProduct } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<TopRatedProduct[]> => {
  const result = await prisma.topRatedProduct.findMany({});

  return result;
};

const getDataById = async (id: string): Promise<TopRatedProduct | null> => {
  const result = await prisma.topRatedProduct.findUnique({
    where: {
      id,
    },
    include: {
      reviews: true,
    },
  });

  return result;
};

const insertIntoDB = async (
  data: TopRatedProduct,
): Promise<TopRatedProduct> => {
  const result = await prisma.topRatedProduct.create({
    data,
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<TopRatedProduct>,
): Promise<TopRatedProduct> => {
  const result = await prisma.topRatedProduct.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteByIdFromDB = async (id: string): Promise<TopRatedProduct> => {
  const result = await prisma.topRatedProduct.delete({
    where: {
      id,
    },
  });

  return result;
};

export const TopProductService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateOneInDB,
  deleteByIdFromDB,
};
