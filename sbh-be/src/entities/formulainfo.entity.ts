import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() 

export class FormulaInfo {
    
    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    videourl: string ;  

    @Column()
    description : string; 
}