import { Subscription } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<Subscription[]> => {
  const result = await prisma.subscription.findMany({});

  return result;
};

const insertIntoDB = async (data: Subscription): Promise<Subscription> => {
  const result = await prisma.subscription.create({
    data,
  });

  return result;
};

export const SubscriptionService = {
  getAllFromDB,
  insertIntoDB,
};
