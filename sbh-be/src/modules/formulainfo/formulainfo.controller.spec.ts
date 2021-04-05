import { Test, TestingModule } from '@nestjs/testing';
import { FormulainfoController } from './formulainfo.controller';

describe('FormulainfoController', () => {
  let controller: FormulainfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormulainfoController],
    }).compile();

    controller = module.get<FormulainfoController>(FormulainfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
