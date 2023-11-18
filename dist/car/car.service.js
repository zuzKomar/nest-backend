"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let CarService = class CarService {
    async create(createCarDto) {
        let car = await prisma.car.create({
            data: createCarDto,
        });
        return car;
    }
    async findAll(filterCarTable) {
        return prisma.car.findMany({
            where: {
                AND: [
                    {
                        usable: {
                            equals: true,
                        }
                    },
                    {
                        brand: {
                            startsWith: filterCarTable.brand
                        }
                    },
                    {
                        model: {
                            startsWith: filterCarTable.model
                        }
                    },
                    {
                        productionYear: {
                            gte: filterCarTable.productionYearFrom,
                            lte: filterCarTable.productionYearTo
                        }
                    },
                    {
                        power: {
                            gte: filterCarTable.powerFrom,
                            lte: filterCarTable.powerTo
                        }
                    },
                    {
                        capacity: {
                            gte: filterCarTable.capacityFrom,
                            lte: filterCarTable.capacityTo
                        }
                    },
                    {
                        transmission: {
                            equals: filterCarTable.transmission
                        }
                    },
                    {
                        numberOfSeats: {
                            gte: filterCarTable.numberOfSeatsFrom,
                            lte: filterCarTable.numberOfSeatsTo
                        }
                    },
                    {
                        costPerDay: {
                            gte: filterCarTable.costPerDayFrom,
                            lte: filterCarTable.costPerDayTo
                        }
                    },
                ]
            },
            select: {
                id: true,
                brand: true,
                model: true,
                power: true,
                productionYear: true,
                capacity: true,
                costPerDay: true,
                usable: true,
                transmission: true
            },
        });
    }
    async findOne(id) {
        const car = await prisma.car.findFirst({
            where: {
                id,
            },
            select: {
                id: true,
                brand: true,
                model: true,
                productionYear: true,
                transmission: true,
                power: true,
                capacity: true,
                numberOfSeats: true,
                photo: true,
                costPerDay: true,
                rents: {
                    select: {
                        carId: true,
                        date: true,
                        dueDate: true
                    }
                },
                usable: true
            },
        });
        if (!car) {
            throw new common_1.NotFoundException(`Car with id: ${id} not found!`);
        }
        return car;
    }
    async update(id, updateCarDto) {
        try {
            const car = await prisma.car.update({
                where: {
                    id
                },
                data: updateCarDto,
            });
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    async remove(id) {
        return prisma.car.delete({
            where: {
                id,
            },
        });
    }
};
CarService = __decorate([
    (0, common_1.Injectable)()
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map