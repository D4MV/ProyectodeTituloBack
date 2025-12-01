import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlantaService {

    constructor(private prisma: PrismaService){}

    async tomarDatosPlanta() {
        const planta = await this.prisma.planta.findMany();
        return planta
    }
}
