import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Physics } from 'src/entities/Physics.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhysicsService {

    constructor(
        @InjectRepository(Physics)
        private readonly infoRepo : Repository<Physics>
    ) {}

    findAll() :Promise<Physics[]> {
        return this.infoRepo.find(); 
    }

    findByName(name: string) : Promise<Physics[]> {
        return this.infoRepo.find({formulaName : name}); 
    }

    findByid(id:number) : Promise<Physics> {
        return this.infoRepo.findOne(id);
    }

    create(Physics: Physics) : Promise<Physics> {
        delete  Physics.id; 
        return this.infoRepo.save(Physics); 
    }

    delete(id:number){
        this.infoRepo.delete(id);
    }
}
