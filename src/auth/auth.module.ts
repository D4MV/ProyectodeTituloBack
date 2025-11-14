import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants/jwt.constants';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/pisma/prisma.service';
import { JwtModule} from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AuthController],
  providers: [JwtStrategy,AuthService, PrismaService],
  imports: [UsersModule,
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
