import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserFundoService } from 'src/user-fundo/user-fundo.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { RegisterWithFundoDto } from './dto/registerWithFundo';
import { Prisma, PrismaClient } from '@prisma/client';
import { jwtConstants } from './constants/jwt.constants';

@Injectable()
export class AuthService {

    constructor(
        private prisma:PrismaService, 
        private readonly jwtService:JwtService, 
        private readonly jwtStrategy: JwtStrategy, 
        private readonly userFundoService: UserFundoService){
        
    }


    async registerWithFundo(registerData:RegisterWithFundoDto){
        const { nombre, apellido, email,password, fundo} = registerData;

        const existeUsuario = await this.prisma.user.findUnique({
            where:{email}
        });

        if(existeUsuario){
            throw new BadRequestException('El usuario ya existe');
        }

        const existeFundo = await this.prisma.fundo.findUnique({
            where:{ rut: fundo.rut }
        });

        if(existeFundo){
            throw new BadRequestException('El fundo ya existe');
        }

        const hashedPass = await bcrypt.hash(password, 10);

        try {
            const result = await this.prisma.$transaction(async (tx: Prisma.TransactionClient)=>{
                const prismaTx = tx as unknown as PrismaClient;

                const nuevoUsuario = await prismaTx.user.create({
                    data:{
                        nombre,
                        apellido,
                        email,
                        password: hashedPass,
                        emailVerified: true
                    }
                });
                console.log('Usuario creado:', nuevoUsuario);

                const getUsuario = await prismaTx.user.findUnique({
                    where:{email:nuevoUsuario.email},
                    select:{ id:true, email:true}
                })

                if(!getUsuario){
                    throw new BadRequestException('Error al obtener el usuario recién creado');
                }

                const { fundo: nuevoFundo, userFundo, rol} = await this.userFundoService.createFundoConAdmin(
                    getUsuario.id,
                    {
                        nombre: fundo.nombre,
                        direccion: fundo.direccion,
                        rut: fundo.rut,
                        rutDueno: fundo.rutDueno
                    },
                    prismaTx
                )
                return { nuevoUsuario, nuevoFundo, userFundo, rol };
            });

            const {password:_, ...userWithoutPassword} = result.nuevoUsuario;

            const token = await this.jwtStrategy.generateToken(result.nuevoUsuario.id)

            return {
                user: userWithoutPassword,
                fundo: result.nuevoFundo,
                rol: result.rol.nombre,
                token,
                mensaje: "Usuario y fundo creado exitosamente con su asignación de rol"
            }
        }catch(error){
            const message = error instanceof Error ? error.message : 'Error desconocido';
            throw new BadRequestException('Error al crear el usuario y fundo: ' + message);
        }
    }

    async register(registerDto:RegisterDto){
        const { nombre, apellido, email, password} = registerDto;
    
        const existeUsuario = await this.prisma.user.findUnique({
            where:{
                email
            }
        })

        if(existeUsuario){
        throw new Error('El usuario ya existe')
        }

        const hashedPass = await bcrypt.hash(password, 10)

        try {
            const newUser = await this.prisma.user.create({
                data:{
                    nombre,
                    apellido,
                    email,
                    password: hashedPass,
                    emailVerified: true
                }
            })

            const {password:_, ...userWithoutPassword} = newUser;
        
        return {newUser: userWithoutPassword, mensaje:"Usuario y fundo creado exitosamente"};
        }catch(error){
            const message = error instanceof Error ? error.message : 'Error desconocido';
            throw new Error('Error al crear el usuario: ' + message);
        }
    }


    async login({email,password}: LoginDto){
        const user = await this.prisma.user.findUnique({
            where:{
                email
            }, select:{
                id:true,
                password:true,
                email:true,
                nombre:true,
                apellido:true
            }
        })

        if(!user){
            throw new UnauthorizedException('el email no coincide')
        }

        const passwordMatch = await bcrypt.compare(password, user.password )

        if(!passwordMatch){
            throw new UnauthorizedException('la contraseña no coincide')
        }

        const { password: _, ...userWithoutPassword } = user;

        const token = await this.getTokens(user.id, user.email);
        
        if(!token){
            throw new UnauthorizedException('Error al generar el token');
        }
        await this.updateRefreshToken(user.id, token.refreshToken);
        
        const fundos = await this.prisma.userFundo.findMany({
            where: { userId: user.id },
            include: {
                fundo: true,
                rol: {
                    select: {
                        id: true,
                        nombre: true,
                        descripcion: true
                    }
                }
            }
        });

        return { token, user: userWithoutPassword, fundos }

    }
    
    async getTokens(userId: string, email: string) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(
                {sub: userId, email},
                {
                    secret: jwtConstants.secret,
                    expiresIn: '15m'
                },
            ),
            this.jwtService.signAsync(
                {sub: userId, email},
                {
                    secret: jwtConstants.secret,
                    expiresIn: '7d'
                },
            )
        ])

        return { accessToken,refreshToken };
    }

    async updateRefreshToken(userId:string, refreshToken:string | null){
        if (refreshToken) {
            const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
            await this.prisma.user.update({
                where:{ id: userId },
                data:{ refreshToken: hashedRefreshToken }
            });
        } else {
            await this.prisma.user.update({
                where: { id: userId },
                data: { refreshToken: null }
            });
        }
    }

    async refreshTokens(userId: string, refreshToken: string) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user || !user.refreshToken ) {
            throw new UnauthorizedException('Refresh token inválido');
        }

        const refreshTokenMatches = await bcrypt.compare(refreshToken, user.refreshToken)

        if (!refreshTokenMatches) {
            throw new UnauthorizedException('Refresh token inválido');
        }

        const tokens = await this.getTokens(user.id, user.email);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens
        
    }

    decodeToken(token: string) {
        return this.jwtService.decode(token);
    }
}
