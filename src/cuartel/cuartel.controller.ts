import { Controller } from '@nestjs/common';
import { CuartelService } from './cuartel.service';

@Controller('cuartel')
export class CuartelController {
  constructor(private readonly cuartelService: CuartelService) {}
}
