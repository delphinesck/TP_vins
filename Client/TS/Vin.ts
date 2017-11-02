import { Model } from "./Model";
import { Categorie } from "./Categorie";

export class Vin extends Model {

    nom:string;
    categorie:Categorie;
    $dom:JQuery;

    constructor(id:number, nom:string, categorie:Categorie){
        super(id);
        this.nom = nom;
        this.categorie = categorie;
    }

    display($parent:JQuery):void {
        let categorie_nom:string = this.categorie.getName();
        let id:string = categorie_nom + this.id;
        let div:string = "<div class='vin " + categorie_nom + "' id='" + id + "' data-id='" + this.id + "' draggable='true' >🍷</div>";
        this.$dom = $(div);
        $parent.append(this.$dom);
    }

    getCategorie():Categorie {
        return this.categorie;
    }
}