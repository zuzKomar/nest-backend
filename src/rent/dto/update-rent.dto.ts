import { PartialType } from '@nestjs/mapped-types';
import { CreateRentDto } from './create-rent.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateRentDto extends PartialType(CreateRentDto) {
  @IsString()
  @IsOptional()
  date: string;

  @IsString()
  @IsOptional()
  dueDate: string;
}
