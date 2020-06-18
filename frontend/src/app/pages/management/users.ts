import { of as observableOf,  Observable } from 'rxjs';

export class Users {
    constructor(){}
    public username:string
    public Firstname:string
    public lastname:string
    public password:string
    public personalnumber:string
    public rank:string
    public position:string
    public permissions="read"
    public armyunit:string
    public token:string
}