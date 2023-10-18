import { CreateRentDto } from './create-rent.dto';
declare const UpdateRentDto_base: import("@nestjs/common").Type<Partial<CreateRentDto>>;
export declare class UpdateRentDto extends UpdateRentDto_base {
    date: string | Date;
    dueDate: string | Date;
    damagedCar: boolean;
}
export {};
