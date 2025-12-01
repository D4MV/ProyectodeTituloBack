import { Test, TestingModule } from '@nestjs/testing';
import { CuartelService } from './cuartel.service';

describe('CuartelService', () => {
  let service: CuartelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuartelService],
    }).compile();

    service = module.get<CuartelService>(CuartelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
