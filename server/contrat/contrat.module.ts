import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratService } from './contrat.service';
import { ContratController } from './contrat.controller';
import { Contrat } from '../model/contrat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contrat])],
  providers: [ContratService],
  controllers: [ContratController],
  exports: []
})
export class ContratModule { }