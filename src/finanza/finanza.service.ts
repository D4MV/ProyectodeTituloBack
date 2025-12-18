import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFinanzaDto } from './dto/finanzaCrear.dto';
import { GetFinanzasDto } from './dto/getFinanza.dto';

@Injectable()
export class FinanzaService {

    constructor(private prisma: PrismaService){}

    private async obtenerFundoUsuario(userId:string){
        const userFundo = await this.prisma.userFundo.findFirst({
            where:{ userId: userId},
            include:{fundo:true, terrenos:true}
        });

        if (!userFundo){
            throw new Error('Fundo no encontrado para el usuario');
        }
        return userFundo;
    }

    private async verificarTerreno(userId: string, terrenoId: string){
        const terreno = await this.prisma.terreno.findUnique({
            where: {id: terrenoId},
            include:{
                userFundo:{
                    include:{
                        fundo:true
                    }
                }
            }
        });

        if(!terreno){
            throw new Error('Terreno no encontrado');
        }

        const userFundo = await this.prisma.userFundo.findFirst({
            where:{
                userId: userId,
                fundoId: terreno.userFundo.fundoId,
            }
        })

        if(!userFundo){
            throw new Error('No tienes permiso para acceder a este terreno');
        }

        return terreno;
    }

    async crearFinanza(userId:string, createFinanzaDto:CreateFinanzaDto) {
        await this.verificarTerreno(userId, createFinanzaDto.terrenoId);

        const finanza = await this.prisma.finanza.create({
            data:{
                tipo: createFinanzaDto.tipo,
                monto: createFinanzaDto.monto,
                descripcion: createFinanzaDto.descripcion || '',
                fecha: new Date(createFinanzaDto.fecha),
                terrenoId: createFinanzaDto.terrenoId,
            },
            include:{
                terreno:{
                    select:{
                        id:true,
                        nombre:true,
                    }
                }
            }
        })

        return finanza;
    }

    async obtenerFinanzas(userId: string, query: GetFinanzasDto) {
        const userFundo = await this.obtenerFundoUsuario(userId);
        const terrenosIds = userFundo.terrenos.map((t) => t.id);


        const where: any = {
        terrenoId: {
            in: terrenosIds,
        },
        };

        if (query.terrenoId) {
        if (!terrenosIds.includes(query.terrenoId)) {
            throw new ForbiddenException('El terreno no pertenece a tu fundo');
            }
        where.terrenoId = query.terrenoId;
        }

        if (query.tipo) {
        where.tipo = query.tipo;
        }

        if (query.fechaInicio || query.fechaFin) {
        where.fecha = {};
        if (query.fechaInicio) {
            where.fecha.gte = query.fechaInicio;
            }
        if (query.fechaFin) {
            where.fecha.lte = query.fechaFin;
            }
        }


        const finanzas = await this.prisma.finanza.findMany({
        where,
        orderBy: { fecha: 'desc' },
        include: {
            terreno: {
            select: {
                id: true,
                nombre: true,
            },
            },
        },
        });

        return finanzas;
    }


    async calcularBalance(
        userId: string,
        fechaInicio?: Date,
        fechaFin?: Date,
    ) {

        const userFundo = await this.obtenerFundoUsuario(userId);
        const terrenosIds = userFundo.terrenos.map((t) => t.id);


        const where: any = {
        terrenoId: {
            in: terrenosIds,
        },
        };

        if (fechaInicio || fechaFin) {
        where.fecha = {};
        if (fechaInicio) where.fecha.gte = fechaInicio;
        if (fechaFin) where.fecha.lte = fechaFin;
        }


        const [gastos, ingresos] = await Promise.all([
        this.prisma.finanza.aggregate({
            where: { ...where, tipo: 'gasto' },
            _sum: { monto: true },
            _count: true,
        }),
        this.prisma.finanza.aggregate({
            where: { ...where, tipo: 'ingreso' },
            _sum: { monto: true },
            _count: true,
        }),
        ]);

        const totalGastos = gastos._sum.monto || 0;
        const totalIngresos = ingresos._sum.monto || 0;
        const balance = totalIngresos - totalGastos;

        return {
        fundoId: userFundo.fundoId,
        fundoNombre: userFundo.fundo.nombre,
        totalGastos,
        totalIngresos,
        balance,
        cantidadGastos: gastos._count,
        cantidadIngresos: ingresos._count,
        };
    }
}



