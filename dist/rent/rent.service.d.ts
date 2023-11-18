import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
export declare class RentService {
    create(createRentDto: CreateRentDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        carId: number;
        date: Date;
        dueDate: Date;
        damagedCar: boolean;
    }, unknown, never> & {}>;
    findAll(): Promise<{
        id: number;
        date: Date;
        dueDate: Date;
        damagedCar: boolean;
        user: import("@prisma/client/runtime").GetResult<{
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
        }, unknown, never> & {};
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
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        date: Date;
        dueDate: Date;
        damagedCar: boolean;
        user: import("@prisma/client/runtime").GetResult<{
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
        }, unknown, never> & {};
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
    }>;
    update(id: number, updateRentDto: UpdateRentDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        carId: number;
        date: Date;
        dueDate: Date;
        damagedCar: boolean;
    }, unknown, never> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        carId: number;
        date: Date;
        dueDate: Date;
        damagedCar: boolean;
    }, unknown, never> & {}>;
}
