import { Device, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { deviceSearchAbleFields } from './device.constant';
import { IDeviceFilterRequest } from './device.interface';

const getAllFromDB = async (
  filters: IDeviceFilterRequest,
  options: IPaginationOptions,
): Promise<IGenericResponse<Device[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditons = [];

  if (searchTerm) {
    andConditons.push({
      OR: deviceSearchAbleFields.map(field => ({
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

  const whereConditons: Prisma.DeviceWhereInput =
    andConditons.length > 0 ? { AND: andConditons } : {};

  const result = await prisma.device.findMany({
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

  const total = await prisma.device.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<Device | null> => {
  const result = await prisma.device.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const insertIntoDB = async (data: Device): Promise<Device> => {
  const result = await prisma.device.create({
    data,
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<Device>,
): Promise<Device> => {
  const result = await prisma.device.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Device> => {
  const result = await prisma.device.delete({
    where: {
      id,
    },
  });

  return result;
};

export const DeviceService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateOneInDB,
  deleteByIdFromDB,
};
