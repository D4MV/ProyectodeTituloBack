import { IsEnum, IsNumber, IsString, IsOptional, IsDate, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateFinanzaDto {
  @IsEnum(['ingreso', 'gasto'], { message: 'El tipo debe ser "ingreso" o "gasto"' })
  tipo: 'ingreso' | 'gasto';

  @IsNumber({}, { message: 'El monto debe ser un número' })
  @Type(() => Number)
  monto: number;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser un texto' })
  descripcion?: string;

  @Type(() => Date)
  @IsDate({ message: 'La fecha debe ser una fecha válida' })
  fecha: Date;

  @IsUUID('4', { message: 'El ID del terreno debe ser un UUID válido' })
  terrenoId: string;
}