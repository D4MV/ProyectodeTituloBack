import { Controller, Get, Request, Res, UseGuards } from '@nestjs/common';
import { CuadernoCampoService } from './cuaderno-campo.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import type { Response } from 'express';

@Controller('cuaderno-campo')
@UseGuards(JwtAuthGuard)
export class CuadernoCampoController {
  constructor(private readonly cuadernoCampoService: CuadernoCampoService) {}

  @Get('exportar')
  async exportarCuadernoCampo(
    @Request() req: any,
    @Res({ passthrough: false }) res: Response,
  ) {
    const buffer = await this.cuadernoCampoService.generarCuadernoDeCampoExcel(
      req.user.id,
    );

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=cuaderno-campo-${new Date()
        .toISOString()
        .split('T')[0]}.xlsx`,
    );
    res.setHeader('Content-Length', buffer.length.toString());

    res.end(buffer);
  }
}
