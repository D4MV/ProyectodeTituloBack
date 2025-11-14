import { Module } from '@nestjs/common';
import { FundoService } from './fundo.service';
import { FundoController } from './fundo.controller';
import { PrismaService } from 'src/pisma/prisma.service';
import { PrismaModule } from 'src/pisma/prisma.module';

@Module({
  controllers: [FundoController],
  providers: [FundoService, PrismaService],
  imports: [PrismaModule]
})
export class FundoModule {}
