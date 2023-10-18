"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const argon = require("argon2");
const prisma = new client_1.PrismaClient();
let UsersService = class UsersService {
    async create(createUserDto) {
        const hash = await argon.hash(createUserDto.password);
        return prisma.user.create({
            data: Object.assign(Object.assign({}, createUserDto), { password: hash }),
        });
    }
    findAll() {
        return prisma.user.findMany({
            select: {
                firstName: true,
                lastName: true,
                phone: true,
                email: true,
                rents: true
            }
        });
    }
    findOne(email) {
        return prisma.user.findFirst({
            where: {
                email,
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                phone: true,
                email: true,
                refreshToken: true,
                rents: {
                    include: {
                        car: true
                    }
                }
            }
        });
    }
    update(id, updateUserDto) {
        return prisma.user.update({
            where: {
                id: id,
            },
            data: updateUserDto
        });
    }
    remove(id) {
        return prisma.user.delete({
            where: {
                id,
            },
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map