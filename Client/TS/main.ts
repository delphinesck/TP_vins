import { App } from "./App";
import { Vendeur } from "./Vendeur";
import { Vin } from "./Vin";
import { APIService } from "./APIService";

var app:App = new App();
var api:APIService = APIService.getService();

$(document).on("dragover", ".container", function(event){
    event.preventDefault();
});

$(document).on("dragstart", ".vin", function(event){
    let dragEvent:DragEvent = event.originalEvent as DragEvent;
    dragEvent.dataTransfer.setData("id", $(this).attr("data-id"));
});

$(document).on("drop", "#vinsvendeur", function(event){
    const dragEvent:DragEvent = event.originalEvent as DragEvent;
    const vin_id:number = parseInt( dragEvent.dataTransfer.getData("id") );
 
    let vin = app.getProductById(vin_id);
    let vendeur:Vendeur = app.currentVendeur;
    vendeur.addProduct(vin);
    $(this).append( vin.get$Dom() );
});

$(document).on("drop", ".vins_box", function(event){
    const dragEvent:DragEvent = event.originalEvent as DragEvent;
    let id_product:number = parseInt(dragEvent.dataTransfer.getData("id"));
    let product:Vin = app.getProductById(id_product);
    app.getCurrentVendeur().removeProduct(product);
    product.getCategorie().get$Dom()
        .append(product.get$Dom());
})

$(document).on("click", ".vendeur", function(){
    let id = parseInt($(this).attr("id"));
    $("#vinsvendeur").children().remove();
    $(".vins_box").children().remove();
    $("#vinsvendeur").removeClass("bgvin");

    $(".vendeur").css("background-color", "rgb(185, 163, 136)");
    $(".vendeur").css("color", "white");
    $(this).css("background-color", "white");
    $(this).css("color", "black");

    let vendeur:Vendeur = app.getVendeurById(id);
    app.currentVendeur = vendeur;
    app.displayVins(vendeur);
});