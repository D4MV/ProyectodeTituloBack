import { Test, TestingModule } from '@nestjs/testing';
import { SueloService } from './suelo.service';

describe('SueloService', () => {
  let service: SueloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SueloService],
    }).compile();

    service = module.get<SueloService>(SueloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
