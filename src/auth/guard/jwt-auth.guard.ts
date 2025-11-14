import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { jwtConstants } from "../constants/jwt.constants";

const cookieExtractor = (req:Request): string | null => {
    if(req && req.cookies){
        return req.cookies['access_token']
    }
    return null;
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(){
        super({
            jwtFromRequest: cookieExtractor,
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret
        });
    }

    async validate(payload:any){
        return { id: payload.sub, email: payload.email}
    }
}