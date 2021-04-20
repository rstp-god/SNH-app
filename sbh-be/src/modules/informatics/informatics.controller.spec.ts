import { Test, TestingModule } from '@nestjs/testing';
import { InformaticsController } from './informatics.controller';

describe('InformaticsController', () => {
  let controller: InformaticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InformaticsController],
    }).compile();

    controller = module.get<InformaticsController>(InformaticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
