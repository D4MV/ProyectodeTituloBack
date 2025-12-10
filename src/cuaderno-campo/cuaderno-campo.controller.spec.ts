import { Test, TestingModule } from '@nestjs/testing';
import { CuadernoCampoController } from './cuaderno-campo.controller';
import { CuadernoCampoService } from './cuaderno-campo.service';

describe('CuadernoCampoController', () => {
  let controller: CuadernoCampoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuadernoCampoController],
      providers: [CuadernoCampoService],
    }).compile();

    controller = module.get<CuadernoCampoController>(CuadernoCampoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
