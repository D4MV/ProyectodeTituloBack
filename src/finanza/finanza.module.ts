import { Module } from '@nestjs/common';
import { FinanzaService } from './finanza.service';
import { FinanzaController } from './finanza.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FinanzaController],
  providers: [FinanzaService],
  imports: [PrismaModule]
})
export class FinanzaModule {}
