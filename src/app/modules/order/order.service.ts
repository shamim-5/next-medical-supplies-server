/* eslint-disable @typescript-eslint/no-explicit-any */
import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<Order[]> => {
  const result = await prisma.order.findMany({});

  return result;
};

const getAllDataByEmail = async (email: string): Promise<Order[] | null> => {
  const result = await prisma.order.findMany({
    where: {
      email,
    },
  });

  return result;
};

const insertIntoDB = async (data: Order | any): Promise<Order> => {
  const result = await prisma.order.create({
    data,
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<Order> | any,
): Promise<Order> => {
  const result = await prisma.order.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

export const OrderService = {
  getAllFromDB,
  getAllDataByEmail,
  insertIntoDB,
  updateOneInDB,
};
