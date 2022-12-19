import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as argon from 'argon2';
import { PrismaClient } from '@prisma/client';
import { LoginUserDto } from './dto/login-user.dto';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  async login(dto: LoginUserDto) {
    //find user with given email
    //if does not exist -> throw exception
    //if existst compare password
    //if password incorrect -> throw exception
    let user = await prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }

    //compare passwords
    const pwMatches = await argon.verify(user.password, dto.password);

    if (!pwMatches) {
      throw new ForbiddenException('Credentials incorrect');
    }

    return {
     "firstName": user.firstName,
     "lastName": user.lastName,
     "phone": user.phone,
     "pesel": user.pesel,
     "email": user.email,
     "role": user.role
    }
  }

  async signup(dto: CreateUserDto) {
    //generate password hash
    //save the new user in the db
    //return new user
    let hash = await argon.hash(dto.password);
    dto.password = hash;
    let user = await prisma.user.create({
      data: {
        ...dto,
      },
    });

    return {
     "firstName": user.firstName,
     "lastName": user.lastName,
     "phone": user.phone,
     "pesel": user.pesel,
     "email": user.email,
     "role": user.role
    }
  }
}
