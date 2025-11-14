import { Body, Controller, Get, Post, UseGuards, Request, Res } from '@nestjs/common';
import type { response, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(
        @Body()
        registerDto:RegisterDto
    ){
        return this.authService.register(registerDto);
    }

    @Post('Login')
    async login(@Body() loginDto:LoginDto, @Res({ passthrough: true }) response: Response) {
        const { token, userMail: user } = await this.authService.login(loginDto);
        
        response.cookie('access_token', token, {
            httpOnly: true,
            secure: false, 
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000, 
            path: '/' 
        });
        
        console.log('Login exitoso para usuario:', user.email);
        console.log('Token generado y cookie establecida');
            
        return { user };
    }

    @Post('logout')
    logout(@Res({passthrough:true}) response:Response){
        response.clearCookie('access_token');
        return {message: 'Logout exitoso' };
    }

    

    @Get('profile')
    @UseGuards(AuthGuard)
    profile(
        @Request()
        req,
    ){
        console.log('Profile endpoint accessed');
        console.log('Cookies recibidas:', req.cookies);
        console.log('Usuario autenticado:', req.user);
        return req.user;
    }
}
