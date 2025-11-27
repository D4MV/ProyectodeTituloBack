import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFundoDto } from './dto/createfundo.dto';

@Injectable()
export class FundoService {
    
    constructor(private prisma:PrismaService){}

    async getFundobyId(id:string){

        try {
            const fundo = await this.prisma.fundo.findUnique({
                where:{
                    id
                }
            })

            if(!fundo){
                throw new Error('Fundo no encontrado');
            }

            return fundo;
        } catch (error) {
            throw new Error('Error al obtener el fundo: '+ error);
        }


    }

   async createFundo(data:CreateFundoDto):Promise<CreateFundoDto>{

        if(!data){
            throw new Error('Faltan datos obligatorios');
        }

        const {nombre, direccion, rut, creadoPor, rutDueno} = data;

        const createFundo = this.prisma.fundo.create({
                data:{
                    nombre,
                    direccion,
                    rut,
                    creadoPor,
                    rutDueno
                }
            })

        return createFundo;
    }
}
