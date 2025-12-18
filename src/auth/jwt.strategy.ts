import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from "./constants/jwt.constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private prisma:PrismaService, private readonly jwtService: JwtService){
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                ExtractJwt.fromAuthHeaderAsBearerToken(),
                (request) => {
                    return request?.cookies?.access_token;
                }
            ]),
            secretOrKey: jwtConstants.secret,
            ignoreExpiration: false,
        });
    }

    async validate(payload:any){
        console.log('JwtStrategy validate payload:', payload);
        const user = await this.prisma.user.findUnique({
            where:{
                id: payload.sub
            },select:{
                nombre:true,
                apellido:true,
                id:true,
                email:true
            }
        });
        if(!user) return null;
        return { id: user.id, email: user.email, nombre: user.nombre, apellido: user.apellido };
    }

    async generateToken(userId: string){
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { userFundos: { include: { rol: true } } },
        });

        if(!user) return null;

        const payload = {
            sub: user.id,
            email: user.email,
            nombre: user.nombre,
            apellido: user.apellido,
            iat: Math.floor(Date.now() / 1000),
        };
        return this.jwtService.sign(payload);
    }

    async generateTokens(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { userFundos: { include: { rol: true } } },
        });

        if (!user) return null;

        const payload = {
            sub: user.id,
            email: user.email,
            nombre: user.nombre,
            apellido: user.apellido,
            type: 'access'
        };

        const refreshPayload = {
            sub: user.id,
            type: 'refresh'
        };

        return {
            accessToken: this.jwtService.sign(payload, { expiresIn: '15m' }),
            refreshToken: this.jwtService.sign(refreshPayload, { expiresIn: '7d' }) 
        };
    }
}
