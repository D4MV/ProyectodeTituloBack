import { Module } from '@nestjs/common';
import { CuartelService } from './cuartel.service';
import { CuartelController } from './cuartel.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CuartelController],
  providers: [CuartelService],
  imports: [PrismaModule],
})
export class CuartelModule {}
