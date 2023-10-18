import { Rent } from "@prisma/client";
export declare class RentEntity implements Rent {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    carId: number;
    date: Date;
    dueDate: Date;
    damagedCar: boolean;
}
