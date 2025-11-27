import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants/jwt.constants';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule} from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserFundoModule } from 'src/user-fundo/user-fundo.module';

@Module({
  controllers: [AuthController],
  providers: [JwtStrategy,AuthService],
  imports: [
            PrismaModule,
            UserFundoModule,
            PassportModule.register({ defaultStrategy: 'jwt' }),
            JwtModule.register({
              global:true,
              secret: jwtConstants.secret,
              signOptions: {expiresIn: '1d'}
            })
  ]
  ,exports:[PassportModule, JwtModule]
})
export class AuthModule {}
