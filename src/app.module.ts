import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FundoModule } from './fundo/fundo.module';
import { UserFundoModule } from './user-fundo/user-fundo.module';
import {TerrenoModule} from './terreno/terreno.module';

@Module({
  imports: [ AuthModule, FundoModule, FundoModule, UserFundoModule, TerrenoModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
