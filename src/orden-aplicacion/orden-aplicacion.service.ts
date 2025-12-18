import { Injectable, BadRequestException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearOrdenAplicacionDto } from './dto/crear-orden.dto';
import { ExcelService } from 'src/excel/excel.service';
import { ActualizarOrdenAplicacionDto } from './dto/actualizar-orden.dto';
import { OrdenAplicacion } from 'src/generated/prisma';

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


        if (tarea.estado !== 'pendiente') {
            throw new BadRequestException('Solo se pueden crear órdenes para tareas en estado "pendiente"');
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
                        producto:true,
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

    async exportarOrdenesAExcel(userId: string, tareaId: string): Promise<Buffer> {

        const userFundo = await this.prisma.userFundo.findFirst({
            where: { userId: userId },
            include: { 
                rol: { select: { nombre: true } },
                user: { select: { nombre: true } } 
            }
        });

        if (!userFundo || userFundo.rol.nombre !== 'ADMIN') {
            throw new UnauthorizedException('Solo el ADMIN puede exportar órdenes');
        }

        const tarea = await this.prisma.tarea.findFirst({
            where:{
                id: tareaId,
                cuartel: {
                    terreno:{
                        userFundoId: userFundo.id
                    }
                }
            },
            include:{
                cuartel:{
                    include:{
                        terreno:true
                    }
                }
            }
        })

        if (!tarea) {
            throw new NotFoundException('Tarea no encontrada o no pertenece a tu fundo');
        }

        const ordenes = await this.prisma.ordenAplicacion.findMany({
            where: {
                tareaId: tareaId,
            },
            include: {
                tarea: {
                    include: {
                        cuartel: {
                            include: {
                                terreno: {
                                    include: {
                                        encargados: {
                                            include: {
                                                userFundo: {
                                                    include: {
                                                        user: true
                                                    }
                                                }
                                            }
                                        },
                                        userFundo:{
                                            include:{
                                                user:{
                                                    select:{nombre:true,apellido:true}
                                                }
                                            }
                                        }
                                    }
                                },
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
        if (!ordenes || ordenes.length === 0) {
            throw new NotFoundException('No se encontraron órdenes de aplicación para la tarea especificada');
        }

        const ordenesData = ordenes.map(orden => {

            const emisor = orden.tarea.cuartel.terreno.userFundo?.user 
                ? `${orden.tarea.cuartel.terreno.userFundo.user.nombre} ${orden.tarea.cuartel.terreno.userFundo.user.apellido}`
                : 'Sin definir';
            

            const encargado = orden.tarea.cuartel.terreno.encargados?.[0]?.userFundo?.user?.nombre ;

            return {
                ordenId: orden.id,
                cuartel: orden.tarea.cuartel.nombre,
                fechaEntrega: this.excelService.formatDate(orden.fechaEntrega),
                numMaquinaria: orden.numMaquinaria,
                variedad: orden.tarea.cuartel.planta?.nombre || 'Sin variedad',
                superficie: orden.tarea.cuartel.hectareas,
                fechaAplicacion: (orden.fechaAplicacion instanceof Date && !isNaN(orden.fechaAplicacion.getTime()))
                    ? this.excelService.formatDate(orden.fechaAplicacion)
                    : null,

                nombreComercial: orden.tarea.producto?.nombreComercial || 'Sin producto',
                ingredienteActivo: orden.tarea.producto?.ingrActivo || 'N/A',
                objetivo: orden.objetivo,
                dosis: orden.dosis,
                necesidadMaquinaria: orden.necesidadMaquinaria ?? 0,
                necesidadTotal: orden.necesidadTotal,
                numAutorizacionSag: orden.numAutSag,
                numeroLote: orden.numLote,
                numeroGuia: orden.numGuia,

                mojamiento: orden.mojamiento,
                estadoFenologico: 'Por definir',
                formaAplicacion: orden.formaAplicacion,
                emisor: emisor,
                recibe: encargado,

                fechaInicio: (orden.fechaAplicacion instanceof Date && !isNaN(orden.fechaAplicacion.getTime()))
                    ? this.excelService.formatDate(orden.fechaAplicacion)
                    : this.excelService.formatDate(new Date()),
                cuartelConfirmacion: orden.cuartelConfirmacion || '',
                numMaquinariaConfirmacion: orden.numMaquinariaConfirmacion || 0,
                horaInicio: orden.horaInicio || '',
                horaTermino: orden.horaTermino || '',
            };
        });

        return this.excelService.generateOrdenAplicacionExcel(ordenesData);
    }


    async obtenerOrdenPorTarea(userId: string, tareaId: string) {
        const userFundo = await this.prisma.userFundo.findFirst({
            where: { userId: userId },
            include: { rol: { select: { nombre: true } } }
        });

        if (!userFundo) {
            throw new NotFoundException('Usuario no asociado a ningún fundo');
        }

        const tarea = await this.prisma.tarea.findUnique({
            where: { id: tareaId },
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
        const isAdmin = tarea.cuartel.terreno.userFundoId === userFundo.id;
        const isEncargado = await this.prisma.encargados.findFirst({
            where: {
                userFundoId: userFundo.id,
                terrenoId: tarea.cuartel.terreno.id
            }
        });

        if (!isAdmin && !isEncargado) {
            throw new UnauthorizedException('No tienes permisos para ver esta orden de aplicación');
        }

        const orden = await this.prisma.ordenAplicacion.findFirst({
            where: { tareaId: tareaId },
            select: {
                id: true,
                fechaEntrega: true,
                fechaAplicacion: true,
                dosis: true,
                cantidadApli: true,
                objetivo: true,
                formaAplicacion: true,
                mojamiento: true,
                numMaquinaria: true,
                necesidadTotal: true,
                necesidadMaquinaria: true,
                numAutSag: true,
                numLote: true,
                numGuia: true,
                tarea: {
                    select: {
                        producto:{
                            select:{
                                nombreComercial:true,
                                ingrActivo:true
                        }
                    }
                }
                }
            }
        });

        if (!orden) {
            throw new NotFoundException('No existe una orden de aplicación para esta tarea');
        }

        return orden;
    }

    async actualizarOrdenAplicacion(userId:string, ordenId:string, body:ActualizarOrdenAplicacionDto) {
        const userFundo = await this.prisma.userFundo.findFirst({
            where: { userId: userId },
            include: { rol: { select: { nombre: true } } }
        });

        if (!userFundo) {
            throw new NotFoundException('Usuario no asociado a ningún fundo');
        }

        const orden = await this.prisma.ordenAplicacion.findUnique({
            where: { id: ordenId },
            include: {
                tarea: {
                    include: {
                        cuartel: {
                            include: {
                                terreno: true
                            }
                        }
                    }
                }
            }
        });

        if (!orden) {
            throw new NotFoundException('Orden de aplicación no encontrada');
        }

        const encargado = await this.prisma.encargados.findFirst({
            where:{
                userFundoId: userFundo.id,
                terrenoId: orden.tarea.cuartel.terreno.id
            }
        });

        if (!encargado) {
            throw new UnauthorizedException('No tienes permisos para actualizar esta orden de aplicación');
        }

        const ordenActualizada = await this.prisma.ordenAplicacion.update({
            where: { id: ordenId },
            data: {
                horaInicio: body.horaInicio,
                horaTermino: body.horaTermino,
                numMaquinariaConfirmacion: body.numMaquinariaConfirmacion,
                cuartelConfirmacion: body.cuartelConfirmacion,
            },
            include: {
                tarea: {
                    include: {
                        cuartel:true,
                        producto:true
                    }
                }
            }
        })
        return ordenActualizada;

    } 
}
