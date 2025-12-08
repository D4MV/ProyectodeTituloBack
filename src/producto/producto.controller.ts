import { Controller, Get } from '@nestjs/common';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get("tomar")
  sacarProductos() {
    return this.productoService.sacarProductos();
  }
}
