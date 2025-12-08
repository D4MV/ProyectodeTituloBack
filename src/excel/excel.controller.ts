import { Controller, Get, Request, Res, UseGuards } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { OrdenAplicacionService } from 'src/orden-aplicacion/orden-aplicacion.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import type { Response } from 'express';

@Controller('excel')
@UseGuards(JwtAuthGuard)
export class ExcelController {
  constructor(
    private readonly excelService: ExcelService,
    private readonly ordenAplicacionService: OrdenAplicacionService
  ) {}

  @Get('ordenes-aplicacion')
  async exportarOrdenesAplicacion(
    @Request() req: any,
    @Res({ passthrough: false }) res: Response
  ) {
    const buffer = await this.ordenAplicacionService.exportarOrdenesAExcel(
      req.user.id
    );

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=ordenes-aplicacion-${new Date().toISOString().split('T')[0]}.xlsx`
    );
    res.setHeader('Content-Length', buffer.length.toString());

    res.end(buffer);
  }
}
