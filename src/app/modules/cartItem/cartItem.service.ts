import { CartItem } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<CartItem[]> => {
  const result = await prisma.cartItem.findMany({});

  return result;
};

const getAllDataByEmail = async (email: string): Promise<CartItem[] | null> => {
  const result = await prisma.cartItem.findMany({
    where: {
      email,
    },
  });

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const insertIntoDB = async (data: CartItem | any): Promise<CartItem> => {
  const result = await prisma.cartItem.create({
    data,
  });

  return result;
};

const deleteByIdFromDB = async (id: string): Promise<CartItem> => {
  const result = await prisma.cartItem.delete({
    where: {
      id,
    },
  });

  return result;
};

export const CartItemService = {
  getAllFromDB,
  getAllDataByEmail,
  insertIntoDB,
  deleteByIdFromDB,
};
