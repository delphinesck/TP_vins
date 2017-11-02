import { Vin } from "./Vin";
import { BDD } from "./BDD";
import { Vendeur } from "./Vendeur";
import { Categorie } from "./Categorie";
import { APIService } from "./APIService";

export class App {
    public api:APIService = APIService.getService();
    public tous_vins:Vin[];
    public toutes_categories:Categorie[];
    public tous_vendeurs:Vendeur[];
    public vendeurs:Vendeur[];
    public currentVendeur:Vendeur;

    public $vin:JQuery;
    public $categories_container:JQuery;
    public $categorie_vendeurs:JQuery;
    public $container:JQuery;
    public $vinsvendeur:JQuery;

    constructor(){
        this.tous_vins = [];
        this.toutes_categories = [];
        this.tous_vendeurs = [];

        this.$vin = $(".vin");
        this.$categories_container = $("#vins");
        this.$categorie_vendeurs = $("h3");
        this.$container = $(".container");
        this.$vinsvendeur = $("#vinsvendeur");

        this.getAllCategories();
        this.getAllVins();
        this.getAllVendeurs();
        
        this.displayVendeurs();
    }

    getAllVins():void {
        let vins: {
            id:number,
            nom:string,
            categorie_id:number
        }[] = BDD.vins;

        for(let vin of vins){
            let the_vin:Vin = new Vin(
                vin.id,
                vin.nom,
                this.getCategorieById(vin.categorie_id)
            )
            this.tous_vins.push(the_vin);
        }
    }

    getAllCategories(){
        this.api.getAllCategories()
            .then((categories) => { console.log( categories );     
                for(let categorie of categories){
                    let the_categorie:Categorie = new Categorie(
                        categorie.id,
                        categorie.nom
                    )
                    this.toutes_categories.push(the_categorie);
                    
                }
                this.displayCategories();
            })
            .catch(function(error){
                console.log(error);
            })
    };

    getAllVendeurs():void {
        let vendeurs: {
            id:number,
            nom:string,
            vins:number[]
        }[] = BDD.vendeurs;

        // On boucle sur cette liste de vendeurs
        for(let vendeur of vendeurs){
            // On va avoir besoin d'un tableau de produits
            let vendeurs_vins:Vin[] = [];
            // Je boucle surl le tableau d'id de vendeur.products
            for(let vin_id of vendeur.vins){
                // Je cherche le produit correspondant, grâce à son id, dans ma liste de produits
                let the_vin:Vin = this.getProductById(vin_id);
                // Je push mon tableau d'objets
                vendeurs_vins.push( the_vin );
            }

            // Ici on crée le vendeur avec sa classe et le tableau de produits créé
            let the_vendeur:Vendeur = new Vendeur(
                vendeur.id,
                vendeur.nom,
                vendeurs_vins
            )
            // J'ajoute mon vendeur à la liste de vendeurs de mon app
            this.tous_vendeurs.push(the_vendeur);
        }
    }

    getCategorieById(id:number):Categorie {
        for(let categorie of this.toutes_categories){
            if(id == categorie.getId()){
                return categorie;
            }
        }
        return null;
    }

    getProductById(id:number):Vin{
        for(let vin of this.tous_vins){
            if(id == vin.getId()){
                return vin;
            };
        }
        return null;
    }

    displayCategories(){
        for(let categorie of this.toutes_categories){
            categorie.display(this.$categories_container);
        }
    }

    getVendeurById(vendeurid:number):Vendeur{
        for(let vendeur of this.tous_vendeurs){
            if(vendeurid == vendeur.getId()){
                return vendeur;
            }
        }
        return null;
    }

    displayVins(vendeur:Vendeur){
        let vendeur_vins:Vin[] = vendeur.getProducts();

        for(let vin of this.tous_vins){
            let find = false;
            for(let le_vin of vendeur_vins){
                if(le_vin.getId() == vin.getId()){
                    find = true;
                }
            }

            if(find == true){
                vin.display(this.$vinsvendeur);
            }
            else{
                let categorie_name:string = vin.categorie.getName();
                vin.display($("#" + categorie_name));
            }

        }

    }

    displayVendeurs(){
        for(let vendeur of this.tous_vendeurs){
            vendeur.display(this.$categorie_vendeurs);
        }
    }

    getCurrentVendeur():Vendeur{
        return this.currentVendeur;
    }

    setCurrentVendeur(vendeur:Vendeur){
        this.currentVendeur = vendeur;
    }

}