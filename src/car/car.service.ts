import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCarDto } from './dto/create-car.dto';
import { FilterCarTableDto } from './dto/filter-car-table.dto';
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

  async findAll(filterCarTable: FilterCarTableDto) {
    return prisma.car.findMany({
      where: {
        AND: [
          { 
            usable : {
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
