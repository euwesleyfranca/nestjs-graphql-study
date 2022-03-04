import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProgrammerDTO } from './dto/createProgrammer.dto';
import { UpdateProgrammerDTO } from './dto/updateProgrammer.dto';
import { Programmer } from './programmer.entity';

@Injectable()
export class ProgrammerService {
  constructor(
    @InjectRepository(Programmer)
    private readonly repository: Repository<Programmer>,
  ) {}

  async findAll(): Promise<Programmer[]> {
    const programmers = await this.repository.find();
    return programmers;
  }

  async findById(id: string): Promise<Programmer> {
    const programmer = await this.repository.findOne(id);
    if (!programmer) {
      throw new NotFoundException('Programador não encontrado!');
    }

    return programmer;
  }

  async create(data: CreateProgrammerDTO): Promise<Programmer> {
    const programmer = await this.repository.create(data);
    const save = await this.repository.save(programmer);

    if (!save) {
      throw new InternalServerErrorException(
        'Falha ao cadastrar novo program,ador!',
      );
    }
    return save;
  }

  async update(id: string, data: UpdateProgrammerDTO): Promise<Programmer> {
    const programmer = await this.findById(id);

    if (!programmer) {
      throw new NotFoundException('Este usuário não existe!');
    }
    await this.repository.update(programmer, { ...data });
    const programmerUpdate = await this.repository.create({
      ...programmer,
      ...data,
    });

    return programmerUpdate;
  }
}
