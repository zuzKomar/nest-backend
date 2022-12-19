import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger"

export class CreateRentDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({description: 'The id of a user'})
  readonly userId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({description: 'The id of a car'})
  readonly carId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'The start date of a rent'})
  date: string | Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'The end date of a rent'})
  dueDate: string | Date;
}
