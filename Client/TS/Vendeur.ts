import { Model } from "./Model";
import { Vin } from "./Vin";

export class Vendeur extends Model {

    protected $dom:JQuery;
    private nom:string;
    private vins:Vin[];
    
    $element:JQuery = $("#vinsvendeur");
    $tous:JQuery = $("#vins");


    constructor(id:number, nom:string, vins:Vin[]){
        super(id);
        this.nom = nom;
        this.vins = vins;
    }

    getProducts():Vin[] {
        return this.vins;
    }

    addProduct(vin:Vin){
        this.vins.push(vin);
    }

    removeProduct(vin:Vin):void{
        for(let key in this.vins){
            let vproduct:Vin = this.vins[key];
            if(vproduct.getId() == vin.getId()){
                this.vins.splice(parseInt(key), 1);
            }
            return;
        }
    }

    display($parent:JQuery):void {
        let div:string = "<div class='vendeur' id='" + this.id +"' >" + this.nom + "</div>";
        this.$dom = $(div);
        $parent.append(this.$dom);
    }
}