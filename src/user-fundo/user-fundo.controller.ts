import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { UserFundoService } from './user-fundo.service';
import { CreateUserEncargadoDto } from './dto/createUserEncargado';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { AsignarEncargadoATerrenoDto } from './dto/asignarEncargado.dto';

@Controller('user-fundo')
@UseGuards(JwtAuthGuard)
export class UserFundoController {
  constructor(private readonly userFundoService: UserFundoService) {}

  @Get('encargados')
  async getEncargados(@Request() req:any) {
    return this.userFundoService.getEncargadosByFundo(req.user.id);
  }

  @Post('create-Encargado')
  async createUserEncargado(
    @Body() createUserEncargadoDto: CreateUserEncargadoDto,
    @Request() req: any,
  ){
    return this.userFundoService.crearUserEncargadoEnFundo(
      createUserEncargadoDto,
      req.user.id
    )

  }

  @Post('asignar-encargado')
  async asignarTerrenoAEncargado(
    @Request() req:any,
    @Body() asignarEncargadoATerrenoDto: AsignarEncargadoATerrenoDto,
  ){
    return this.userFundoService.asignarEncargadoATerreno(
      asignarEncargadoATerrenoDto,
      req.user.id
    )
  }

  @Get('encargados-con-terrenos/:terrenoId')
  async obtenerEncargadosConTerrenos(@Request() req:any,@Param('terrenoId') terrenoId:string){
    return this.userFundoService.obtenerEncargadosDeTerreno(terrenoId, req.user.id);
  }
  
}
