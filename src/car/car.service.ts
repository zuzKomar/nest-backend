import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

const prisma = new PrismaClient();

@Injectable()// singleton as default
export class CarService {
  async create(createCarDto: CreateCarDto) {
    let car = await prisma.car.create({
      data: createCarDto,
    });

    return car;
  }

  async findAll() {
    return prisma.car.findMany({
      select: {
        id: true,
        brand: true,
        model: true,
        power: true,
        productionYear: true,
        capacity: true,
        costPerDay: true,
        usable: true
      },
    });
  }

  async findOne(id: number) {
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
        rents: true,
        usable: true
      },
    });

    if (!car) {
      throw new NotFoundException(`Car with id: ${id} not found!`);
    }

    return car;
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    try{
      const car = await prisma.car.update({
        where: {
          id
        },
        data: updateCarDto,
      });
    }catch(e){
      console.log(e);
      throw e;
    }
  }

  async remove(id: number) {
    return prisma.car.delete({
      where: {
        id,
      },
    });
  }
}
