import { Test, TestingModule } from '@nestjs/testing';
import { PhysicsController } from './physics.controller';

describe('PhysicsController', () => {
  let controller: PhysicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhysicsController],
    }).compile();

    controller = module.get<PhysicsController>(PhysicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
