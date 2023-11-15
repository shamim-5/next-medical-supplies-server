import { z } from 'zod';

const create = z.object({
body: z.object({
  objField: z.string({
      required_error: 'Title is required'
  }),
  arrTopProduct: z
      .array(
          z.object({
              topProductId: z.string({})
          })
      )
      .optional()
      })
});

export const TopProductValidation = {
 create
};
