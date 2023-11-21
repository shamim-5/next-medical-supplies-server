import { z } from 'zod';

const create = z.object({
body: z.object({
  objField: z.string({
      required_error: 'Title is required'
  }),
  arrReview: z
      .array(
          z.object({
              reviewId: z.string({})
          })
      )
      .optional()
      })
});

export const ReviewValidation = {
 create
};
