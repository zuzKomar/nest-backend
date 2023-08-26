import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as argon from 'argon2';
import { PrismaClient } from '@prisma/client';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from "@nestjs/jwt"
import { UsersService } from 'src/users/users.service';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}

  async login(dto: LoginUserDto):Promise<any> {
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

    const pwMatches = await argon.verify(user.password, dto.password);
 
    if (!pwMatches) {
      throw new ForbiddenException('Credentials incorrect');
    }

    const tokens = await this.getTokens(user.id, user.email);

    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      ...tokens
    }
  }

  async signup(dto: CreateUserDto) {
    //check if user with given credentials exists
    //if exists throw an exception
    //generate password hash
    //save the new user in the db
    //return new user
        const userExists = await prisma.user.findUnique({
      where: {
        email: dto.email
      }
    })

    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const hash = await this.hashData(dto.password);
    const newUser = await prisma.user.create({
      data: {
        ...dto,
        password: hash,
        refreshToken: ''
      }
    })

    const tokens = await this.getTokens(newUser.id, newUser.email)
    await this.updateRefreshToken(newUser.id, tokens.refreshToken);
    return tokens;
  }

 async logout(userId: number) {
    return await this.usersService.update(userId, {refreshToken: ''});
  }

  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.usersService.findOne(userId);

    if(!user || !user.refreshToken){
      throw new ForbiddenException('Access Denied');
    } 

    const refreshTokenMatches = await argon.verify(
      user.refreshToken,
      refreshToken
    );
    
    if(!refreshTokenMatches){
      throw new ForbiddenException('Access Denied');
    }

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  hashData(data: string) {
    return argon.hash(data);
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken);

    return await this.usersService.update(userId, {
      refreshToken: hashedRefreshToken,
    });
  }

  async getTokens(userId: number, username: string) {
    const [token, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret: 'secret',
          expiresIn: '1d',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret: 'secret',
          expiresIn: '30d',
        },
      ),
    ]);

    return {
      token,
      refreshToken,
    };
  }
}
