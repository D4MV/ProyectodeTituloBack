import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

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


}