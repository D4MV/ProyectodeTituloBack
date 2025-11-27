import { Test, TestingModule } from '@nestjs/testing';
import { TerrenoController } from './terreno.controller';
import { TerrenoService } from './terreno.service';

describe('TerrenoController', () => {
  let controller: TerrenoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerrenoController],
      providers: [TerrenoService],
    }).compile();

    controller = module.get<TerrenoController>(TerrenoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
