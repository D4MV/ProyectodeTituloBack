import { Test, TestingModule } from '@nestjs/testing';
import { OrdenAplicacionService } from './orden-aplicacion.service';

describe('OrdenAplicacionService', () => {
  let service: OrdenAplicacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdenAplicacionService],
    }).compile();

    service = module.get<OrdenAplicacionService>(OrdenAplicacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
