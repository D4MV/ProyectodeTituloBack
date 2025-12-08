import { Module, forwardRef } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { ExcelController } from './excel.controller';
import { OrdenAplicacionModule } from 'src/orden-aplicacion/orden-aplicacion.module';

@Module({
  controllers: [ExcelController],
  providers: [ExcelService],
  imports: [forwardRef(() => OrdenAplicacionModule)],
  exports: [ExcelService],
})
export class ExcelModule {}
