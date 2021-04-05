import { Module } from '@nestjs/common';
import { FormulainfoService } from './formulainfo.service';
import { FormulainfoController } from './formulainfo.controller';

@Module({
  providers: [FormulainfoService],
  controllers: [FormulainfoController]
})
export class FormulainfoModule {}
