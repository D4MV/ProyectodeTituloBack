import { Test, TestingModule } from '@nestjs/testing';
import { PlantaService } from './planta.service';

describe('PlantaService', () => {
  let service: PlantaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantaService],
    }).compile();

    service = module.get<PlantaService>(PlantaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
