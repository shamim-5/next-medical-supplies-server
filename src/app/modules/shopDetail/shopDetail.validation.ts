import { z } from 'zod';

const create = z.object({
body: z.object({
  objField: z.string({
      required_error: 'Title is required'
  }),
  arrShopDetail: z
      .array(
          z.object({
              shopDetailId: z.string({})
          })
      )
      .optional()
      })
});

export const ShopDetailValidation = {
 create
};
