import { Professor } from "./professor";

export interface Course{

    title:string;
    description:string;
    image:string;
    price:number;
    rating:number;
    subject:string;
    level:string;
    professor:Professor;
}