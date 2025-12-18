import { Test, TestingModule } from '@nestjs/testing';
import { FinanzaController } from './finanza.controller';
import { FinanzaService } from './finanza.service';

describe('FinanzaController', () => {
  let controller: FinanzaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinanzaController],
      providers: [FinanzaService],
    }).compile();

    controller = module.get<FinanzaController>(FinanzaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
