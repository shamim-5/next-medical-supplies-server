"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetailValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required',
        }),
        phoneNumber: zod_1.z
            .number({ required_error: 'Phone number must be number' })
            .optional(),
        photoURL: zod_1.z.string({}).optional(),
        address: zod_1.z
            .object({
            addressLineOne: zod_1.z.string({}),
            addressLineTwo: zod_1.z.string({}),
            addressLineThree: zod_1.z.string({}),
        })
            .optional(),
    }),
});
exports.UserDetailValidation = {
    create,
};
