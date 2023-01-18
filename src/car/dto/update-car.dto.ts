import { PartialType } from '@nestjs/swagger';
import { CreateCarDto } from './create-car.dto';
import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  @IsString()
  @IsOptional()
  brand: string;

  @IsString()
  @IsOptional()
  model: string;

  @IsNumber()
  @IsOptional()
  productionYear: number;

  @IsNumber()
  @IsOptional()
  power: number;

  @IsNumber()
  @IsOptional()
  capacity: number;

  @IsNumber()
  @IsOptional()
  costPerDay: number;

  @IsBoolean()
  @IsOptional()
  usable: boolean;
}
