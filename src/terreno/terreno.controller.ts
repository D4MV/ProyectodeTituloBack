import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { TerrenoService } from './terreno.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { CreateTerrenoDto } from './dto/terreno.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';


@Controller('terreno')
@UseGuards(JwtAuthGuard)
export class TerrenoController {
  constructor(private readonly terrenoService: TerrenoService) {}

  
  @Post('crear')
  async crearTerreno(
      @Body() createTerrenoDto: CreateTerrenoDto,
      @Request() req: any
    ) {
      return this.terrenoService.crearTerreno(
        createTerrenoDto, 
        req.user.id
      );
  }

  @Get('mis-terrenos')
  async obtenerMisTerrenos(@Request() req:any) {
      return this.terrenoService.obtenerTerrenosPorUserFundo(req.user.id);
  }

}
