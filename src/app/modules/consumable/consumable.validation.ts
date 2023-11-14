import { z } from 'zod';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    category: z.string({
      required_error: 'Category is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    price: z.number({
      required_error: 'Price is required',
    }),
    stock: z.number({
      required_error: 'Stock is required',
    }),
    manufacturer: z.string({
      required_error: 'menufacturer is required',
    }),
    imageURL: z.string({
      required_error: 'Image-URL is required',
    }),
    avatarUrl: z.string({
      required_error: 'Avatar-URL is required',
    }),
    reviews: z.array(z.object({})).optional(),
  }),
});

export const ConsumableValidation = {
  create,
};
