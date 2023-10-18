import { RentService } from './rent.service';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
export declare class RentController {
    private readonly rentService;
    constructor(rentService: RentService);
    create(createRentDto: CreateRentDto): Promise<import(".prisma/client").Rent>;
    findAll(): Promise<{
        id: number;
        car: import(".prisma/client").Car;
        user: import(".prisma/client").User;
        date: Date;
        dueDate: Date;
        damagedCar: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        car: import(".prisma/client").Car;
        user: import(".prisma/client").User;
        date: Date;
        dueDate: Date;
        damagedCar: boolean;
    }>;
    update(id: number, updateRentDto: UpdateRentDto): Promise<import(".prisma/client").Rent>;
    remove(id: number): Promise<import(".prisma/client").Rent>;
}
