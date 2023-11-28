import { DueList } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<DueList[]> => {
  const result = await prisma.dueList.findMany({});

  return result;
};

const getAllDataByEmail = async (email: string): Promise<DueList[] | null> => {
  const result = await prisma.dueList.findMany({
    where: {
      email,
    },
  });

  return result;
};

const insertIntoDB = async (data: DueList): Promise<DueList> => {
  const result = await prisma.dueList.create({
    data,
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<DueList>,
): Promise<DueList> => {
  const result = await prisma.dueList.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

export const DueListService = {
  getAllFromDB,
  getAllDataByEmail,
  insertIntoDB,
  updateOneInDB,
};
