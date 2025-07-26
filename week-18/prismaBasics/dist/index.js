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
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../src/generated/prisma");
const app = (0, express_1.default)();
const client = new prisma_1.PrismaClient();
app.use(express_1.default.json());
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield client.user.findMany({ include: { todo: true } });
        res.json({ users });
    }
    catch (error) {
        res.json({
            error,
        });
    }
}));
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.create({
            data: {
                username: "nitn4",
                email: "Nitin4email.com",
                password: "12341",
                age: 23,
                city: "Pali",
            },
        });
    });
}
const deleteUser = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.user.delete({
        where: {
            id: 2,
        },
    });
});
const updateUser = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.user.update({
        where: {
            id: 3,
        },
        data: {
            username: "updatedNitin",
        },
    });
});
app.get("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield client.user.findFirst({
            where: {
                id: Number(id),
            },
            include: {
                todo: true,
            },
        });
        res.json({
            message: user,
        });
    }
    catch (error) {
        res.json({
            message: error,
        });
    }
}));
app.listen(5000, () => {
    console.log("Server started");
});
