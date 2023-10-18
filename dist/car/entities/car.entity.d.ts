import { Car, Transmission } from "@prisma/client";
export declare class CarEntity implements Car {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    brand: string;
    model: string;
    productionYear: number;
    power: number;
    capacity: number;
    transmission: Transmission;
    numberOfSeats: number;
    costPerDay: number;
    registrationNumber: string;
    photo: string | null;
    usable: boolean;
}
