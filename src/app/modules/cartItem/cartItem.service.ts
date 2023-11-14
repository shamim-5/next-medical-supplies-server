import { CartItem } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<CartItem[]> => {
  const result = await prisma.cartItem.findMany({});

  return result;
}

export const CartItemService = {
  getAllFromDB,
};
