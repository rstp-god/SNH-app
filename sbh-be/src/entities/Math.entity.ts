 import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() 

export class Math {
    
    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    formulaName: string; 

    @Column() 
    videourl: string ;  

    @Column({ type : "text"})
    description : string; 

    @Column()
    LaTeXformula: string; 

    
    @Column() 
    PlotFormula: string; 
}