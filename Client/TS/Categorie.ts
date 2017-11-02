import { Model } from "./Model";

export class Categorie extends Model {

    protected $dom:JQuery;
    private nom:string;

    constructor(id:number, nom:string){
        super(id);
        this.nom = nom;
    }

    getName():string{
        return this.nom;
    }

    display($parent:JQuery):void {
        let div:string = "<div class='vins_box container' id='" + this.nom + "' data-category='" + this.id +"' ></div>";
        this.$dom = $(div);
        $parent.append( $("<h2>Vins " + this.nom + "s</h2>") );
        $parent.append(this.$dom);
    }
}