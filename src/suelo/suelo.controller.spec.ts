import { Test, TestingModule } from '@nestjs/testing';
import { SueloController } from './suelo.controller';
import { SueloService } from './suelo.service';

describe('SueloController', () => {
  let controller: SueloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SueloController],
      providers: [SueloService],
    }).compile();

    controller = module.get<SueloController>(SueloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
