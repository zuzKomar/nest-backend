import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import * as argon from 'argon2';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    let hash = await argon.hash(createUserDto.password);
    createUserDto.password = hash;
    let user = await prisma.user.create({
      data: createUserDto,
    });

    return user;
  }

  async findAll() {
    return await prisma.user.findMany({
      select: {
        firstName: true,
        lastName: true,
        phone: true,
        email: true,
        rents: true
      }
    });
  }

  async findOne(id: number) {
    return await prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        firstName: true,
        lastName: true,
        phone: true,
        email: true,
        rents: true
      }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let hash = await argon.hash(updateUserDto.password);
    updateUserDto.password = hash;
    return await prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
