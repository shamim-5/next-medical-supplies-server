"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopProductValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        objField: zod_1.z.string({
            required_error: 'Title is required'
        }),
        arrTopProduct: zod_1.z
            .array(zod_1.z.object({
            topProductId: zod_1.z.string({})
        }))
            .optional()
    })
});
exports.TopProductValidation = {
    create
};
