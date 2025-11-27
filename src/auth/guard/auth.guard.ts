import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from '../constants/jwt.constants';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly jwtService:JwtService){}

  async canActivate(context: ExecutionContext):Promise<boolean>{

    const request = context.switchToHttp().getRequest();
    

    const token = this.extractTokenFromCookie(request) || this.extractTokenFromHeader(request);
    
    console.log('Token encontrado:', !!token);
    console.log('Cookies:', request.cookies);

    if(!token){
      throw new UnauthorizedException('No token provided');
    }

    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: jwtConstants.secret
        }
      );

      request.user = payload;
      console.log('Token válido, usuario autenticado:', payload);

    }catch(error){
      if (error instanceof Error) {
        console.log('Error verificando token:', error.message);
      }
      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }

  private extractTokenFromCookie(request:Request):string | undefined{
    return request.cookies?.access_token;
  }

  private extractTokenFromHeader(request:Request):string | undefined{
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
