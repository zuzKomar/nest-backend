import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ApiCreatedResponse } from '@nestjs/swagger/dist';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarEntity } from './entities/car.entity';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) { }

  @Post()
  @ApiCreatedResponse({ type: CarEntity })
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Get()
  @ApiOkResponse({ type: [CarEntity] })
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.carService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CarEntity })
  findOne(@Param('id') id: string) {
    return this.carService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CarEntity })
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(+id, updateCarDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CarEntity })
  remove(@Param('id') id: string) {
    return this.carService.remove(+id);
  }
}
