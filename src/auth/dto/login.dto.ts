import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class LoginDto {

    @IsEmail({}, { message:'debe ser un email valido'})
    @MinLength(10, {message:'el email debe tener al menos 10 caracteres'})
    email!: string;

    @IsString({ message:'Debe ser una contraseña valida'})
    @MinLength(6, { message:'la contraseña debe tener al menos 6 caracteres'})
    @MaxLength(20, { message:'la contraseña debe tener maximo 20 caracteres'})
    password!: string;
}
