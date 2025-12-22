import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductoService {
    private readonly logger = new Logger(ProductoService.name);

    constructor(private prisma: PrismaService) {}

    async sacarProductos() {
        try {
            this.logger.log('Intentando obtener productos...');
            const productos = await this.prisma.producto.findMany();
            this.logger.log(`Se encontraron ${productos.length} productos`);
            return productos;
        } catch (error) {
            this.logger.error('Error al obtener productos:', error);
            this.logger.error('Stack trace:', error.stack);
            this.logger.error('Prisma error code:', error.code);
            throw new InternalServerErrorException({
                message: 'Error al obtener los productos',
                error: error.message,
                code: error.code
            });
        }
    }
}
