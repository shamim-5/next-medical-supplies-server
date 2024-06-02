import { z } from 'zod';

const create = z.object({
body: z.object({
  objField: z.string({
      required_error: 'Title is required'
  }),
  arrHome: z
      .array(
          z.object({
              homeId: z.string({})
          })
      )
      .optional()
      })
});

export const HomeValidation = {
 create
};
