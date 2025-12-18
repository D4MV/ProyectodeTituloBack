import { Body, Controller, Get, Param, Patch, Post, Query, Request, UseGuards } from '@nestjs/common';
import { OrdenAplicacionService } from './orden-aplicacion.service';
import { CrearOrdenAplicacionDto } from './dto/crear-orden.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { ActualizarOrdenAplicacionDto } from './dto/actualizar-orden.dto';

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

  @Get('tarea')
  async obtenerOrdenPorTarea(
    @Query('tareaId') tareaId: string,
    @Request() req: any
  ) {
    return this.ordenAplicacionService.obtenerOrdenPorTarea(
      req.user.id,
      tareaId
    );
  }

  @Patch('confirmar')
  async actualizarOrdenAplicacion(
    @Body() body: ActualizarOrdenAplicacionDto & { ordenId: string },
    @Request() req: any
  ){
    return this.ordenAplicacionService.actualizarOrdenAplicacion(
      req.user.id,
      body.ordenId,
      body,
    );
  }

}
