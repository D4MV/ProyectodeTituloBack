import { Body, Controller, Get, Post } from '@nestjs/common';
import { FundoService } from './fundo.service';
import { CreateFundoDto } from './dto/createfundo.dto';


@Controller('/fundo')
export class FundoController {
  constructor(private readonly fundoService: FundoService) {}

    @Get('/:id')
    getFundobyId(id:string){
      return this.fundoService.getFundobyId(id)
    }


    @Post()
    async createFundo(@Body() data:CreateFundoDto){
      return this.fundoService.createFundo(data)
    }



}
