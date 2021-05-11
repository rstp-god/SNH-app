//node imports
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//project imports
import { InformaticsService } from './informatics.service';
import { InformaticsController } from './informatics.controller';
import { InfoFormula } from 'src/entities/InformaticsFormulas.entity'


@Module({
  imports: [TypeOrmModule.forFeature([InfoFormula])],
  providers: [InformaticsService],
  controllers: [InformaticsController]
})
export class InformaticsModule {}
