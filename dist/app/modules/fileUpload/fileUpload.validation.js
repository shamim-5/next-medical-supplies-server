"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: 'Email is required',
    })
        .optional(),
    name: zod_1.z
        .string({
        required_error: 'Name is required',
    })
        .optional(),
    role: zod_1.z
        .string({
        required_error: 'Role is required',
    })
        .optional(),
    profile: zod_1.z.array(zod_1.z.object({})).optional(),
    userDetailId: zod_1.z.string({
        required_error: 'userDetailId is required',
    }),
});
exports.FileUploadValidation = {
    create,
};
