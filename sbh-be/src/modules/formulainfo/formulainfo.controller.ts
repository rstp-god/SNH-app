import { Controller, Get } from '@nestjs/common';
import { FormulainfoService } from './formulainfo.service';
import { FormulaInfo } from 'src/entities/formulainfo.entity';

@Controller('formulainfo')
export class FormulainfoController {

    constructor( private readonly FormulainfoService : FormulainfoService) {}

    @Get() 
    getAllFormulaInfo(): Promise<FormulaInfo[]> {
        return this.FormulainfoService.findAll(); 
    }
}
