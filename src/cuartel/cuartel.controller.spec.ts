import { Test, TestingModule } from '@nestjs/testing';
import { CuartelController } from './cuartel.controller';
import { CuartelService } from './cuartel.service';

describe('CuartelController', () => {
  let controller: CuartelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuartelController],
      providers: [CuartelService],
    }).compile();

    controller = module.get<CuartelController>(CuartelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
