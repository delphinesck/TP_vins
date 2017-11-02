import { APIService } from "./APIService";
import { Categorie } from "./Categorie";
import { Vin } from "./Vin";
import { Vendeur } from "./Vendeur";

export class App {

    public api:APIService = APIService.getService();
    public $form = $("#formconnexion");
    public $username = $("#username");
    public $upassword = $("#upassword");
    public currentVendeur:Vendeur = null;
    public currentVin:Vin = null;

    public toutes_categories:Categorie[];
    public tous_vins:Vin[];
    public $categories_box:JQuery;
    public $pagevins_box:JQuery;
    public current_categorie:JQuery;

    constructor(){
        this.toutes_categories = [];
        this.tous_vins = [];
        this.$categories_box = $("#categories_box");
        this.$pagevins_box = $("#pagevins_box");

        this.getAllCategories();
    }

    switchPage( $currentPage: JQuery, $nextPage: JQuery, callback: Function ){
        
            $nextPage.show();
            $currentPage.fadeTo("slow" , 0, function(){
                //
                $nextPage.css("z-index", 1);
                //
                $currentPage.css("z-index", 0);
                $currentPage.css("opacity", 1);
                $currentPage.hide();
                callback();
            });
        
        }

    getConnexion(){
        this.api.getConnexion(this.$username.val().toString(), this.$upassword.val().toString())
            .then((data:any) => {
                
                if(data.toString() != "false"){
                    this.switchPage( $("#pageconnexion"), $("#pagecategories"), function(){} );
                    this.currentVendeur = new Vendeur(data.id, data.nom, data.username, data.upassword);
                }

        })
            .catch(function(error){
                console.log(error);
        })
    }

    getAllCategories(){
        this.api.getAllCategories()
            .then((categories) => {
                for(let categorie of categories){
                    let the_categorie:Categorie = new Categorie(
                        categorie.id,
                        categorie.nom,
                        categorie.code
                    )
                    this.toutes_categories.push(the_categorie);
                }
                this.displayCategories();
            })
            .catch(function(error){
                console.log(error);
            });
    };

    displayCategories(){
        for(let categorie of this.toutes_categories){
            categorie.display(this.$categories_box);
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

    getVinsByVendeurIdAndCategoryId(id:number, catid:number){
        this.api.getVinsByVendeurIdAndCategoryId(id, catid)
            .then((data) => {
                var vins:Vin[] = [];
                for(let vin of data){
                    let categorie = this.getCategorieById(catid);
                    let the_vin:Vin = new Vin(vin.id, vin.nom, categorie, vin.photo, vin.description, vin.pays, vin.contenance, vin.annee);
                    vins.push(the_vin);
                }
                this.switchPage( $("#pagecategories"), $("#pagevins"), function(){} );

                vins.forEach(function(vin:any){
                    vin.display($("#pagevins_box"));
                });
                
            })
            .catch(function(error){
            console.log(error);
            })
    }

    getVinById(id:number){
        this.api.getVinById(id)
            .then((data) => {
                let data_vin = data.vin;
                let categorie:Categorie = this.getCategorieById( data_vin.categorie_id );
                let the_vin:Vin = new Vin(data_vin.id, data_vin.nom, categorie, data_vin.photo, data_vin.description, data_vin.pays, data_vin.contenance, data_vin.annee);

                this.displayVin(the_vin);
            })
            .catch(function(error){
                console.log(error);
            })
    }

    displayVin(vin: Vin){
        let cat:Categorie = vin.getCategorie();
        let div:string = "<img src='" + vin.getPhoto() + "' class='imgvin'>";
        div += "<div id='vindescription'>Vin " + cat.getNom() + "<br />";
        div += "<h5>" + vin.getNom() + "</h5><br />";
        div += "Pays d'origine : " + vin.getPays() + "<br />";
        div += "Année : " + vin.getAnnee() + "<br />";
        div += "Contenance : " + vin.getContenance() + "<br /><br />";
        div += "Description : " + vin.getDescription() + "</div>";

        var $dom = $(div);
        $("#vinselect_box").append($dom);
    }

}