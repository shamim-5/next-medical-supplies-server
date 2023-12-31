import { z } from 'zod';

const create = z.object({
body: z.object({
  objField: z.string({
      required_error: 'Title is required'
  }),
  arrOrder: z
      .array(
          z.object({
              orderId: z.string({})
          })
      )
      .optional()
      })
});

export const OrderValidation = {
 create
};
