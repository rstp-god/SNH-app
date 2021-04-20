import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Math } from 'src/entities/Math.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MathService {

    constructor(
        @InjectRepository(Math)
        private readonly infoRepo: Repository<Math>
    ) {}


    findAll() : Promise<Math[]> {
        return this.infoRepo.find();
    }

    findByName(name : string): Promise<Math[]>{
        return this.infoRepo.find({formulaName : name}) ; 
    }

    findByid(id:number) : Promise<Math> {
        return this.infoRepo.findOne(id);
    }

    delete(id:number){
        this.infoRepo.delete(id);
    }
}
