import bytes from 'bytes';
import { IsString, IsNumber, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

enum Transmission {
  MANUAL = 'MANUAL',
  AUTOMATIC = 'AUTOMATIC',
}

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsNumber()
  @IsNotEmpty()
  productionYear: number;

  @IsNumber()
  @IsNotEmpty()
  power: number;

  @IsNumber()
  @IsNotEmpty()
  capacity: number;

  @IsEnum(Transmission)
  @IsNotEmpty()
  transmission: Transmission;

  @IsNumber()
  @IsNotEmpty()
  numberOfSeats: number;

  @IsNumber()
  @IsNotEmpty()
  costPerDay: number;

  @IsString()
  @IsNotEmpty()
  registrationNumber: string;

  @IsOptional()
  photo: any;
}
