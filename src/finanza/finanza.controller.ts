import { Body, Controller, Post, UseGuards, Request, Get, Query } from '@nestjs/common';
import { FinanzaService } from './finanza.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CreateFinanzaDto } from './dto/finanzaCrear.dto';
import { GetFinanzasDto } from './dto/getFinanza.dto';

@Controller('finanza')
@UseGuards(JwtAuthGuard)
export class FinanzaController {
  constructor(private readonly finanzaService: FinanzaService) {}

  @Post('crear')
  async crearFinanza(
    @Body() createFinanzaDto: CreateFinanzaDto,
    @Request() req: any
  ) {
    return this.finanzaService.crearFinanza(
      req.user.id,
      createFinanzaDto
    )

  }
  
  @Get('terreno')
    async obtenerFinanzasPorTerreno(
      @Request() req: any,
      @Body() query: GetFinanzasDto,
    ) {
      return await this.finanzaService.obtenerFinanzas(
        req.user.id,
        query,
      );
  }

  @Get('balance')
    async calcularBalance(
      @Request() req: any,
      @Query('fechaInicio') fechaInicio?: string,
      @Query('fechaFin') fechaFin?: string,
    ) {
      const inicio = fechaInicio ? new Date(fechaInicio) : undefined;
      const fin = fechaFin ? new Date(fechaFin) : undefined;

      return await this.finanzaService.calcularBalance(req.user.id, inicio, fin);
  }

}
