import { z } from 'zod';

const create = z.object({
body: z.object({
  objField: z.string({
      required_error: 'Title is required'
  }),
  arrConsumable: z
      .array(
          z.object({
              consumableId: z.string({})
          })
      )
      .optional()
      })
});

export const ConsumableValidation = {
 create
};
