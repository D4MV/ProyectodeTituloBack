import { Controller } from '@nestjs/common';
import { TareaService } from './tarea.service';

@Controller('tarea')
export class TareaController {
  constructor(private readonly tareaService: TareaService) {}
}
