import { Module } from '@nestjs/common';
import { InformaticsService } from './informatics.service';
import { InformaticsController } from './informatics.controller';
import { InfoFormula } from 'src/entities/InformaticsFormulas.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InfoFormula])],
  providers: [InformaticsService],
  controllers: [InformaticsController]
})
export class InformaticsModule {}
