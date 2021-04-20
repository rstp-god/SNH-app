import { Module } from '@nestjs/common';
import { MathService } from './math.service';
import { MathController } from './math.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Math } from 'src/entities/Math.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Math])],
  providers: [MathService],
  controllers: [MathController]
})
export class MathModule {}
