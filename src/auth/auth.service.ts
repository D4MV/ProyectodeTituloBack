import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/pisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Injectable()
export class AuthService {

    constructor(private prisma:PrismaService, private readonly jwtService:JwtService, private readonly jwtStrategy: JwtStrategy){
        
    }

    async register(registerDto:RegisterDto){
        const { nombre, email, password } = registerDto;
    
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
                    email,
                    password: hashedPass,
                    emailVerified: true
                }
            })

        return newUser;
        }catch(error){
            throw new Error('Error al crear el usuario: ' + error.message);
        }
    }


    async login({email,password}: LoginDto){
        const userMail = await this.prisma.user.findUnique({
            where:{
                email
            }, select:{
                id:true,
                password:true,
                email:true,
                nombre:true
            }
        })

        if(!userMail){
            throw new UnauthorizedException('el email no coincide')
        }

        const passwordMatch = await bcrypt.compare(password, userMail.password )

        if(!passwordMatch){
            throw new UnauthorizedException('la contraseña no coincide')
        }

        const { password: _, ...userWithoutPassword } = userMail;

        const token = await this.jwtStrategy.generateToken(userMail.id);

        return { token, userMail: userWithoutPassword }

        }
}
