import { Test, TestingModule } from '@nestjs/testing';
import { FormulainfoService } from './formulainfo.service';

describe('FormulainfoService', () => {
  let service: FormulainfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormulainfoService],
    }).compile();

    service = module.get<FormulainfoService>(FormulainfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
