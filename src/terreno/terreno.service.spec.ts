import { Test, TestingModule } from '@nestjs/testing';
import { TerrenoService } from './terreno.service';

describe('TerrenoService', () => {
  let service: TerrenoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerrenoService],
    }).compile();

    service = module.get<TerrenoService>(TerrenoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
