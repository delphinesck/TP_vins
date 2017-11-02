import { Model } from "./Model";
import { Vin } from "./Vin";

export class Categorie extends Model {
    protected $dom:JQuery;
    private nom:string;
    private code:string;

    constructor(id:number, nom:string, code:string, ){
        super(id);
        this.nom = nom;
        this.code = code;
    }

    getNom():string{
        return this.nom;
    }

    getCode():string{
        return this.code;
    }

    display($parent:JQuery):void {
        let div:string = "<div class='categorievin' id='" + this.code + "' data-id='" + this.id + "'><span>" + this.nom + "</span></div>";
        this.$dom = $(div);
        $parent.append(this.$dom);
    }
}