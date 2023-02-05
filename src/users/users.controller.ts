import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger/dist';
import { AuthGuard } from "@nestjs/passport"
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@ApiTags('users')
@Controller('users')
@UseGuards(AccessTokenGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ type: [UserEntity] })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':email')
  @ApiOkResponse({ type: UserEntity })
  findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  @ApiCreatedResponse({ type: UserEntity })
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiCreatedResponse({ type: UserEntity })
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(+id);
  }
}
