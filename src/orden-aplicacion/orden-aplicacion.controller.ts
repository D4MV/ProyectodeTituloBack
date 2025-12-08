import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { OrdenAplicacionService } from './orden-aplicacion.service';
import { CrearOrdenAplicacionDto } from './dto/crear-orden.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('orden-aplicacion')
@UseGuards(JwtAuthGuard)
export class OrdenAplicacionController {
  constructor(private readonly ordenAplicacionService: OrdenAplicacionService) {}

  @Post('crear')
  async crearOrdenAplicacion(
    @Body() crearOrdenDto: CrearOrdenAplicacionDto,
    @Request() req: any
  ) {
    return this.ordenAplicacionService.crearOrdenAplicacion(
      crearOrdenDto,
      req.user.id
    );
  }
}
