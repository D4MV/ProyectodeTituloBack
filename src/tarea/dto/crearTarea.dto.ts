import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export enum EstadoTarea {
    PENDIENTE = 'pendiente',
    EN_PROGRESO = 'en_progreso',
    COMPLETADA = 'completada',
    CANCELADA = 'cancelada'
}

export class CrearTareaDto {

    @IsString()
    @IsNotEmpty()
    nombre: string;
    
    @IsString()
    @IsNotEmpty()
    tipoTareaId: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @Type(()=> Date)
    @IsDate()
    fechaTermino: Date;

    @IsString()
    @IsEnum(EstadoTarea,{
        message: `El estado debe ser uno de los siguientes valores: ${Object.values(EstadoTarea).join(', ')}`
    })
    @IsNotEmpty()
    estado: string;


    @IsUUID()
    @IsOptional()
    productoId?: string | null;

    @IsUUID()
    @IsNotEmpty()
    cuartelId: string;


}