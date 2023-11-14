import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<Order[]> => {
  const result = await prisma.order.findMany({});

  return result;
}

export const OrderService = {
  getAllFromDB,
};
