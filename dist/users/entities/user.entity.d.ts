import { Role, User } from "@prisma/client";
export declare class UserEntity implements User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    firstName: string;
    lastName: string;
    pesel: string;
    phone: string;
    email: string;
    password: string;
    role: Role;
    refreshToken: string;
}
