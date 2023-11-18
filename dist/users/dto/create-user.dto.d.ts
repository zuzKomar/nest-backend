declare enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}
export declare class CreateUserDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly phone: string;
    readonly pesel: string;
    readonly email: string;
    password: string;
    readonly role: Role;
    readonly refreshToken: string;
}
export {};
