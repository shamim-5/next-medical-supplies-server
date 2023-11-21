import { Consumable, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { consumableSearchAbleFields } from './consumable.constant';
import { IConsumableFilterRequest } from './consumable.interface';

const getAllFromDB = async (
  filters: IConsumableFilterRequest,
  options: IPaginationOptions,
): Promise<IGenericResponse<Consumable[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditons = [];

  if (searchTerm) {
    andConditons.push({
      OR: consumableSearchAbleFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditons.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereConditons: Prisma.ConsumableWhereInput =
    andConditons.length > 0 ? { AND: andConditons } : {};

  const result = await prisma.consumable.findMany({
    where: whereConditons,
    include: {
      reviews: true,
    },
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            // createdAt: 'desc',
          },
  });

  const total = await prisma.consumable.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<Consumable | null> => {
  const result = await prisma.consumable.findUnique({
    where: {
      id,
    },
    include: {
      reviews: true,
    },
  });

  return result;
};

const insertIntoDB = async (data: Consumable): Promise<Consumable> => {
  const result = await prisma.consumable.create({
    data,
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<Consumable>,
): Promise<Consumable> => {
  const result = await prisma.consumable.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Consumable> => {
  const result = await prisma.consumable.delete({
    where: {
      id,
    },
  });

  return result;
};

export const ConsumableService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateOneInDB,
  deleteByIdFromDB,
};
