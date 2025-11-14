import { IsNotEmpty, IsString } from "class-validator";

export class CreateFundoDto {

    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @IsString({message: 'el nombre debe ser un string'})
    nombre:string;
    
    @IsNotEmpty({message: 'La direccion es obligatoria'})
    @IsString({message:'la direccion debe ser un string'})
    direccion:string;

    @IsNotEmpty({message: 'El código SAG del fundo es obligatorio'})
    @IsString({message:'el código SAG debe ser un string'})
    creadoPor:string;
    
    @IsNotEmpty({message: 'El código SAG del fundo es obligatorio'})
    @IsString({message:'el código SAG debe ser un string'})
    codeSagGrower:string;

    @IsNotEmpty({message: 'El identificador de vínculo de usuario-fundo es obligatorio'})
    @IsString({message:'userFundo debe ser un string'})
    userFundo:string;

}