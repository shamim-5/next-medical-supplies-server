"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DueListValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'Email is required',
        }),
        totalPrice: zod_1.z.number({
            required_error: 'Total price is required',
        }),
        discount: zod_1.z.number({ required_error: 'Discount is required' }),
        discountPrice: zod_1.z.number({
            required_error: 'Discount price is required',
        }),
        orderId: zod_1.z.string({
            required_error: 'Unique OrderId is required',
        }),
    }),
});
exports.DueListValidation = {
    create,
};
