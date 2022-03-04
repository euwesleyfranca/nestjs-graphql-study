import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammerResolver } from './programmer.resolver';

describe('ProgrammerResolver', () => {
  let resolver: ProgrammerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgrammerResolver],
    }).compile();

    resolver = module.get<ProgrammerResolver>(ProgrammerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
