import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormulaInfo } from 'src/entities/formulainfo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FormulainfoService {

    constructor(
        @InjectRepository(FormulaInfo)
        private readonly infoRepo : Repository<FormulaInfo>
    ) {}

    findAll() : Promise<FormulaInfo[]> {
        return this.infoRepo.find(); 
    }

    findByName(name: string) : Promise<FormulaInfo[]> {
        return this.infoRepo.find({formulaName : name});
    }

    findByid(id:number)  : Promise<FormulaInfo> {
        return this.infoRepo.findOne(id); 
    }

    delete(id:number) {
        this.infoRepo.delete(id);
    } 
    
}
