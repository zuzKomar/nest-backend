import { Injectable } from '@nestjs/common';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class RentService {
  async create(createRentDto: CreateRentDto) {
    createRentDto.date = new Date(createRentDto.date);
    createRentDto.dueDate = new Date(createRentDto.dueDate);
    let rent = await prisma.rent.create({
      data: createRentDto,
    });

    return rent;
  }

  async findAll() {
    return await prisma.rent.findMany();
  }

  async findOne(id: number) {
    return await prisma.rent.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateRentDto: UpdateRentDto) {
    updateRentDto.date = new Date(updateRentDto.date);
    updateRentDto.dueDate = new Date(updateRentDto.dueDate);
    return await prisma.rent.update({
      where: {
        id,
      },
      data: updateRentDto,
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
