import { Module } from '@nestjs/common';
import { SueloService } from './suelo.service';
import { SueloController } from './suelo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SueloController],
  providers: [SueloService],
  imports: [PrismaModule]
})
export class SueloModule {}
