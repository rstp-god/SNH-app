import { Controller, Delete, Get, HttpException, Param, Query,HttpStatus } from '@nestjs/common';
import { InfoFormula } from 'src/entities/InformaticsFormulas.entity';
import { InformaticsService } from './informatics.service';

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

    @Delete(':id')
    deleteFormula(@Param()id:number) : HttpException {
        this.InformaticService.delete(id); 
        return new HttpException('Formula is deleted everything is OK!', HttpStatus.OK); 
    }
}
