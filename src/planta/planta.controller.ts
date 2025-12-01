import { Controller, Get, UseGuards } from '@nestjs/common';
import { PlantaService } from './planta.service';
import { jwtConstants } from 'src/auth/constants/jwt.constants';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('planta')
export class PlantaController {
  constructor(private readonly plantaService: PlantaService) {}

  @Get('datos')
  @UseGuards(JwtAuthGuard)
  async obtenerDatosPlanta() {
    return this.plantaService.tomarDatosPlanta();
  }
}
