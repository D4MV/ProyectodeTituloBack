import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString, IsUUID, Validate, ValidateNested } from 'class-validator';

export class CreateCuartelInputDto {
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

}

export class CreateTerrenoDto {

    @IsNotEmpty({ message: 'El nombre del terreno es obligatorio' })
    @IsString() 
    nombre!:string;

    @IsNotEmpty({ message: 'El área en hectáreas es obligatoria' })
    @IsNumber()
    areaHectareas!: number;

    @IsNotEmpty({ message: 'La latitud es obligatoria' })
    @IsNumber()
    lat!: number;

    @IsNotEmpty({ message: 'La longitud es obligatoria' })
    @IsNumber()
    lon!: number;

    @IsNotEmpty({ message: 'El código SAG es obligatorio' })
    @IsString()
    codeSagGrower!: string;
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateCuartelInputDto)
    cuarteles?: CreateCuartelInputDto[];
}