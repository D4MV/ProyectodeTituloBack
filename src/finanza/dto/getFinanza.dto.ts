import { IsOptional, IsEnum, IsDateString, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';

export class GetFinanzasDto {
  @IsOptional()
  @IsEnum(['ingreso', 'gasto'])
  tipo?: 'ingreso' | 'gasto';

  @IsOptional()
  @Type(() => Date)
  fechaInicio?: Date;

  @IsOptional()
  @Type(() => Date)
  fechaFin?: Date;

  @IsOptional()
  @IsUUID('4')
  terrenoId?: string; 
}