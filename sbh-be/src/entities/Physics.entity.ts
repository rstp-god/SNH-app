 import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() 

export class Physics {
    
    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    formulaName: string; 

    @Column() 
    videourl: string ;  

    @Column()
    description : string; 

    @Column()
    LaTeXformula: string; 
}