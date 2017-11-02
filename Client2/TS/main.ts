import { App } from "./App";
import { APIService } from "./APIService";
import { Categorie } from "./Categorie";
import { Vendeur } from "./Vendeur";

var app:App = new App();
var api:APIService = APIService.getService();

app.$form.submit(function(event){
    event.preventDefault();
    app.getConnexion();
});

$(document).on("click", ".categorievin", function(event){
    let id = parseInt($(this).attr("data-id"));
    let vendeur_id = app.currentVendeur.getId();
    let vins_vendeur = app.getVinsByVendeurIdAndCategoryId(vendeur_id, id);
});

$(document).on("click", "#retour1", function(event){
    app.switchPage( $("#pagevins"), $("#pagecategories"), function(){
        $("#pagevins_box").children().remove();
    });
});

$(document).on("click", "#retour2", function(event){
    app.switchPage( $("#pagevinselect"), $("#pagevins"), function(){
        $("#vinselect_box").children().remove();
    } );
});

$(document).on("click", ".vin_box", function(event){
    let vin_id = parseInt($(this).attr("data-id"));
    app.getVinById(vin_id);
    app.switchPage( $("#pagevins"), $("#pagevinselect"), function(){} );
});

$(".page").hide();
$("#pageconnexion").show();