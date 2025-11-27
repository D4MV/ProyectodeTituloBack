import {  IsString, MinLength } from 'class-validator';
import { Type } from 'class-transformer';

export class FundoDataDto {
    @IsString({ message: 'El nombre del fundo es obligatorio' })
    @MinLength(3, { message: 'El nombre del fundo debe tener al menos 3 caracteres' })
    nombre!: string;

    @IsString({ message: 'La dirección es obligatoria' })
    @MinLength(5, { message: 'La dirección debe tener al menos 5 caracteres' })
    direccion!: string;

    @IsString({ message: 'El RUT es obligatorio' })
    @MinLength(8, { message: 'El RUT debe tener al menos 8 caracteres' })
    rut!: string;

    @IsString({ message: 'El RUT del dueño es obligatorio' })
    @MinLength(8, { message: 'El RUT del dueño debe tener al menos 8 caracteres' })
    rutDueno!: string;

}