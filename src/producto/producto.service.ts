import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductoService {
    constructor(private prisma: PrismaService) {}


    async sacarProductos() {
        const productos = await this.prisma.producto.findMany();
        return productos;
    }



}
