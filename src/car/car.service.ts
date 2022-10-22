import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CarService {
  async create(createCarDto: CreateCarDto) {
    let car = await prisma.car.create({
      data: createCarDto,
    });

    return car;
  }

  async findAll() {
    return await prisma.car.findMany({
      select: {
        id: true,
        brand: true,
        model: true,
        power: true,
        capacity: true,
        costPerDay: true,
      },
    });
  }

  async findOne(id: number) {
    return await prisma.car.findFirst({
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
      },
    });
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    return await prisma.car.update({
      where: {
        id,
      },
      data: updateCarDto,
    });
  }

  async remove(id: number) {
    return await prisma.car.delete({
      where: {
        id,
      },
    });
  }
}
