import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contrat } from '../model/contrat.entity';
import { Repository } from 'typeorm';
import { ContratDTO } from './contrat.dto';
import { User } from '../user.decorator';

@Injectable()
export class ContratService {
  constructor(
    @InjectRepository(Contrat) private readonly repo: Repository<Contrat>,
  ) { }

  public async getAll(): Promise<ContratDTO[]> {
    return await this.repo.find()
      .then(items => items.map(e => ContratDTO.fromEntity(e)));
  }

  public async create(dto: ContratDTO, user: User): Promise<ContratDTO> {
    return this.repo.save(ContratDTO.toEntity(dto, user))
      .then(e => ContratDTO.fromEntity(e));
  }
}