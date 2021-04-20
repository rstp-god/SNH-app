import { Controller, Get, HttpException, Param, Query, Delete, HttpStatus } from '@nestjs/common';
import { MathService } from './math.service';
import { Math } from 'src/entities/Math.entity'


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

    @Delete(':id')
    deleteFormula(@Param() id:number) : HttpException {
        this.MathService.delete(id); 
        return new HttpException('Formula is deleted everything is OK!', HttpStatus.OK); 
    }
}
