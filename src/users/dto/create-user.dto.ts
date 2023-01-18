import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsEnum, IsEmail, IsNotEmpty, Length } from 'class-validator';

enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'The first name of a user'})
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'The last name of a user'})
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'The phone number of a user'})
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  @Length(11)
  @ApiProperty({description: 'The PESEL number of a user'})
  readonly pesel: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({description: 'The e-mail of a user'})
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'The password of a user'})
  password: string;

  @IsOptional()
  @IsEnum(Role)
  @ApiProperty({description: 'The role of a user'})
  readonly role: Role;

  @IsString()
  @IsOptional()
  readonly refreshToken: string;
}
