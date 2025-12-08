import { IsUUID, IsEnum } from "class-validator";
import { EstadoTarea } from "./crearTarea.dto";

export class actualizarTareaDto {
    @IsUUID()
    tareaId: string;

    @IsEnum(EstadoTarea, {
        message: `El estado debe ser uno de los siguientes valores: ${Object.values(EstadoTarea).join(', ')}`
    })
    estado: EstadoTarea;
}