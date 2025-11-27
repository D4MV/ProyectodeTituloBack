import { Module } from '@nestjs/common';
import { FundoService } from './fundo.service';
import { FundoController } from './fundo.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [FundoController],
  providers: [FundoService],
  imports: [PrismaModule]
})
export class FundoModule {}
