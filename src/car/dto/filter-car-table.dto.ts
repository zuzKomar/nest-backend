import { IsString, IsNumber, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger"
import { Transmission } from '@prisma/client';

export class FilterCarTableDto {
    @IsString()
    @ApiProperty({description: 'The brand of a car'})
    @IsOptional()
    brand?: string;
  
    @IsString()
    @ApiProperty({description: 'The model of a car'})
    @IsOptional()
    model?: string;
  
    @IsNumber()
    @ApiProperty({description: 'Lower range of production years'})
    @IsOptional()
    productionYearFrom?: number;

    @IsNumber()
    @ApiProperty({description: 'Top range of production years'})
    @IsOptional()
    productionYearTo?: number;
  
    @IsNumber()
    @ApiProperty({description: 'Lower range of power horses of a car'})
    @IsOptional()
    powerFrom?: number;

    @IsNumber()
    @ApiProperty({description: 'Top range of power horses of a car'})
    @IsOptional()
    powerTo?: number;
  
    @IsNumber()
    @ApiProperty({description: 'Lower range of capacity of a car'})
    @IsOptional()
    capacityFrom?: number;

    @IsNumber()
    @ApiProperty({description: 'Top range of capacity of a car'})
    @IsOptional()
    capacityTo?: number;
  
    @IsEnum(Transmission)
    @ApiProperty({description: 'The transmission of a car', default: Transmission.MANUAL})
    @IsOptional()
    transmission?: Transmission;
  
    @IsNumber()
    @ApiProperty({description: 'Lower range of seats of a car'})
    @IsOptional()
    numberOfSeatsFrom?: number;

    @IsNumber()
    @ApiProperty({description: 'Top range of seats of a car'})
    @IsOptional()
    numberOfSeatsTo?: number;
  
    @IsNumber()
    @ApiProperty({description: 'Lower range of cost of rent per day'})
    @IsOptional()
    costPerDayFrom?: number;

    @IsNumber()
    @ApiProperty({description: 'Top range of cost of rent per day'})
    @IsOptional()
    costPerDayTo?: number;
  }
  