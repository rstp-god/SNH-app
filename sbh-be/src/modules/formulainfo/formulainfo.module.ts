import { Module } from '@nestjs/common';
import { FormulainfoService } from './formulainfo.service';
import { FormulainfoController } from './formulainfo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormulaInfo } from 'src/entities/formulainfo.entity';

@Module({
  imports : [TypeOrmModule.forFeature([FormulaInfo])],
  providers: [FormulainfoService],
  controllers: [FormulainfoController]
})
export class FormulainfoModule {}
