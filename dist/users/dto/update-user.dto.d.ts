import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    refreshToken: string;
    password?: string;
}
export {};
