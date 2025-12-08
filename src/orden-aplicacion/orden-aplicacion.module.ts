import { Module, forwardRef } from '@nestjs/common';
import { OrdenAplicacionService } from './orden-aplicacion.service';
import { OrdenAplicacionController } from './orden-aplicacion.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ExcelModule } from 'src/excel/excel.module';

@Module({
  controllers: [OrdenAplicacionController],
  providers: [OrdenAplicacionService],
  imports: [PrismaModule, forwardRef(() => ExcelModule)],
  exports: [OrdenAplicacionService],
})
export class OrdenAplicacionModule {}
