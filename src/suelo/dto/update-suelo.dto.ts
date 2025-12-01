import { PartialType } from '@nestjs/mapped-types';
import { CreateSueloDto } from './create-suelo.dto';

export class UpdateSueloDto extends PartialType(CreateSueloDto) {}
