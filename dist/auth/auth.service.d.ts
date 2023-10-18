import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from "@nestjs/jwt";
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private jwtService;
    private usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    login(dto: LoginUserDto): Promise<any>;
    signup(dto: CreateUserDto): Promise<{
        token: string;
        refreshToken: string;
    }>;
    logout(userId: number): Promise<import(".prisma/client").User>;
    refreshTokens(userId: string, refreshToken: string): Promise<{
        token: string;
        refreshToken: string;
    }>;
    hashData(data: string): Promise<string>;
    updateRefreshToken(userId: number, refreshToken: string): Promise<import(".prisma/client").User>;
    getTokens(userId: number, username: string): Promise<{
        token: string;
        refreshToken: string;
    }>;
}
