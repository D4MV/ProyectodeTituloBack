import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExcelService } from 'src/excel/excel.service';
import { CuadernoCampoData } from 'src/excel/excel.service';

@Injectable()
export class CuadernoCampoService {

    constructor(
        private prisma: PrismaService,
        private excelService: ExcelService,
    ){}

    async generarCuadernoDeCampoExcel(userId: string, terrenoId: string): Promise<Buffer> {
        const userFundo = await this.prisma.userFundo.findFirst({
            where: {userId: userId},
            include: {
                rol: {select:{nombre: true}},
                fundo: {select:{id: true, nombre: true}}
            }
        });

        if(!userFundo){
            throw new UnauthorizedException('Usuario no tiene un fundo asignado');
        }

        if(userFundo.rol.nombre !== 'ADMIN'){
            throw new UnauthorizedException('Usuario no tiene permisos para generar el cuaderno de campo');
        }

        const terreno = await this.prisma.terreno.findFirst({
            where: {
                id: terrenoId,
                userFundoId: userFundo.id
            }
        });

        if(!terreno){
            throw new UnauthorizedException('El terreno no pertenece a tu fundo');
        }

        const ordenesAplicacion = await this.prisma.ordenAplicacion.findMany({
            where:{
                tarea:{
                    cuartel:{
                        terrenoId: terrenoId
                    },
                    estado: { not: 'cancelada' }
                }
            },
            include:{
                tarea: {
                    include: {
                        cuartel: {
                            include: {
                                terreno:true,
                                planta:true
                            }
                        },
                        tipoTarea:true,
                        producto:true,
                    },
                },
            },
            orderBy:{
                fechaAplicacion: 'desc'
            }
        });

        const cuadernoData: CuadernoCampoData[] = ordenesAplicacion.map(orden => ({
            fechaEntrega: orden.fechaEntrega || new Date(),
            fechaAplicacion: orden.fechaAplicacion || new Date(),
            variedad: orden.tarea.cuartel.planta.variedad,
            cuartel: orden.tarea.cuartel.nombre,
            has: orden.tarea.cuartel.hectareas,
            nombreComercial: orden.tarea.producto?.nombreComercial || 'N/A',
            ingredienteActivo: orden.tarea.producto?.ingrActivo || 'N/A',
            etiqueta: orden.tarea.producto?.postEtiqueta || 'N/A',
            asoex: orden.tarea.producto?.postAsoex || 'N/A',
            pppl: orden.tarea.producto?.postPppl || 'N/A',
            dosis: orden.dosis,
            unidad: orden.tarea.producto?.unidadMedida || 'N/A',
            mojamientoReal: orden.mojamiento,
            totalProducto: (orden.dosis * orden.tarea.cuartel.hectareas),
            necesidadMaquinaria: orden.necesidadMaquinaria ?? 0,
            numMaquinaria: orden.numMaquinaria,
            gastoTotal: (orden.mojamiento * orden.numMaquinaria),
            cantidadAplicaciones: orden.cantidadApli,
            numOrden: orden.numGuia ?? 0,
            fechaPosibleCosecha: orden.tarea.cuartel.posibleCosecha || new Date(),
            objetivo: orden.objetivo,
            especie: orden.tarea.cuartel.planta.nombre,


        }));

        return this.excelService.generarCuadernoDeCampoExcelI(cuadernoData);

    }


}
