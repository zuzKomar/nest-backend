import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RentModule } from './rent/rent.module';
import { CarModule } from './car/car.module';
import { CarController } from './car/car.controller';
import { RentController } from './rent/rent.controller';
import { CarService } from './car/car.service';
import { AuthController } from './auth/auth.controller';
import { RentService } from './rent/rent.service';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, PrismaModule, RentModule, CarModule, UsersModule],
  controllers: [CarController, RentController, AuthController],
  providers: [CarService, RentService, AuthService],
})
export class AppModule {}
