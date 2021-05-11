//node imports
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//project imports
import { MathService } from './math.service';
import { MathController } from './math.controller';
import { Math } from 'src/entities/Math.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Math])],
  providers: [MathService],
  controllers: [MathController]
})
export class MathModule {}
