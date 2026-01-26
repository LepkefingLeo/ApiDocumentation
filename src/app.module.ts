import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CostumesModule } from './costumes/costumes.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), CostumesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
