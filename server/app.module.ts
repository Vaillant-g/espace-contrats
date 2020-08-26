import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NuxtController } from './nuxt.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, NuxtController],
  providers: [AppService],
})
export class AppModule {}
