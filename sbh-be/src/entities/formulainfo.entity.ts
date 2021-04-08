 import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() 

export class FormulaInfo {
    
    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    formulaName: string; 

    @Column() 
    videourl: string ;  

    @Column()
    description : string; 
}