import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CarController } from '../car/car.controller';
import { RentController } from '../rent/rent.controller';
import { CarService } from 'src/car/car.service';
import { RentService } from 'src/rent/rent.service';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController, CarController, RentController],
  providers: [AuthService, CarService, RentService],
})
export class AuthModule {}
