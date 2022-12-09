import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], //list of modules this module uses
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule { }
 