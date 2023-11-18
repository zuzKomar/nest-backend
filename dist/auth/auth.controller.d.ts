import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';
import { Request } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(createUserDto: CreateUserDto): Promise<{
        token: string;
        refreshToken: string;
    }>;
    login(loginUserDto: LoginUserDto): Promise<any>;
    logout(req: Request): void;
    refreshTokens(req: Request): Promise<{
        token: string;
        refreshToken: string;
    }>;
}
