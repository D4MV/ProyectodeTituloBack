import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UserFundoService } from './user-fundo.service';
import { CreateUserEncargadoDto } from './dto/createUserEncargado';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

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

}
