import { Model } from "./Model";

export class Vendeur extends Model {
    protected $dom:JQuery;
    private nom:string;
    private username:string;
    private upassword:string;

    constructor(id:number, nom:string, username:string, upassword:string){
        super(id);
        this.nom = nom;
        this.username = username;
        this.upassword = upassword;
    }

    display($parent:JQuery<HTMLElement>):void {
        throw new Error("Method not implemented.");
    }
}