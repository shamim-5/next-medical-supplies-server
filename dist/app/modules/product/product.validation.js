"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }),
        category: zod_1.z.string({
            required_error: 'Category is required',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required',
        }),
        price: zod_1.z.number({
            required_error: 'Price is required',
        }),
        stock: zod_1.z.number({
            required_error: 'Stock is required',
        }),
        manufacturer: zod_1.z.string({
            required_error: 'menufacturer is required',
        }),
        imageURL: zod_1.z.string({
            required_error: 'Image-URL is required',
        }),
        avatarUrl: zod_1.z.string({
            required_error: 'Avatar-URL is required',
        }),
        reviews: zod_1.z.array(zod_1.z.object({})).optional(),
    }),
});
exports.ProductValidation = {
    create,
};
