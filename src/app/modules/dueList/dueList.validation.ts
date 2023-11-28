import { z } from 'zod';

const create = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    totalPrice: z.number({
      required_error: 'Total price is required',
    }),
    discount: z.number({ required_error: 'Discount is required' }),
    discountPrice: z.number({
      required_error: 'Discount price is required',
    }),
    orderId: z.string({
      required_error: 'Unique OrderId is required',
    }),
  }),
});

export const DueListValidation = {
  create,
};
