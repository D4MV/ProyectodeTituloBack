import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FundoDataDto } from './dto/fundo.dto';
import { PrismaClient } from '@prisma/client';
import { CreateUserEncargadoDto } from './dto/createUserEncargado';
import * as bcrypt from 'bcrypt';
import { AsignarEncargadoATerrenoDto } from './dto/asignarEncargado.dto';
import { NOMEM } from 'dns';

@Injectable()
export class UserFundoService {
    constructor(private prisma: PrismaService) {}

        async onModuleInit() {
            await this.ensureAdminRoleExists();
        }

        private async ensureAdminRoleExists() {
            await this.prisma.rol.upsert({
                where: { nombre: 'ADMIN' },
                update: {},
                create: {
                    nombre: 'ADMIN',
                    descripcion: 'Administrador y creador del fundo'
                }
            });
        }

    async createFundoConAdmin(
        userId: string, 
        fundoData: FundoDataDto,
        tx?: PrismaClient
    ) {

        const prisma = tx || this.prisma;
        const adminRol = await prisma.rol.findUnique({
            where: { nombre: 'ADMIN' }
        });

        if(!adminRol){
            throw new Error('Rol ADMIN no encontrado');
        }

        const fundo = await prisma.fundo.create({
            data: {
                nombre: fundoData.nombre,
                direccion: fundoData.direccion,
                rut: fundoData.rut,
                rutDueno: fundoData.rutDueno, 
                creadoPor: userId,
            },
        });
        console.log('Fundo creado:', fundo);

            const userFundo = await prisma.userFundo.create({
                data: {
                    userId,
                    fundoId: fundo.id,
                    rolId: adminRol.id
                },
                include: {
                    rol: true,
                    fundo: true
                }
            });

            return { fundo, userFundo, rol: adminRol };
        }

        async getFundosByUserId(userId: string) {
            return this.prisma.userFundo.findMany({
            where: { userId },
            include: {
                fundo: true,
                rol: {
                    select: {
                        id: true,
                        nombre: true,
                        descripcion: true
                    }
                }
            }})
        }

        async tieneAccesoalFundo(userId: string, fundoId: string): Promise<boolean> {
            const userFundo = await this.prisma.userFundo.findFirst({
                where: { userId, fundoId }
            });
            return !!userFundo;
        }

        async esAdminDelFundo(userId:string, fundoId:string):Promise<boolean>{
            const userFundo = await this.prisma.userFundo.findFirst({
                where:{ userId, fundoId, rol: {nombre: 'ADMIN'}}
            });
            return !!userFundo;
        }

        async getEncargadosByFundo(adminUserId:string) {
            const adminUserFundo = await this.prisma.userFundo.findFirst({
                where:{
                    userId: adminUserId,
                    rol: { nombre: 'ADMIN'}
                }
            })

            if(!adminUserFundo){
                throw new UnauthorizedException("no tiene permisos de administrador");
            }

            const fundoId = adminUserFundo.fundoId;

            const encargados = await this.prisma.userFundo.findMany({
                where:{
                    fundoId: fundoId,
                    rol: { nombre: 'ENCARGADO'}
                },
                include:{
                    user: { select: { id:true, nombre:true, email:true }},
                }
            })
            return encargados.map(encargados =>({
                id: encargados.id,
                nombre: encargados.user.nombre,
                email: encargados.user.email
                
            }));
        }

