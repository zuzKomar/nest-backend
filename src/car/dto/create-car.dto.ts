import bytes from 'bytes';
import { IsString, IsNumber, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

enum Transmission {
  MANUAL = 'MANUAL',
  AUTOMATIC = 'AUTOMATIC',
}

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  readonly brand: string;

  @IsString()
  @IsNotEmpty()
  readonly model: string;

  @IsNumber()
  @IsNotEmpty()
  readonly productionYear: number;

  @IsNumber()
  @IsNotEmpty()
  readonly power: number;

  @IsNumber()
  @IsNotEmpty()
  readonly capacity: number;

  @IsEnum(Transmission)
  @IsNotEmpty()
  readonly transmission: Transmission;

  @IsNumber()
  @IsNotEmpty()
  readonly numberOfSeats: number;

  @IsNumber()
  @IsNotEmpty()
  readonly costPerDay: number;

  @IsString()
  @IsNotEmpty()
  readonly registrationNumber: string;

  @IsOptional()
  readonly photo: any;
}
