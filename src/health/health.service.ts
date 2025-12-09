import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HealthCheckService {
  private readonly logger = new Logger(HealthCheckService.name);

  constructor(private prisma: PrismaService) {}

  async check() {
    const healthcheck = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      database: 'disconnected',
      environment: process.env.NODE_ENV || 'development',
    };

    try {
      // Verificar conexión a la base de datos
      await this.prisma.$queryRaw`SELECT 1`;
      healthcheck.database = 'connected';
    } catch (error) {
      this.logger.error('Error al verificar la base de datos', error.stack);
      healthcheck.status = 'error';
      healthcheck.database = 'disconnected';
    }

    return healthcheck;
  }
}
