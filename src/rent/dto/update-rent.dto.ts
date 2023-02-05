import { PartialType } from '@nestjs/swagger';
import { CreateRentDto } from './create-rent.dto';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class UpdateRentDto extends PartialType(CreateRentDto) {
  @IsString()
  @IsOptional()
  date: string | Date;

  @IsString()
  @IsOptional()
  dueDate: string | Date;

  @IsBoolean()
  @IsOptional()
  damagedCar: boolean
}
