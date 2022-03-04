import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProgrammerDTO } from './dto/createProgrammer.dto';
import { UpdateProgrammerDTO } from './dto/updateProgrammer.dto';
import { Programmer } from './programmer.entity';
import { ProgrammerService } from './programmer.service';

@Resolver('Programmer')
export class ProgrammerResolver {
  constructor(private service: ProgrammerService) {}

  @Query(() => [Programmer])
  async programmers(): Promise<Programmer[]> {
    const programmers = await this.service.findAll();
    return programmers;
  }

  @Query(() => Programmer)
  async programmer(@Args('id') id: string): Promise<Programmer> {
    const programmer = await this.service.findById(id);
    return programmer;
  }

  @Mutation(() => Programmer)
  async create(@Args('data') data: CreateProgrammerDTO): Promise<Programmer> {
    const programmer = await this.service.create(data);
    return programmer;
  }

  @Mutation(() => Programmer)
  async update(
    @Args('id') id: string,
    @Args('data') data: UpdateProgrammerDTO,
  ): Promise<Programmer> {
    const programmer = await this.service.update(id, data);
    return programmer;
  }
}
