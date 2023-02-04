import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, UseGuards, Req } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger/dist';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarEntity } from './entities/car.entity';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { FilterCarTableDto } from './dto/filter-car-table.dto';

@Controller('cars')
@ApiTags('cars')
@UseGuards(AccessTokenGuard)
export class CarController {
  constructor(private readonly carService: CarService) { }

  @Post()
  @ApiCreatedResponse({ type: CarEntity })
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Get()
  @ApiOkResponse({ type: [CarEntity] })
  findAll(@Query() query: FilterCarTableDto) {
    return this.carService.findAll(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: CarEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.carService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CarEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(+id, updateCarDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CarEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.carService.remove(+id);
  }
}
