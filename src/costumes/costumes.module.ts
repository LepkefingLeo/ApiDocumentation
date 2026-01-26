import { Module } from '@nestjs/common';
import { CostumesService } from './costumes.service';
import { CostumesController } from './costumes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CostumesController],
  providers: [CostumesService, PrismaService],
})
export class CostumesModule {}
