"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.cartItem.findMany({});
    return result;
});
const getAllDataByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.cartItem.findMany({
        where: {
            email,
        },
    });
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.cartItem.create({
        data,
    });
    return result;
});
const deleteByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.cartItem.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.CartItemService = {
    getAllFromDB,
    getAllDataByEmail,
    insertIntoDB,
    deleteByIdFromDB,
};
