import { CreateCarDto } from './dto/create-car.dto';
import { FilterCarTableDto } from './dto/filter-car-table.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarService {
    create(createCarDto: CreateCarDto): Promise<import(".prisma/client").Car>;
    findAll(filterCarTable: FilterCarTableDto): Promise<{
        id: number;
        brand: string;
        model: string;
        productionYear: number;
        power: number;
        capacity: number;
        transmission: import(".prisma/client").Transmission;
        costPerDay: number;
        usable: boolean;
    }[]>;
    findOne(id: number): Promise<{
        rents: {
            carId: number;
            date: Date;
            dueDate: Date;
        }[];
        id: number;
        brand: string;
        model: string;
        productionYear: number;
        power: number;
        capacity: number;
        transmission: import(".prisma/client").Transmission;
        numberOfSeats: number;
        costPerDay: number;
        photo: string;
        usable: boolean;
    }>;
    update(id: number, updateCarDto: UpdateCarDto): Promise<void>;
    remove(id: number): Promise<import(".prisma/client").Car>;
}
