import { z } from 'zod';

const create = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .optional(),
  name: z
    .string({
      required_error: 'Name is required',
    })
    .optional(),
  role: z
    .string({
      required_error: 'Role is required',
    })
    .optional(),

  profile: z.array(z.object({})).optional(),

  userDetailId: z.string({
    required_error: 'userDetailId is required',
  }),
});

export const FileUploadValidation = {
  create,
};
