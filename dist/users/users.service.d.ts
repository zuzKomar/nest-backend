import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    create(createUserDto: CreateUserDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        pesel: string;
        phone: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        refreshToken: string;
    }, unknown, never> & {}>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        rents: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            carId: number;
            date: Date;
            dueDate: Date;
            damagedCar: boolean;
        }, unknown, never> & {})[];
    }[]>;
    findOne(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        refreshToken: string;
        rents: ({
            car: import("@prisma/client/runtime").GetResult<{
                id: number;
                createdAt: Date;
                updatedAt: Date;
                brand: string;
                model: string;
                productionYear: number;
                power: number;
                capacity: number;
                transmission: import(".prisma/client").Transmission;
                numberOfSeats: number;
                costPerDay: number;
                registrationNumber: string;
                photo: string;
                usable: boolean;
            }, unknown, never> & {};
        } & import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            carId: number;
            date: Date;
            dueDate: Date;
            damagedCar: boolean;
        }, unknown, never> & {})[];
    }, never, import("@prisma/client/runtime").DefaultArgs>;
    update(id: number, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        pesel: string;
        phone: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        refreshToken: string;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        pesel: string;
        phone: string;
        email: string;
        password: string;
        role: import(".prisma/client").Role;
        refreshToken: string;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
