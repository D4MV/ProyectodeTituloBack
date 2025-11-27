import { IsEmail, IsString, MaxLength, MinLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FundoDataDto } from 'src/user-fundo/dto/fundo.dto';

export class RegisterWithFundoDto {
    @IsString({ message: 'Debe ser un nombre válido' })
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    nombre!: string;

    @IsString({ message: 'Debe ser un apellido válido' })
    @MinLength(3, { message: 'El apellido debe tener al menos 3 caracteres' })
    apellido!: string;

    @IsEmail({}, { message: 'Debe ser un email válido' })
    email!: string;

    @IsString({ message: 'Debe ser una contraseña válida' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    @MaxLength(20, { message: 'La contraseña debe tener máximo 20 caracteres' })
    password!: string;

    @ValidateNested()
    @Type(() => FundoDataDto)
    fundo!: FundoDataDto;
}


