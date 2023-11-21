import { MedicalEquipment, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { medicalEquipmentSearchAbleFields } from './medicalEquipment.constant';
import { IMedicalEquipmentFilterRequest } from './medicalEquipment.interface';

const getAllFromDB = async (
  filters: IMedicalEquipmentFilterRequest,
  options: IPaginationOptions,
): Promise<IGenericResponse<MedicalEquipment[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditons = [];

  if (searchTerm) {
    andConditons.push({
      OR: medicalEquipmentSearchAbleFields.map(field => ({
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

  const whereConditons: Prisma.MedicalEquipmentWhereInput =
    andConditons.length > 0 ? { AND: andConditons } : {};

  const result = await prisma.medicalEquipment.findMany({
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

  const total = await prisma.medicalEquipment.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<MedicalEquipment | null> => {
  const result = await prisma.medicalEquipment.findUnique({
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
  data: MedicalEquipment,
): Promise<MedicalEquipment> => {
  const result = await prisma.medicalEquipment.create({
    data,
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<MedicalEquipment>,
): Promise<MedicalEquipment> => {
  const result = await prisma.medicalEquipment.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteByIdFromDB = async (id: string): Promise<MedicalEquipment> => {
  const result = await prisma.medicalEquipment.delete({
    where: {
      id,
    },
  });

  return result;
};

export const MedicalEquipmentService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateOneInDB,
  deleteByIdFromDB,
};
