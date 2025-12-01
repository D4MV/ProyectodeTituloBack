import { Injectable } from '@nestjs/common';
import { CreateSueloDto } from './dto/create-suelo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SueloService {
  constructor(private prisma: PrismaService) {}

  create(createSueloDto: CreateSueloDto) {
    return 'This action adds a new suelo';
  }

  async sacarSuelos() {
    const suelos = await this.prisma.suelo.findMany();
    return suelos;
  }
}
