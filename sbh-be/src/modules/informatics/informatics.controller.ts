import { Controller, Delete, Get, HttpException, Param, Query,HttpStatus, Post, Body } from '@nestjs/common';
import { InfoFormula } from 'src/entities/InformaticsFormulas.entity';
import { InformaticsService } from './informatics.service';
import CreateFormulaDto from 'src/entities/FormulaDto.dto';

@Controller('Informatics')
export class InformaticsController {
    
    constructor(private readonly InformaticService : InformaticsService) {}

    @Get()
    getAllInformatic(@Query('name') name:string) : Promise<InfoFormula[]> {
        if( name !== '') {
            return this.InformaticService.findByName(name); 
        }
        return this.InformaticService.findAll(); 
    }

    @Get(':id')
    getInformabyId(@Param() id: number) : Promise<InfoFormula> { 
        return this.InformaticService.findByid(id); 
    }

    @Post()
    addInformaticsFormulatoDB(@Body() CreateFormulaDto: CreateFormulaDto): HttpException {
        const  newInfo = new InfoFormula(); 
        newInfo.formulaName = CreateFormulaDto.formulaName; 
        newInfo.description = CreateFormulaDto.description; 
        newInfo.videourl = CreateFormulaDto.videourl; 
        newInfo.LaTeXformula = CreateFormulaDto.LaTeXformula; 
        newInfo.PlotFormula  = CreateFormulaDto.PlotFormula; 
        this.InformaticService.create(newInfo);
        return new HttpException('Formula information added!', HttpStatus.OK); 
    }

    @Delete(':id')
    deleteFormula(@Param()id:number) : HttpException {
        this.InformaticService.delete(id); 
        return new HttpException('Formula is deleted everything is OK!', HttpStatus.OK); 
    }
}
