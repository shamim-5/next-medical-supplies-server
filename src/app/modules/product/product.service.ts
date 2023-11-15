import { Prisma, Product } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { productSearchAbleFields } from './product.constant';
import { IProductFilterRequest } from './product.interface';

const getAllFromDB = async (
  filters: IProductFilterRequest,
  options: IPaginationOptions,
): Promise<IGenericResponse<Product[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditons = [];

  if (searchTerm) {
    andConditons.push({
      OR: productSearchAbleFields.map(field => ({
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

  const whereConditons: Prisma.ProductWhereInput =
    andConditons.length > 0 ? { AND: andConditons } : {};

  const result = await prisma.product.findMany({
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

  const total = await prisma.product.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<Product | null> => {
  const result = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const insertIntoDB = async (data: Product): Promise<Product> => {
  const result = await prisma.product.create({
    data,
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<Product>,
): Promise<Product> => {
  const result = await prisma.product.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Product> => {
  const result = await prisma.product.delete({
    where: {
      id,
    },
  });

  return result;
};

export const ProductService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateOneInDB,
  deleteByIdFromDB,
};
