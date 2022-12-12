import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RentService } from './rent.service';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { RentEntity } from './entities/rent.entity';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger/dist';

@ApiTags('rents') //enables endpoints grouping in swagger
@Controller('rents')
export class RentController {
  constructor(private readonly rentService: RentService) { }

  @Post()
  @ApiCreatedResponse({ type: RentEntity })
  create(@Body() createRentDto: CreateRentDto) {
    return this.rentService.create(createRentDto);
  }

  @Get()
  @ApiOkResponse({ type: [RentEntity] })
  findAll() {
    return this.rentService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: RentEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.rentService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: RentEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateRentDto: UpdateRentDto) {
    return this.rentService.update(+id, updateRentDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: RentEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.rentService.remove(+id);
  }
}
