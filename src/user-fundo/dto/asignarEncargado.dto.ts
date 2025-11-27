import { IsUUID } from 'class-validator';

export class AsignarEncargadoATerrenoDto {
  @IsUUID()
  terrenoId: string;

  @IsUUID()
  userFundoId: string; 
}