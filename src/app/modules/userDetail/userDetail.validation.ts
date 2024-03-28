import { z } from 'zod';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    phoneNumber: z
      .number({ required_error: 'Phone number must be number' })
      .optional(),
    photoURL: z.string({}).optional(),
    address: z
      .object({
        addressLineOne: z.string({}),
        addressLineTwo: z.string({}),
        addressLineThree: z.string({}),
      })
      .optional(),
  }),
});

export const UserDetailValidation = {
  create,
};
