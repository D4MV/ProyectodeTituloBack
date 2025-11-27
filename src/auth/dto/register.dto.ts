import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class RegisterDto {
    @IsString({ message:'Debe ser un nombre valido'})
    @MinLength(10,{ message:'El nombre debe tener al menos 10 caracteres'})
    nombre!: string;

    @IsEmail({}, { message:'debe ser un email valido'})
    @MinLength(10, {message:'el email debe tener al menos 10 caracteres'})
    email!: string;

    @IsString({ message:'Debe ser una contraseña valida'})
    @MinLength(6, { message:'la contraseña debe tener al menos 6 caracteres'})
    @MaxLength(20, { message:'la contraseña debe tener maximo 20 caracteres'})
    password!: string;
    
    @IsString({ message:'Debe ser un apellido valido'})
    @MinLength(10,{ message:'El apellido debe tener al menos 10 caracteres'})
    apellido!: string;
}
