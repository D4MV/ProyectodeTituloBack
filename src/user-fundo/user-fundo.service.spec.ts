import { Test, TestingModule } from '@nestjs/testing';
import { UserFundoService } from './user-fundo.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('UserFundoService', () => {
  let service: UserFundoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserFundoService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<UserFundoService>(UserFundoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
