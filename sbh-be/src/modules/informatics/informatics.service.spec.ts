import { Test, TestingModule } from '@nestjs/testing';
import { InformaticsService } from './informatics.service';

describe('InformaticsService', () => {
  let service: InformaticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InformaticsService],
    }).compile();

    service = module.get<InformaticsService>(InformaticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
