import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FundoModule } from './fundo/fundo.module';

@Module({
  imports: [UsersModule, AuthModule, FundoModule, FundoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
