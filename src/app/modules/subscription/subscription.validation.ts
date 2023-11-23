import { z } from 'zod';

const create = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
  }),
});

export const SubscriptionValidation = {
  create,
};
