import { Controller, Get, HttpException, Param, Query, Delete, HttpStatus, Post, Body } from '@nestjs/common';
import { MathService } from './math.service';
import { Math } from 'src/entities/Math.entity'
import CreateFormulaDto from '../../entities/FormulaDto.dto'; 


@Controller('Math')
export class MathController {

    constructor(private readonly MathService: MathService) {}

    @Get() 
    getAllMath(@Query('name') name : string) : Promise<Math[]> {
        if ( name !== '') { 
            return this.MathService.findByName(name);
        }
        return this.MathService.findAll(); 
    }

    @Get(':id')
    getMathbyId(@Param() id:number) : Promise<Math> {
        return this.MathService.findByid(id);
    }

    @Post()
    addMathFormulatoDB(@Body() CreateFormulaDto:CreateFormulaDto): HttpException {
        const  newInfo = new Math(); 
        newInfo.formulaName = CreateFormulaDto.formulaName; 
        newInfo.description = CreateFormulaDto.description; 
        newInfo.videourl = CreateFormulaDto.videourl; 
        newInfo.LaTeXformula = CreateFormulaDto.LaTeXformula; 
        this.MathService.create(newInfo); 
        return new HttpException('Formula information added!', HttpStatus.OK); 
    }

    @Delete(':id')
    deleteFormula(@Param() id:number) : HttpException {
        this.MathService.delete(id); 
        return new HttpException('Formula is deleted everything is OK!', HttpStatus.OK); 
    }
}
