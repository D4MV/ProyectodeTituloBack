import { Test, TestingModule } from '@nestjs/testing';
import { FinanzaService } from './finanza.service';

describe('FinanzaService', () => {
  let service: FinanzaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinanzaService],
    }).compile();

    service = module.get<FinanzaService>(FinanzaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
