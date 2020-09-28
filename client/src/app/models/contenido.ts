//import { Interface } from "readline";

export interface Contenido{

    idcontenido?:number;
    descripcion:string;
    materia:string;
    link:string;
    created_at?: Date;      //el ? hace que el campo sea opcional
    codigomateria?: number;
    

}