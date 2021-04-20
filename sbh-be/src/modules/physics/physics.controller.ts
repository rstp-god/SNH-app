import { Controller, Delete, Get, HttpException, Param, Query, HttpStatus } from '@nestjs/common';
import { Physics } from 'src/entities/Physics.entity';
import { PhysicsService } from './physics.service';

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
