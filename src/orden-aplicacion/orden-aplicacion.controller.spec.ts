import { Test, TestingModule } from '@nestjs/testing';
import { OrdenAplicacionController } from './orden-aplicacion.controller';
import { OrdenAplicacionService } from './orden-aplicacion.service';

describe('OrdenAplicacionController', () => {
  let controller: OrdenAplicacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdenAplicacionController],
      providers: [OrdenAplicacionService],
    }).compile();

    controller = module.get<OrdenAplicacionController>(OrdenAplicacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
