import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SueloService } from './suelo.service';
import { CreateSueloDto } from './dto/create-suelo.dto';
import { UpdateSueloDto } from './dto/update-suelo.dto';

@Controller('suelo')
export class SueloController {
  constructor(private readonly sueloService: SueloService) {}

  @Post()
  create(@Body() createSueloDto: CreateSueloDto) {
    return this.sueloService.create(createSueloDto);
  }

  @Get('tomar')
  findAll() {
    return this.sueloService.sacarSuelos();
  }

}