        async crearUserEncargadoEnFundo(createUserEncargadoDto:CreateUserEncargadoDto, adminUserId:string){
            const {nombre, apellido, email, password} = createUserEncargadoDto;

            const adminUserFundo = await this.prisma.userFundo.findFirst({
                where:{ userId: adminUserId},
                include:{ rol: true, fundo: true}
            })

            if(!adminUserFundo || adminUserFundo.rol.nombre !== 'ADMIN'){
                throw new UnauthorizedException("Solo un administrador puede crear un usuario encargado en el fundo");
            }

            const fundoId = adminUserFundo.fundoId;

            const existingUser = await this.prisma.user.findUnique({
                where: {email}
            })

            if(existingUser){
                throw new UnauthorizedException("Ya existe un usuario con este correo electrónico");
            }

            const rolEncargado = await this.prisma.rol.findUnique({
                where:{ nombre: 'ENCARGADO'}
            });
            if(!rolEncargado){
                throw new UnauthorizedException("El rol Encargado no existe");
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            try{
                const newUserInFundo = await this.prisma.$transaction( async (tx)=>{

                    const newUser = await tx.user.create({
                        data:{
                            nombre,
                            apellido,
                            email,
                            password: hashedPassword
                        }
                    });

                    const newUserFundo = await tx.userFundo.create({
                        data:{
                            userId: newUser.id,
                            fundoId: fundoId,
                            rolId:rolEncargado.id
                        },
                        include:{
                            user: { select: { id:true, nombre:true, email:true }},
                            rol:  { select: { nombre:true }},
                            fundo: { select: { nombre:true }}
                        }
                    })

                    return newUserFundo;
                });
                
            } catch (error) {
                throw new UnauthorizedException("Error al crear el usuario encargado");
            }
        }

        async asignarEncargadoATerreno(asignarEncargadoATerrenoDto:AsignarEncargadoATerrenoDto, adminUserId:string){
            const { terrenoId, userFundoId } = asignarEncargadoATerrenoDto;

            const adminUserFundo = await this.prisma.userFundo.findFirst({
                where: { userId: adminUserId, rol:{nombre:"ADMIN"} },
                include: { rol: true, fundo: true }
            });

            if (!adminUserFundo) {
                throw new UnauthorizedException("Solo un administrador puede asignar encargados a terrenos");
            }

            const terreno = await this.prisma.terreno.findUnique({
                where: { id: terrenoId },
                include: { userFundo: true }
            })
            const encargadoUserFundo = await this.prisma.userFundo.findUnique({
                where: { id: userFundoId },
                include: { rol: true }
            });

            if (!terreno) {
                throw new NotFoundException("El terreno no existe");
            }

            if (!encargadoUserFundo){
                throw new NotFoundException("El usuario encargado no existe");
            }

            if (encargadoUserFundo.fundoId !== adminUserFundo.fundoId){
                throw new BadRequestException("El administrador solo puede asignar encargados dentro de su propio fundo");
            }

            if (encargadoUserFundo.rol.nombre !== 'ENCARGADO'){
                throw new UnauthorizedException("El usuario no tiene el rol de encargado");
            }

            if (terreno.userFundoId !== adminUserFundo.id || encargadoUserFundo.fundoId !== adminUserFundo.fundoId) {
                throw new BadRequestException("El administrador solo puede asignar encargados dentro de su propio fundo");
            }

            return this.prisma.encargados.create({
                data:{
                    terrenoId:terrenoId,
                    userFundoId:userFundoId
                },
                include:{
                    terreno:{ select:{ nombre:true } },
                    userFundo:{
                        select:{
                            user: { select: { id:true, nombre:true, email:true }},
                            rol:  { select: { nombre:true }},
                            fundo: { select: { nombre:true }}
                        }
                    }
                }
            })
    
        }

        async obtenerEncargadosDeTerreno(terrenoId:string, adminUserId:string){
            const adminUserFundo = await this.prisma.userFundo.findFirst({
                where: { userId: adminUserId, rol:{nombre:"ADMIN"} },
                include: { rol: true, fundo: true }
            });

            if (!adminUserFundo) {
                throw new UnauthorizedException("Solo un administrador puede ver los encargados de un terreno");
            }

            const terreno = await this.prisma.terreno.findUnique({
                where: { id: terrenoId },
                include: { userFundo: true }
            })

            if (!terreno) {
                throw new NotFoundException("El terreno no existe");
            }

            if (terreno.userFundo.fundoId !== adminUserFundo.fundoId) {
                throw new BadRequestException("El administrador solo puede ver los encargados dentro de su propio fundo");
            }

            const encargados = await this.prisma.encargados.findMany({
                where:{ terrenoId: terrenoId },
                include:{
                    userFundo:{
                        include:{
                            user: { select: { id:true, nombre:true, email:true }},
                            rol:  { select: { nombre:true }},
                            fundo: { select: { nombre:true }}
                        }
                    }
                }
            })
            return encargados.map(encargados =>({
                id: encargados.userFundo.id,
                nombre: encargados.userFundo.user.nombre,
                email: encargados.userFundo.user.email
            }));
        }
}