import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateCuartelDto {
    @IsNumber()
    @IsNotEmpty()
    hectareas: number;

    @IsString()
    @IsNotEmpty()
    nombre: string; 

    @IsUUID()
    @IsNotEmpty()
    plantaId: string; 

    @IsUUID()
    @IsNotEmpty()
    sueloId: string; 

    @IsUUID()
    @IsNotEmpty()
    terrenoId: string;
}