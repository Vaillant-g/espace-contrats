// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { configService } from './config/config.service';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot(configService.getTypeOrmConfig())
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
//export class AppModule { }
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { NuxtController } from './nuxt.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { ContratController } from './contrat/contrat.controller';
import { ContratModule } from './contrat/contrat.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5000,
    username: 'postgres',
    password: '',
    database: 'espace_contrats',
    entities: [],
    synchronize: true,
  }),
  TypeOrmModule.forRoot(configService.getTypeOrmConfig()), ContratModule],
  controllers: [AppController, ContratController, NuxtController],
  providers: [AppService],
})
export class AppModule { }


