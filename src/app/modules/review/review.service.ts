import { Review } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<Review[]> => {
  const result = await prisma.review.findMany({});

  return result;
};

const getAllReviewByIdFromDB = async (id: string): Promise<Review[]> => {
  const result = await prisma.review.findMany({
    where: {
      OR: [
        { productId: id },
        { reagentId: id },
        { deviceId: id },
        { consumableId: id },
        { equipmentId: id },
      ],
    },
  });

  return result;
};

const getDataById = async (id: string): Promise<Review | null> => {
  const result = await prisma.review.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const insertIntoDB = async (data: Review): Promise<Review> => {
  const result = await prisma.review.create({
    data,
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<Review>,
): Promise<Review> => {
  const result = await prisma.review.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Review> => {
  const result = await prisma.review.delete({
    where: {
      id,
    },
  });

  return result;
};

export const ReviewService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateOneInDB,
  deleteByIdFromDB,
  getAllReviewByIdFromDB,
};
