 import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() 

export class Geometry {
    
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