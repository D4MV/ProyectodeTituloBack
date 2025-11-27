import { Module } from '@nestjs/common';
import { UserFundoService } from './user-fundo.service';
import { UserFundoController } from './user-fundo.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [UserFundoController],
  providers: [UserFundoService, PrismaService],
  imports: [PrismaModule],
  exports: [UserFundoService],
  
})
export class UserFundoModule {}
