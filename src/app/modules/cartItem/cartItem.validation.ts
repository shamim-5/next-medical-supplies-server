import { z } from 'zod';

const create = z.object({
body: z.object({
  objField: z.string({
      required_error: 'Title is required'
  }),
  arrCartItem: z
      .array(
          z.object({
              cartItemId: z.string({})
          })
      )
      .optional()
      })
});

export const CartItemValidation = {
 create
};
