export class User { // Default values applied cause they will be auto filled after AD use will take place.
    username:string;
    firstName:string = "null";
    lastName:string = "null";
    password:string = "123"; 
    personalNumber:string;
    rank:string = "סמל";
    position:string = "null";
    permissions: string;
    unit:string;
    token:string;

    constructor(){}
 }