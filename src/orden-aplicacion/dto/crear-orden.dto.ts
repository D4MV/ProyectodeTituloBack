import { IsUUID, IsNotEmpty, IsNumber, IsString, IsOptional, IsInt, Min } from 'class-validator';

export class CrearOrdenAplicacionDto {
  @IsUUID()
  @IsNotEmpty()
  tareaId: string;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  dosis: number;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  cantidadApli: number;

  @IsString()
  @IsNotEmpty()
  objetivo: string;

  @IsString()
  @IsNotEmpty()
  formaAplicacion: string;

  @IsInt()
  @Min(0)
  @IsNotEmpty()
  mojamiento: number;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  numMaquinaria: number;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  necesidadTotal: number;

  @IsString()
  @IsNotEmpty()
  necesidadMaquinaria: string;


  @IsInt()
  @IsOptional()
  numAutSag?: number;

  @IsInt()
  @IsOptional()
  numLote?: number;

  @IsInt()
  @IsOptional()
  numGuia?: number;
}
