import { Test, TestingModule } from '@nestjs/testing';
import { TestconnectionController } from './testconnection.controller';

describe('TestconnectionController', () => {
  let controller: TestconnectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestconnectionController],
    }).compile();

    controller = module.get<TestconnectionController>(TestconnectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
