import { Test, TestingModule } from '@nestjs/testing';
import { UserFundoController } from './user-fundo.controller';
import { UserFundoService } from './user-fundo.service';

describe('UserFundoController', () => {
  let controller: UserFundoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFundoController],
      providers: [{ provide: UserFundoService, useValue: {} }],
    }).compile();

    controller = module.get<UserFundoController>(UserFundoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
