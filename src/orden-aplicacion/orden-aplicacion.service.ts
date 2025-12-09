import { Injectable, BadRequestException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearOrdenAplicacionDto } from './dto/crear-orden.dto';
import { ExcelService } from 'src/excel/excel.service';

@Injectable()
export class OrdenAplicacionService {

    constructor(private prisma: PrismaService, private excelService: ExcelService) { }
    async crearOrdenAplicacion(data: CrearOrdenAplicacionDto, userId: string) {

        const userFundo = await this.prisma.userFundo.findFirst({
            where: { userId: userId },
            include: { rol: { select: { nombre: true } } }
        });

        if (!userFundo) {
            throw new NotFoundException('Usuario no asociado a ningún fundo');
        }

        if (userFundo.rol.nombre !== 'ADMIN') {
            throw new UnauthorizedException('Solo el ADMIN puede crear órdenes de aplicación');
        }


        const tarea = await this.prisma.tarea.findUnique({
            where: { id: data.tareaId },
            include: {
                cuartel: {
                    include: {
                        terreno: true
                    }
                }
            }
        });

        if (!tarea) {
            throw new NotFoundException('Tarea no encontrada');
        }


        if (tarea.cuartel.terreno.userFundoId !== userFundo.id) {
            throw new BadRequestException('La tarea no pertenece a tu fundo');
        }


        if (tarea.estado !== 'en_progreso') {
            throw new BadRequestException('Solo se pueden crear órdenes para tareas en estado "en_progreso"');
        }

        const ordenExistente = await this.prisma.ordenAplicacion.findFirst({
            where: { tareaId: data.tareaId }
        });

        if (ordenExistente) {
            throw new BadRequestException('Ya existe una orden de aplicación para esta tarea');
        }


        const ordenAplicacion = await this.prisma.ordenAplicacion.create({
            data: {
                tareaId: data.tareaId,
                fechaEntrega: tarea.createdAt,
                fechaAplicacion: new Date(),
                dosis: data.dosis,
                cantidadApli: data.cantidadApli,
                objetivo: data.objetivo,
                formaAplicacion: data.formaAplicacion,
                mojamiento: data.mojamiento,
                numMaquinaria: data.numMaquinaria,
                necesidadTotal: data.necesidadTotal,
                necesidadMaquinaria: data.necesidadMaquinaria,

                numAutSag: data.numAutSag,
                numLote: data.numLote,
                numGuia: data.numGuia,
            },
            include: {
                tarea: {
                    select: {
                        nombre: true,
                        descripcion: true,
                        estado: true,
                        cuartel: {
                            select: {
                                nombre: true,
                                terreno: {
                                    select: {
                                        nombre: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        return ordenAplicacion;
    }

    async exportarOrdenesAExcel(userId: string): Promise<Buffer> {

        const userFundo = await this.prisma.userFundo.findFirst({
            where: { userId: userId },
            include: { rol: { select: { nombre: true } } }
        });

        if (!userFundo || userFundo.rol.nombre !== 'ADMIN') {
            throw new UnauthorizedException('Solo el ADMIN puede exportar órdenes');
        }


        const ordenes = await this.prisma.ordenAplicacion.findMany({
            where: {
                tarea: {
                    cuartel: {
                        terreno: {
                            userFundo: {
                                fundoId: userFundo.fundoId
                            }
                        }
                    }
                }
            },
            include: {
                tarea: {
                    include: {
                        cuartel: {
                            include: {
                                terreno: true,
                                planta: true
                            }
                        },
                        tipoTarea: true,
                        producto: true
                    }
                }
            },
            orderBy: { fechaAplicacion: 'desc' }
        });



        const ordenesData = ordenes.map(orden => ({
            ordenId: orden.id,
            cuartel: orden.tarea.cuartel.nombre,
            fechaEntrega: this.excelService.formatDate(orden.fechaEntrega),
            numMaquinaria: orden.numMaquinaria,
            variedad: orden.tarea.cuartel.planta?.nombre || 'Sin variedad',
            superficie: orden.tarea.cuartel.hectareas,
            fechaAplicacion: (orden.fechaAplicacion instanceof Date && !isNaN(orden.fechaAplicacion.getTime()))
                ? this.excelService.formatDate(orden.fechaAplicacion)
                : null,


            nombreComercial: orden.tarea.producto?.nombre || 'Sin producto',
            ingredienteActivo: orden.tarea.producto?.nombre || 'N/A',
            objetivo: orden.objetivo,
            dosis: orden.dosis,
            necesidadMaquinaria: orden.necesidadMaquinaria,
            necesidadTotal: orden.necesidadTotal,
            numAutorizacionSag: orden.numAutSag,
            numeroLote: orden.numLote,
            numeroGuia: orden.numGuia,


            mojamiento: orden.mojamiento,
            estadoFenologico: 'Por definir',
            formaAplicacion: orden.formaAplicacion,
            emisor: 'Administrador',
            recibe: 'Encargado',


            fechaInicio: '',
            cuartelConfirmacion: '',
            numMaquinariaConfirmacion: 0,
            horaInicio: '',
            horaTermino: ''
        }));

        // 4. Generar Excel con el formato específico
        return this.excelService.generateOrdenAplicacionExcel(ordenesData);
    }
}
