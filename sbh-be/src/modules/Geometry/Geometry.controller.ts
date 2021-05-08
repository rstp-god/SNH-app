import { Controller, Get, Param, Delete, HttpException, HttpStatus, Query, Post, Body } from '@nestjs/common';
import { GeometryService } from './Geometry.service';
import { Geometry } from 'src/entities/Geometry.entity';
import CreateFormulaDto from 'src/entities/FormulaDto.dto';


@Controller('Geometry')
export class GeometryController {

    constructor( private readonly GeometryService : GeometryService) {}

    @Get() 
    getAllGeometry(@Query('name') name:string): Promise<Geometry[]> {
        if (name !== ''){
            return this.GeometryService.findByName(name);
        }
        return this.GeometryService.findAll(); 
    }

    @Get(':id')
    getGeometrybyId(@Param() id: number): Promise<Geometry> {
        return this.GeometryService.findByid(id);
    }

    @Post()
    addGeometryFormulatoDB(@Body() CreateFormulaDto:CreateFormulaDto) :HttpException {
        const  newInfo = new Geometry(); 
        newInfo.formulaName = CreateFormulaDto.formulaName; 
        newInfo.description = CreateFormulaDto.description; 
        newInfo.videourl = CreateFormulaDto.videourl; 
        newInfo.LaTeXformula = CreateFormulaDto.LaTeXformula; 
        this.GeometryService.create(newInfo); 
        return new HttpException('Formula information added!', HttpStatus.OK); 
    }

    @Delete(':id') 
    deleteFormula(@Param()id:number) : HttpException {
        this.GeometryService.delete(id); 
        return new HttpException('Formula is deleted everything is OK!', HttpStatus.OK); 
        }

}
