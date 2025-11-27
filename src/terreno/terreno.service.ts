import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTerrenoDto } from './dto/terreno.dto';

@Injectable()
export class TerrenoService {
    constructor(private prisma: PrismaService) {}

    async crearTerreno( createTerrenoDto:CreateTerrenoDto,userId:string){
        
        const terrenoNuevo = createTerrenoDto

        const userFundo = await this.prisma.userFundo.findFirst({
            where:{ userId: userId},
            include:{rol:{select:{nombre:true}}}
        })

        if (!userFundo){
            throw new NotFoundException('Fundo no encontrado');
        }


        if (userFundo.rol.nombre !== 'ADMIN'){
            throw new NotFoundException('Solo el ADMIN del fundo puede agregar terrenos');
        }

        const nuevoTerreno = await this.prisma.terreno.create({
            data:{
                nombre: terrenoNuevo.nombre,
                areaHectareas: terrenoNuevo.areaHectareas,
                creadoPor: userId,
                lat: terrenoNuevo.lat,
                lon: terrenoNuevo.lon,
                codeSagGrower: terrenoNuevo.codeSagGrower,
                userFundoId: userFundo.id,
            },
            include:{
                userFundo:{
                    select:{
                        id:true,
                        fundo:{
                            select:{
                                id:true,
                                nombre:true,
                            }
                        }
                    }
                }
            }
        });

        return nuevoTerreno;
    }

    async obtenerTerrenosPorUserFundo(userId:string) {

        const userFundo = await this.prisma.userFundo.findFirst({
            where:{ userId: userId},
            include:{rol:{select:{nombre:true}}}
        })

        if (!userFundo) {
            throw new NotFoundException('Fundo no encontrado');
        }

        const terreno = await this.prisma.terreno.findMany({
            where:{ userFundoId: userFundo.id },
            select:{
                id:true,
                areaHectareas:true,
                lat:true,
                lon:true,
                codeSagGrower:true,
            }
        });
        
        return terreno;
        
    }
}


