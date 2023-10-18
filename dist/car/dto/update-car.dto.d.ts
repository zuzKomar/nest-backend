import { CreateCarDto } from './create-car.dto';
declare const UpdateCarDto_base: import("@nestjs/common").Type<Partial<CreateCarDto>>;
export declare class UpdateCarDto extends UpdateCarDto_base {
    brand: string;
    model: string;
    productionYear: number;
    power: number;
    capacity: number;
    costPerDay: number;
    usable: boolean;
}
export {};
