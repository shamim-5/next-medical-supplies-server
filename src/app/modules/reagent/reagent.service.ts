import { Prisma, Reagent } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IReagentFilterRequest } from './reagent.interface';
import { reagentSearchAbleFields } from './reagent.constant';


const getAllFromDB = async (
  filters: IReagentFilterRequest,
  options: IPaginationOptions,
): Promise<IGenericResponse<Reagent[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditons = [];

  if (searchTerm) {
    andConditons.push({
      OR: reagentSearchAbleFields.map(field => ({
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

  const whereConditons: Prisma.ReagentWhereInput =
    andConditons.length > 0 ? { AND: andConditons } : {};

  const result = await prisma.reagent.findMany({
    where: whereConditons,
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

  const total = await prisma.reagent.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<Reagent | null> => {
  const result = await prisma.reagent.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const insertIntoDB = async (data: Reagent): Promise<Reagent> => {
  const result = await prisma.reagent.create({
    data,
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<Reagent>,
): Promise<Reagent> => {
  const result = await prisma.reagent.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Reagent> => {
  const result = await prisma.reagent.delete({
    where: {
      id,
    },
  });

  return result;
};


export const ReagentService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateOneInDB,
  deleteByIdFromDB,
};
