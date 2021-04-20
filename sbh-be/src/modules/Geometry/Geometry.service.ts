import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Geometry } from 'src/entities/Geometry.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GeometryService {

    constructor(
        @InjectRepository(Geometry)
        private readonly infoRepo : Repository<Geometry>
    ) {}

    findAll() : Promise<Geometry[]> {
        return this.infoRepo.find(); 
    }

    findByName(name: string) : Promise<Geometry[]> {
        return this.infoRepo.find({formulaName : name});
    }

    findByid(id:number)  : Promise<Geometry> {
        return this.infoRepo.findOne(id); 
    }

    delete(id:number) {
        this.infoRepo.delete(id);
    } 
    
}
