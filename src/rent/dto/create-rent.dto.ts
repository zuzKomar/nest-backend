import { IsString, IsNumber } from 'class-validator';

export class CreateRentDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  carId: number;

  @IsString()
  date: string;

  @IsString()
  dueDate: string;
}
