import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get()
  check() {
    return this.healthCheckService.check();
  }
}
