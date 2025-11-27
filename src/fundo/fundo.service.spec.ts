import { Test, TestingModule } from '@nestjs/testing';
import { FundoService } from './fundo.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('FundoService', () => {
  let service: FundoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FundoService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<FundoService>(FundoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
