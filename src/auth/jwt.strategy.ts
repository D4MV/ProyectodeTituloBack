import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/pisma/prisma.service";
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from "./constants/jwt.constants";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private prisma:PrismaService, private readonly jwtService: JwtService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConstants.secret,
            ignoreExpiration: false,
        });
    }

    async validate(payload:any){
        const user = await this.prisma.user.findUnique({
            where:{
                id: payload.sub
            },select:{
                id:true,
                email:true
            }
        });
        if(!user) return null;
        return { id: user.id, email: user.email };
    }

    async generateToken(userId: string){

        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { userFundos: { include: { rol: true } } },
        });

        if(!user) return null;

        const payload = user;
        return this.jwtService.sign(payload);

    }
}
