import { Module } from '@nestjs/common';
import { ProgrammerService } from './programmer.service';
import { ProgrammerResolver } from './programmer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programmer } from './programmer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Programmer])],
  providers: [ProgrammerService, ProgrammerResolver, Programmer],
})
export class ProgrammerModule {}
