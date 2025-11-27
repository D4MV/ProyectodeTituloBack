import { Test, TestingModule } from '@nestjs/testing';
import { FundoController } from './fundo.controller';
import { FundoService } from './fundo.service';

describe('FundoController', () => {
  let controller: FundoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundoController],
      providers: [{ provide: FundoService, useValue: {} }],
    }).compile();

    controller = module.get<FundoController>(FundoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
