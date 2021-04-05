import { Test, TestingModule } from '@nestjs/testing';
import { TestconnectionService } from './testconnection.service';

describe('TestconnectionService', () => {
  let service: TestconnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestconnectionService],
    }).compile();

    service = module.get<TestconnectionService>(TestconnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
