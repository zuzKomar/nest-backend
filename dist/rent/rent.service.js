"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let RentService = class RentService {
    async create(createRentDto) {
        let rent = await prisma.rent.create({
            data: createRentDto,
        });
        return rent;
    }
    async findAll() {
        return await prisma.rent.findMany({
            select: {
                id: true,
                date: true,
                dueDate: true,
                damagedCar: true,
                user: true,
                car: true
            }
        });
    }
    async findOne(id) {
        return await prisma.rent.findFirst({
            where: {
                id,
            },
            select: {
                id: true,
                date: true,
                dueDate: true,
                damagedCar: true,
                user: true,
                car: true
            }
        });
    }
    async update(id, updateRentDto) {
        console.log(updateRentDto);
        let updateRentDtoCopy = updateRentDto;
        if (updateRentDto.date) {
            updateRentDtoCopy.date = new Date(updateRentDto.date);
        }
        if (updateRentDto.dueDate) {
            updateRentDtoCopy.dueDate = new Date(updateRentDto.dueDate);
        }
        return await prisma.rent.update({
            where: {
                id,
            },
            data: updateRentDtoCopy,
        });
    }
    async remove(id) {
        return await prisma.rent.delete({
            where: {
                id,
            },
        });
    }
};
RentService = __decorate([
    (0, common_1.Injectable)()
], RentService);
exports.RentService = RentService;
//# sourceMappingURL=rent.service.js.map