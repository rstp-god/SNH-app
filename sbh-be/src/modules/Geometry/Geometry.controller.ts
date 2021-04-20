import { Controller, Get, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
import { GeometryService } from './Geometry.service';
import { Geometry } from 'src/entities/Geometry.entity';

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

    @Delete(':id') 
    deleteFormula(@Param()id:number) : HttpException {
        this.GeometryService.delete(id); 
        return new HttpException('Formula is deleted everything is OK!', HttpStatus.OK); 
        }

}
