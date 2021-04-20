import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InfoFormula } from 'src/entities/InformaticsFormulas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InformaticsService {

    constructor(
        @InjectRepository(InfoFormula)
        private readonly infoRepo : Repository<InfoFormula>
    ) {}

    findAll() : Promise<InfoFormula[]>{
        return this.infoRepo.find(); 
    }

    findByName(name:string) : Promise<InfoFormula[]> { 
        return this.infoRepo.find({formulaName: name}); 
    }

    findByid(id:number) : Promise<InfoFormula> { 
        return this.infoRepo.findOne(id); 
    }

    delete(id:number) {
        this.infoRepo.delete(id);
    }
    
}
