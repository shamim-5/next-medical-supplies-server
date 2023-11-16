"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        objField: zod_1.z.string({
            required_error: 'Title is required'
        }),
        arrOrder: zod_1.z
            .array(zod_1.z.object({
            orderId: zod_1.z.string({})
        }))
            .optional()
    })
});
exports.OrderValidation = {
    create
};
