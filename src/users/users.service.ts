import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import * as argon from 'argon2';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const hash = await argon.hash(createUserDto.password);
    
    return prisma.user.create({
      data: {...createUserDto, password: hash},
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

  findOne(email: string) {
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

  update(id: string, updateUserDto: UpdateUserDto) {
    return prisma.user.update({
      where: {
        id: +id,
      },
      data: updateUserDto
    });
  }

  remove(id: number) {
    return prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
