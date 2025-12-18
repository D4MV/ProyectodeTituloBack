import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FundoModule } from './fundo/fundo.module';
import { UserFundoModule } from './user-fundo/user-fundo.module';
import {TerrenoModule} from './terreno/terreno.module';
import { PlantaModule } from './planta/planta.module';
import { CuartelModule } from './cuartel/cuartel.module';
import { SueloModule } from './suelo/suelo.module';
import { TareaModule } from './tarea/tarea.module';
import { ProductoModule } from './producto/producto.module';
import { OrdenAplicacionModule } from './orden-aplicacion/orden-aplicacion.module';
import { ExcelModule } from './excel/excel.module';
import { HealthModule } from './health/health.module';
import { CuadernoCampoModule } from './cuaderno-campo/cuaderno-campo.module';
import { FinanzaModule } from './finanza/finanza.module';

@Module({
  imports: [ 
    AuthModule, 
    FundoModule, 
    FundoModule, 
    UserFundoModule, 
    TerrenoModule, 
    PlantaModule, 
    CuartelModule, 
    SueloModule, 
    TareaModule, 
    ProductoModule, 
    OrdenAplicacionModule, 
    ExcelModule,
    HealthModule,
    CuadernoCampoModule,
    FinanzaModule 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
