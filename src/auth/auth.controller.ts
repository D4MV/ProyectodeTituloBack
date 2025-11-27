import { Body, Controller, Get, Post, UseGuards, Request, Res, HttpStatus } from '@nestjs/common';
import type { Request as ExpressRequest, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterWithFundoDto } from './dto/registerWithFundo';
import { JwtAuthGuard } from './guard/jwt-auth.guard';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('registerWithFundo')
    async registerWhithFundo(@Body() registerData: RegisterWithFundoDto) {
        return this.authService.registerWithFundo(registerData);
    }

    @Post('register')
    register(
        @Body()
        registerDto:RegisterDto
    ){
        return this.authService.register(registerDto);
    }

    @Post('Login')
    async login(@Body() loginDto:LoginDto, @Res({ passthrough: true }) response: Response) {
        const result = await this.authService.login(loginDto);
        

        response.cookie('access_token', result.token.accessToken, {
            httpOnly: true,
            secure: false, 
            sameSite: 'lax',
            expires: new Date(Date.now() + 15 * 60 * 1000), 
            path: '/' 
        });

        response.cookie('refresh_token', result.token.refreshToken, {
            httpOnly: true,
            secure: false, 
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
            path: '/'
        });

        console.log('Login exitoso para usuario:', result.user.email);
        console.log('Tokens generados y cookies establecidas');
        return {
            user: result.user,
            fundos: result.fundos,
            message: 'Login exitoso' 
        }
    }

    @Post('refresh')
    async refreshTokens(@Request() req: ExpressRequest, @Res({ passthrough: true }) response: Response) {
        const refreshToken = req.cookies['refresh_token'];
        if (!refreshToken) {
            response.status(HttpStatus.UNAUTHORIZED).send('Refresh token no encontrado');
            return;
        }

        try {

            const decoded = this.authService.decodeToken(refreshToken) as { sub: string };
            if (!decoded || !decoded.sub) {
                throw new Error('Invalid token payload');
            }
            const userId = decoded.sub;


            const tokens = await this.authService.refreshTokens(userId, refreshToken);

            response.cookie('access_token', tokens.accessToken, {
                httpOnly: true,
                secure: false, 
                sameSite: 'lax',
                expires: new Date(Date.now() + 15 * 60 * 1000), 
                path: '/'
            });

            response.cookie('refresh_token', tokens.refreshToken, {
                httpOnly: true,
                secure: false, 
                sameSite: 'lax',
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
                path: '/'
            });
            return { message: 'Token refrescado exitosamente' };

        } catch (error) {
            response.clearCookie('access_token');
            response.clearCookie('refresh_token');
            response.status(HttpStatus.UNAUTHORIZED).send('Refresh token inválido o expirado');
            return;
        }
    }

    @Post('logout')
    @UseGuards(JwtAuthGuard)
    async logout(@Res({ passthrough: true }) response: Response, @Request() req) {
        console.log('=== LOGOUT EJECUTADO ===');
        console.log('Usuario haciendo logout:', req.user);


        await this.authService.updateRefreshToken(req.user.id, null);


        response.clearCookie('access_token');
        response.clearCookie('refresh_token');
        
        console.log('Cookies borradas en logout');
        return { message: 'Logout exitoso' };
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    profile(@Request() req: ExpressRequest){
        console.log('=== PROFILE ENDPOINT ===');
        console.log('Cookies recibidas:', req.cookies);
        console.log('Authorization header:', req.headers.authorization);
        console.log('Usuario autenticado:', req.user);
        return req.user;
    }
}
