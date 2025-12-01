import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCuartelDto } from './DTO/crearCuartel.dto';

@Injectable()
export class CuartelService {

    constructor(private prisma: PrismaService){}

    async crearCuartelEnTerreno(createCuartelDto:CreateCuartelDto){

        const {terrenoId, hectareas, nombre,sueloId, plantaId} = createCuartelDto;

        const terreno = await this.prisma.terreno.findUnique({
            where:{ id: terrenoId}
        })

        if(!terreno){
            throw new Error('Terreno no encontrado');
        }

        const nuevoCuartel = await this.prisma.cuartel.create({
            data:{
                terrenoId: terrenoId,
                hectareas: hectareas,
                nombre: nombre,
                plantaId: plantaId,
                sueloId: sueloId,
            }
        })
        return nuevoCuartel;
    }
    
}
