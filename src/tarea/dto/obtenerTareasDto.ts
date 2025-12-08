import { IsUUID, IsOptional } from "class-validator";


export class ObtenerTareasDto {
    @IsUUID()
    @IsOptional()
    cuartelId?: string;

    @IsUUID()
    @IsOptional()
    terrenoId?: string;
}