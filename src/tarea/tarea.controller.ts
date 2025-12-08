import { Body, Controller, Get, Patch, Post, Query, Request, UseGuards } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { CrearTareaDto } from './dto/crearTarea.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { ObtenerTareasDto } from './dto/obtenerTareasDto';
import { actualizarTareaDto } from './dto/actualizarTarea.dto';

@Controller('tarea')
@UseGuards(JwtAuthGuard)
export class TareaController {
  constructor(private readonly tareaService: TareaService) {}

  @Get("tipos")
  async tomarTipoTareas() {
    return this.tareaService.tomarTipoTareas();
  }

  @Post("crear")
  async crearTarea(
    @Body() crearTareaDto: CrearTareaDto,
    @Request() req:any
  ){
    return this.tareaService.crearTarea(
      crearTareaDto,
      req.user.id
    )
  }

  @Get('sacar')
  async sacarTareas(
    @Query() filtros: ObtenerTareasDto,
    @Request() req:any
  ){
    return this.tareaService.sacarTareas(
      req.user.id,
      filtros
    );
  }

  @Patch('actualizarEstado')
  async actualizarEstadoTarea(
    @Body() actualizarTareaDto: actualizarTareaDto,
    @Request() req:any
  ){
    return this.tareaService.actualizarEstadoTarea(
      req.user.id,
      actualizarTareaDto
    );
  }

}
