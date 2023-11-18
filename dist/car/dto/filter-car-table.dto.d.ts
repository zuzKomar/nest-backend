import { Transmission } from '@prisma/client';
export declare class FilterCarTableDto {
    brand?: string;
    model?: string;
    productionYearFrom?: number;
    productionYearTo?: number;
    powerFrom?: number;
    powerTo?: number;
    capacityFrom?: number;
    capacityTo?: number;
    transmission?: Transmission;
    numberOfSeatsFrom?: number;
    numberOfSeatsTo?: number;
    costPerDayFrom?: number;
    costPerDayTo?: number;
}
