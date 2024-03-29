import { Injectable } from '@nestjs/common';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class RentService {
  async create(createRentDto: CreateRentDto) {
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

  async findOne(id: number) {
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

  async update(id: number, updateRentDto: UpdateRentDto) {
    console.log(updateRentDto);
    let updateRentDtoCopy = updateRentDto;

    if(updateRentDto.date){
      updateRentDtoCopy.date = new Date(updateRentDto.date);
    }

    if(updateRentDto.dueDate){
      updateRentDtoCopy.dueDate = new Date(updateRentDto.dueDate);

    }

    return await prisma.rent.update({
      where: {
        id,
      },
      data: updateRentDtoCopy,
    });
  }

  async remove(id: number) {
    return await prisma.rent.delete({
      where: {
        id,
      },
    });
  }
}
