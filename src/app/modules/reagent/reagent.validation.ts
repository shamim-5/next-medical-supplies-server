import { z } from 'zod';

const create = z.object({
body: z.object({
  objField: z.string({
      required_error: 'Title is required'
  }),
  arrReagent: z
      .array(
          z.object({
              reagentId: z.string({})
          })
      )
      .optional()
      })
});

export const ReagentValidation = {
 create
};
