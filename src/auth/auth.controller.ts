import { Body, Controller, Post, Get, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { RefreshTokenGuard } from 'src/common/guards/refreshToken.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  //dependency injection from service
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @Post('login') // => route /auth/login
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @UseGuards(AccessTokenGuard)
  @Get('logout')
  logout(@Req() req: Request){
    this.authService.logout(req.user['sub']);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh') //=> route /auth/refresh
  refreshTokens(@Req() req: Request) {
    const email = req.user['username'];
    const refreshToken = req.user['refreshToken'];
    return this.authService.refreshTokens(email, refreshToken);
  }
}