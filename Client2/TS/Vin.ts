import { Model } from "./Model";
import { Categorie } from "./Categorie";

export class Vin extends Model {

    protected $dom:JQuery;
    private nom:string;
    private categorie:Categorie;
    private photo:string;
    private description:string;
    private pays:string;
    private contenance:string;
    private annee:number;

    constructor(id:number, nom:string, categorie:Categorie, photo:string, description:string, pays:string, contenance:string, annee:number){
        super(id);
        this.nom = nom;
        this.categorie = categorie;
        this.photo = photo;
        this.description = description;
        this.pays = pays;
        this.contenance = contenance;
        this.annee = annee;
    }

    display($parent:JQuery):void {
        let categorie_code:string = this.categorie.getCode();
        let categorie_nom:string = this.categorie.getNom();
        let div:string = "<div class='vin_box " + this.categorie.getCode() + "' data-id='" + this.id + "' >";
        div += "<h6>" + this.nom + "</h6></div>";
        this.$dom = $(div);
        $parent.append(this.$dom);
    }

    getNom():string{
        return this.nom;
    }

    getCategorie():Categorie{
        return this.categorie;
    }

    getPhoto():string{
        return this.photo;
    }

    getDescription():string{
        return this.description;
    }

    getPays():string{
        return this.pays;
    }

    getContenance():string{
        return this.contenance;
    }

    getAnnee():number{
        return this.annee;
    }
    
}