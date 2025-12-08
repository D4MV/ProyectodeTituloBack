import { Injectable, BadRequestException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearOrdenAplicacionDto } from './dto/crear-orden.dto';
import { ExcelService } from 'src/excel/excel.service';

@Injectable()
export class OrdenAplicacionService {

    constructor(private prisma: PrismaService, private excelService: ExcelService){}
    async crearOrdenAplicacion(data: CrearOrdenAplicacionDto, userId: string) {
        // 1. Verificar que el usuario sea ADMIN
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

        // 2. Buscar la tarea y verificar que existe
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

        // 3. Validar que la tarea pertenece al fundo del admin
        if (tarea.cuartel.terreno.userFundoId !== userFundo.id) {
            throw new BadRequestException('La tarea no pertenece a tu fundo');
        }

        // 4. Validar que la tarea esté en estado "en_progreso" para crear la orden
        if (tarea.estado !== 'en_progreso') {
            throw new BadRequestException('Solo se pueden crear órdenes para tareas en estado "en_progreso"');
        }

        // 5. Verificar que no exista ya una orden de aplicación para esta tarea
        const ordenExistente = await this.prisma.ordenAplicacion.findFirst({
            where: { tareaId: data.tareaId }
        });

        if (ordenExistente) {
            throw new BadRequestException('Ya existe una orden de aplicación para esta tarea');
        }

        // 6. Crear la orden de aplicación
        // La fechaEntrega es la fecha de creación de la tarea (createdAt)
        const ordenAplicacion = await this.prisma.ordenAplicacion.create({
            data: {
                tareaId: data.tareaId,
                fechaEntrega: tarea.createdAt, // Fecha de creación de la tarea
                fechaAplicacion: new Date(), // Fecha actual cuando se crea la orden
                dosis: data.dosis,
                cantidadApli: data.cantidadApli,
                objetivo: data.objetivo,
                formaAplicacion: data.formaAplicacion,
                mojamiento: data.mojamiento,
                numMaquinaria: data.numMaquinaria,
                necesidadTotal: data.necesidadTotal,
                necesidadMaquinaria: data.necesidadMaquinaria,
                // Campos opcionales (se pueden agregar después)
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
        // 1. Validar que sea ADMIN
        const userFundo = await this.prisma.userFundo.findFirst({
            where: { userId: userId },
            include: { rol: { select: { nombre: true } } }
        });

        if (!userFundo || userFundo.rol.nombre !== 'ADMIN') {
            throw new UnauthorizedException('Solo el ADMIN puede exportar órdenes');
        }

        // 2. Obtener las órdenes con todos los datos relacionados
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
                                planta: true // Para obtener la variedad
                            }
                        },
                        tipoTarea: true,
                        producto: true
                    }
                }
            },
            orderBy: { fechaAplicacion: 'desc' }
        });

        // 3. Transformar datos al formato requerido
        const ordenesData = ordenes.map(orden => ({
            ordenId: orden.id,
            cuartel: orden.tarea.cuartel.nombre,
            fechaEntrega: this.excelService.formatDate(orden.fechaEntrega),
            numMaquinaria: orden.numMaquinaria,
            variedad: orden.tarea.cuartel.planta?.nombre || 'Sin variedad',
            superficie: orden.tarea.cuartel.hectareas,
            fechaAplicacion: this.excelService.formatDate(orden.fechaAplicacion),
            
            // Datos del producto
            nombreComercial: orden.tarea.producto?.nombre || 'Sin producto',
            ingredienteActivo: orden.tarea.producto?.nombre || 'N/A', // Ajusta según tu modelo
            objetivo: orden.objetivo,
            dosis: orden.dosis,
            necesidadMaquinaria: orden.necesidadMaquinaria,
            necesidadTotal: orden.necesidadTotal,
            numAutorizacionSag: orden.numAutSag,
            numeroLote: orden.numLote,
            numeroGuia: orden.numGuia,
            
            // Datos adicionales
            mojamiento: orden.mojamiento,
            estadoFenologico: 'Por definir', // Agrega este campo si lo tienes en tu modelo
            formaAplicacion: orden.formaAplicacion,
            emisor: 'Administrador', // Puedes obtener esto del usuario que creó la orden
            recibe: 'Encargado', // Puedes obtener esto de la tabla encargados
            
            // Confirmación (vacíos para llenar manualmente)
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
