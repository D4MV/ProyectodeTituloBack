import { Module } from '@nestjs/common';
import { TerrenoService } from './terreno.service';
import { TerrenoController } from './terreno.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TerrenoController],
  providers: [TerrenoService, PrismaService],
})
export class TerrenoModule {}
