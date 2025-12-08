import { Module } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { TareaController } from './tarea.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TareaController],
  providers: [TareaService],
  imports: [PrismaModule],
})
export class TareaModule {}
