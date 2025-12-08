import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearTareaDto } from './dto/crearTarea.dto';
import { ObtenerTareasDto } from './dto/obtenerTareasDto';
import { actualizarTareaDto } from './dto/actualizarTarea.dto';

@Injectable()
export class TareaService {

    constructor(private prisma: PrismaService) {}


    async tomarTipoTareas() {
        const tipos = await this.prisma.tipoTarea.findMany();
        return tipos;
    }

    async crearTarea(data:CrearTareaDto, userId: string):Promise<CrearTareaDto> {
        
        const userFundo = await this.prisma.userFundo.findFirst({
            where:{ userId: userId},
            include:{rol:{select:{nombre:true}}, terrenos:true}
        })

        if (!userFundo){
            throw new Error('Fundo no encontrado');
        }

        if (userFundo.rol.nombre !== 'ADMIN'){
            throw new Error('Solo el ADMIN del fundo puede agregar tareas');
        }

        if (!userFundo.terrenos){
            throw new Error('El ADMIN no tiene terrenos asociados');
        }

        const cuartel = await this.prisma.cuartel.findUnique({
            where:{ id: data.cuartelId },
            include:{ terreno:true}
        })

        if (!cuartel){
            throw new Error('Cuartel no encontrado');
        }

        const encargado = await this.prisma.encargados.findMany({
            where:{ terrenoId: cuartel.terreno.id}
        })

        if(!encargado || encargado.length === 0){
            throw new Error('No hay encargado asignado al terreno del cuartel');
        } 
        
        try {
            const tarea = await this.prisma.tarea.create({
                data:{
                    nombre: data.nombre,
                    tipoTareaId: data.tipoTareaId,
                    descripcion: data.descripcion,
                    fechaTermino: data.fechaTermino,
                    estado: data.estado || 'pendiente',
                    productoId: data.productoId,
                    creadoPor: userId,
                    cuartelId: data.cuartelId,
                }
            })
            return tarea;
        } catch (error) {
            throw new Error('Error al crear la tarea', error);
        }

    }

    async sacarTareas(userId: string, filtros?:ObtenerTareasDto) {

        const userFundo = await this.prisma.userFundo.findFirst({
            where:{ userId: userId},
            include:{rol:{select:{nombre:true}}, fundo:true}
        })

        if(!userFundo){
            throw new Error('usuario no asociado a ningun fundo');
        }

        if(userFundo.rol.nombre === 'ENCARGADO'){
            const asignacion = await this.prisma.encargados.findMany({
                where:{ userFundoId: userFundo.id },
                include:{terreno:{include:{cuarteles:{select:{id:true}}}}}
            })

            if (!asignacion || asignacion.length === 0){
                throw new Error('El encargado no tiene terrenos asignados');
            }

            const terrenosPermitidos = asignacion.map(a => a.terrenoId);
            const cuartelesPermitidos = asignacion.flatMap(a => a.terreno.cuarteles.map(c => c.id));
            
            if(filtros?.terrenoId && !terrenosPermitidos.includes(filtros.terrenoId)){
                throw new Error('No tiene permiso para ver tareas de este terreno');
            }

            if(filtros?.cuartelId && !cuartelesPermitidos.includes(filtros.cuartelId)){
                throw new Error('No tiene permiso para ver tareas de este cuartel');
            }

            const tareas = await this.prisma.tarea.findMany({
                where:{
                    cuartelId: filtros?.cuartelId 
                        ? filtros.cuartelId 
                        : { in: cuartelesPermitidos }
                },
                include:{
                    tipoTarea:{select: {nombre: true}},
                    producto:{select:{nombre:true}},
                    cuartel:{select:{nombre:true,
                        terreno:{select:{nombre:true}}
                    }}
                },
                orderBy: { fechaTermino: 'desc' }
            });
            return tareas;
        }
        if(userFundo.rol.nombre === 'ADMIN'){
            
            const terrenos = await this.prisma.terreno.findMany({
                where:{ userFundo: {fundoId: userFundo.fundoId}},
                include:{cuarteles:{select:{id:true}}}
            });

            const cuartelesDelFundo = terrenos.flatMap(t => t.cuarteles.map(c => c.id));

            const tareas = await this.prisma.tarea.findMany({
                where:{
                    cuartelId: filtros?.cuartelId ? filtros.cuartelId : { in: cuartelesDelFundo },
                },
                include:{
                    tipoTarea:{select: {nombre: true}},
                    producto:{select:{nombre:true}},
                    cuartel:{select:{nombre:true,
                        terreno:{select:{nombre:true}}
                    }}
                },
                orderBy: { fechaTermino: 'desc' }
            })
            return tareas;
        }
        throw new Error('Rol de usuario no autorizado para ver tareas');
    }

    async actualizarEstadoTarea(userId: string, tareaId: actualizarTareaDto){

        const userFundo = await this.prisma.userFundo.findFirst({
            where:{ userId: userId},
            include:{rol:{select:{nombre:true}}}
        })

        if(!userFundo){
            throw new Error('usuario no asociado a ningun fundo');
        }

        if (userFundo.rol.nombre !== 'ENCARGADO'){
            throw new Error('Solo el ENCARGADO del fundo puede actualizar el estado de las tareas');
        }

        const tarea = await this.prisma.tarea.findUnique({
            where:{ id: tareaId.tareaId },
            include:{
                cuartel:{include:{terreno:true}}
            }
        })

        if(!tarea){
            throw new Error('Tarea no encontrada');
        }

        const encargado = await this.prisma.encargados.findFirst({
            where: {
                terrenoId: tarea.cuartel.terreno.id,
                userFundo: { userId: userId }
            }
        });

        if(!encargado){
            throw new Error('El encargado no tiene permiso para actualizar esta tarea');
        }

        return this.prisma.tarea.update({
            where:{ id: tareaId.tareaId },
            data:{ estado: tareaId.estado }
        });
    }
}
