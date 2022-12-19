import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({description: 'The email of new user'})
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'The password of new user'})
  password: string;
}
