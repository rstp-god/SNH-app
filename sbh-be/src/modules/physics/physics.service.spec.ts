import { Test, TestingModule } from '@nestjs/testing';
import { PhysicsService } from './physics.service';

describe('PhysicsService', () => {
  let service: PhysicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhysicsService],
    }).compile();

    service = module.get<PhysicsService>(PhysicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
