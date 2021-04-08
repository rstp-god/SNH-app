import { Controller, Get, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
import { FormulainfoService } from './formulainfo.service';
import { FormulaInfo } from 'src/entities/formulainfo.entity';

@Controller('formulainfo')
export class FormulainfoController {

    constructor( private readonly FormulainfoService : FormulainfoService) {}

    @Get() 
    getAllFormulaInfo(): Promise<FormulaInfo[]> {
        return this.FormulainfoService.findAll(); 
    }

    @Get(':id')
    getFormulaInfobyId(@Param() id: number): Promise<FormulaInfo> {
        return this.FormulainfoService.findByid(id);
    }

    @Delete(':id') 
    deleteFormula(@Param()id:number) : HttpException {
        this.FormulainfoService.delete(id); 
        return new HttpException('Product is deleted everything is OK!', HttpStatus.OK); 
        }

}
