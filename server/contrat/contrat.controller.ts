import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContratService } from './contrat.service';
import { ContratDTO } from './contrat.dto';
import { User } from '../user.decorator';

@Controller('contrat')
export class ContratController {
  constructor(private serv: ContratService) { }

  @Get()
  public async getAll(): Promise<ContratDTO[]> {
    return await this.serv.getAll()
  }

  @Post()
  public async post(@User() user: User, @Body() dto: ContratDTO): Promise<ContratDTO> {
    return this.serv.create(dto, user);
  }

}