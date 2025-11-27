import { IsNotEmpty, IsString } from "class-validator";

export class CreateFundoDto {

    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @IsString({message: 'el nombre debe ser un string'})
    nombre!:string;
    
    @IsNotEmpty({message: 'La direccion es obligatoria'})
    @IsString({message:'la direccion debe ser un string'})
    direccion!:string;

    @IsNotEmpty({message: 'El código SAG del fundo es obligatorio'})
    @IsString({message:'el código SAG debe ser un string'})
    rut!:string;

    @IsNotEmpty({message: 'El run del dueño es obligatorio'})
    @IsString({message:'el run del dueño debe ser un string'})
    rutDueno!:string;

    @IsNotEmpty({message: 'El código SAG del fundo es obligatorio'})
    @IsString({message:'el código SAG debe ser un string'})
    creadoPor!:string;
    

}