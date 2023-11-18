import { CreateCarDto } from './dto/create-car.dto';
import { FilterCarTableDto } from './dto/filter-car-table.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarService {
    create(createCarDto: CreateCarDto): Promise<import("@prisma/client/runtime").GetResult<{
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
    }, unknown, never> & {}>;
    findAll(filterCarTable: FilterCarTableDto): Promise<{
        id: number;
        brand: string;
        model: string;
        power: number;
        productionYear: number;
        capacity: number;
        costPerDay: number;
        usable: boolean;
        transmission: import(".prisma/client").Transmission;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        brand: string;
        model: string;
        productionYear: number;
        transmission: import(".prisma/client").Transmission;
        power: number;
        capacity: number;
        numberOfSeats: number;
        photo: string;
        costPerDay: number;
        rents: {
            carId: number;
            date: Date;
            dueDate: Date;
        }[];
        usable: boolean;
    }>;
    update(id: number, updateCarDto: UpdateCarDto): Promise<void>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
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
    }, unknown, never> & {}>;
}
