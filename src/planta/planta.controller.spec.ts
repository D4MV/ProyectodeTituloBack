import { Test, TestingModule } from '@nestjs/testing';
import { PlantaController } from './planta.controller';
import { PlantaService } from './planta.service';

describe('PlantaController', () => {
  let controller: PlantaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantaController],
      providers: [PlantaService],
    }).compile();

    controller = module.get<PlantaController>(PlantaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
