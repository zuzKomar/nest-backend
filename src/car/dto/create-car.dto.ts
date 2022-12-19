import bytes from 'bytes';
import { IsString, IsNumber, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger"

enum Transmission {
  MANUAL = 'MANUAL',
  AUTOMATIC = 'AUTOMATIC',
}

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'The brand of a car'})
  readonly brand: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'The model of a car'})
  readonly model: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({description: 'The production year of a car'})
  readonly productionYear: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({description: 'The numer of power horses of a car'})
  readonly power: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({description: 'The capacity of a car'})
  readonly capacity: number;

  @IsEnum(Transmission)
  @IsNotEmpty()
  @ApiProperty({description: 'The transmission of a car', default: Transmission.MANUAL})
  readonly transmission = Transmission.MANUAL;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({description: 'The number of seats of a car'})
  readonly numberOfSeats: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({description: 'The cost of rent per day'})
  readonly costPerDay: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'The registration number of a car'})
  readonly registrationNumber: string;

  @IsOptional()
  @ApiProperty({description: 'The photo of a car'})
  readonly photo?: any;
}
