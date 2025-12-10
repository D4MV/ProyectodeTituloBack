import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  
  try {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    }));

    const allowedOrigins = process.env.ALLOWED_ORIGINS 
      ? process.env.ALLOWED_ORIGINS.split(',') 
      : ['http://localhost:5173'];

    app.enableCors({
      origin: allowedOrigins,
      credentials: true,
    });

    app.use(cookieParser());


    const port = process.env.PORT || 3000;
    

    app.enableShutdownHooks();

    await app.listen(port);
    
    logger.log(`Aplicación corriendo en el puerto ${port}`);
    logger.log(`Entorno: ${process.env.NODE_ENV || 'development'}`);
    logger.log(`CORS habilitado para: ${allowedOrigins.join(', ')}`);
  } catch (error) {
    logger.error('Error al iniciar la aplicación', error.stack);
    process.exit(1);
  }
}

bootstrap();
