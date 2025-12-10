import { Test, TestingModule } from '@nestjs/testing';
import { CuadernoCampoService } from './cuaderno-campo.service';

describe('CuadernoCampoService', () => {
  let service: CuadernoCampoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuadernoCampoService],
    }).compile();

    service = module.get<CuadernoCampoService>(CuadernoCampoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
