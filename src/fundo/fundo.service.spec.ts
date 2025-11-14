import { Test, TestingModule } from '@nestjs/testing';
import { FundoService } from './fundo.service';

describe('FundoService', () => {
  let service: FundoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundoService],
    }).compile();

    service = module.get<FundoService>(FundoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
