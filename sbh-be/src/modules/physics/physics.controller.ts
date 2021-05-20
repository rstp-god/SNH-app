import { Controller, Delete, Get, HttpException, Param, Query, HttpStatus, Post, Body } from '@nestjs/common';
import { Physics } from 'src/entities/Physics.entity';
import { PhysicsService } from './physics.service';
import CreateFormulaDto from '../../entities/FormulaDto.dto'; 

@Controller('Physics')
export class PhysicsController {

    constructor(private readonly PhysicsService: PhysicsService){}

    @Get()
    getAllPhysics(@Query('name') name : string): Promise<Physics[]> {
        if( name !== '') {
             return this.PhysicsService.findByName(name);
        }
        return this.PhysicsService.findAll(); 
    }

    @Post()
    addPhysicsFormulatoDB(@Body() CreateFormulaDto: CreateFormulaDto) : HttpException {
        const newInfo = new Physics(); 
        newInfo.formulaName = CreateFormulaDto.formulaName; 
        newInfo.videourl = CreateFormulaDto.videourl; 
        newInfo.description = CreateFormulaDto.description; 
        newInfo.LaTeXformula = CreateFormulaDto.LaTeXformula; 
        newInfo.PlotFormula  = CreateFormulaDto.PlotFormula; 
        this.PhysicsService.create(newInfo); 
        return new HttpException('Formula information added!', HttpStatus.OK); 
    }

    @Get(':id')
    getPhysicsbyId(@Param() id:number):Promise<Physics> {
        return this.PhysicsService.findByid(id);
    }

    @Delete(':id')
    deleteFormula(@Param() id :number) : HttpException {
        this.PhysicsService.delete(id);
        return new HttpException('Formula is deleted everything is OK!', HttpStatus.OK); 
    }

}
