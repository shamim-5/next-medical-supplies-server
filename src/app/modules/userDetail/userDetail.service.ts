import { UserDetail } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<UserDetail[]> => {
  const result = await prisma.userDetail.findMany({});

  return result;
};

const getAllDataByEmail = async (
  email: string,
): Promise<UserDetail[] | null> => {
  const result = await prisma.userDetail.findMany({
    where: {
      email,
    },
    include: {
      fileUploads: true,
    }
  });

  return result;
};

const insertIntoDB = async (data: UserDetail): Promise<UserDetail> => {
  const result = await prisma.userDetail.create({
    data,
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<UserDetail>,
): Promise<UserDetail> => {
  const result = await prisma.userDetail.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteByIdFromDB = async (id: string): Promise<UserDetail> => {
  const result = await prisma.userDetail.delete({
    where: {
      id,
    },
  });

  return result;
};

export const UserDetailService = {
  getAllFromDB,
  getAllDataByEmail,
  insertIntoDB,
  updateOneInDB,
  deleteByIdFromDB,
};
