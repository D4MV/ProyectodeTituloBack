import { Module } from '@nestjs/common';
import { CuadernoCampoService } from './cuaderno-campo.service';
import { CuadernoCampoController } from './cuaderno-campo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ExcelModule } from 'src/excel/excel.module';

@Module({
  controllers: [CuadernoCampoController],
  providers: [CuadernoCampoService],
  imports:[PrismaModule, ExcelModule],
})
export class CuadernoCampoModule {}
