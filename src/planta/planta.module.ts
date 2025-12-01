import { Module } from '@nestjs/common';
import { PlantaService } from './planta.service';
import { PlantaController } from './planta.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PlantaController],
  providers: [PlantaService],
  imports: [PrismaModule],
})
export class PlantaModule {}
