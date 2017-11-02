<?php
header("Access-Control-Allow-Origin : *");

require 'flight/Flight.php';
require 'autoload.php';

Flight::set("BddManager", new BddManager());

Flight::route("POST /connexion", function(){
    $username = Flight::request()->data["username"];
    $upassword = Flight::request()->data["upassword"];

    $bddManager = Flight::get("BddManager");
    $repo = $bddManager->getVendeurRepository();
    $vend = new Vendeur(array(
        "username" => $username,
        "upassword" => $upassword
    ));
    $vendeur = $repo->login($vend);

    echo json_encode($vendeur);
});

// Lire tous les vins
Flight::route("GET /vins", function(){
    $bddManager = Flight::get("BddManager");
    $repo = $bddManager->getVinRepository();
    $vins = $repo->getAll();

    echo json_encode($vins);
});


// Récupérer le vin @id
Flight::route("GET /vin/@id", function($id){
    $status = [
        "success" => false,
        "vin" => false
    ];
    $vin = new Vin();
    $vin->setId($id);
    $bddManager = Flight::get("BddManager");
    $repo = $bddManager->getVinRepository();
    $vin = $repo->getById($vin);
    if($vin != false){
        $status["success"] = true;
        $status["vin"] = $vin;
    }
    echo json_encode($status);
});

// Lire tous les vendeurs
Flight::route("GET /vendeurs", function(){
    $bddManager = Flight::get("BddManager");
    $repo = $bddManager->getVendeurRepository();
    $vendeurs = $repo->getAll();

    echo json_encode($vendeurs);
});

// Récupérer le vendeur @id
Flight::route("GET /vendeur/@id", function($id){
    $status = [
        "success" => false,
        "vendeur" => false
    ];
    $vendeur = new Vendeur();
    $vendeur->setId($id);
    $bddManager = Flight::get("BddManager");
    $repo = $bddManager->getVendeurRepository();
    $vendeur = $repo->getById($vendeur);
    if($vendeur != false){
        $status["success"] = true;
        $status["vendeur"] = $vendeur;
    }
    echo json_encode($status);
});

// Lire toutes les catégories
Flight::route("GET /categories", function(){
    $bddManager = Flight::get("BddManager");
    $repo = $bddManager->getCategorieRepository();
    $categories = $repo->getAll();

    echo json_encode($categories);
});

// Récupérer la catégorie @id
Flight::route("GET /categorie/@id", function($id){
    $status = [
        "success" => false,
        "categorie" => false
    ];
    $categorie = new Categorie();
    $categorie->setId($id);
    $bddManager = Flight::get("BddManager");
    $repo = $bddManager->getCategorieRepository();
    $categorie = $repo->getById($categorie);
    if($categorie != false){
        $status["success"] = true;
        $status["categorie"] = $categorie;
    }
    echo json_encode($status);
});

// Récupérer les vins par vendeur @id
Flight::route("GET /vins/vendeur/@id/category/@catid", function($id, $catid){
    $status = [
        "success" => false,
        "vins" => false
    ];
    $vendeur = new Vendeur();
    $vendeur->setId($id);

    $categorie = new Categorie();
    $categorie->setId($catid);

    $bddManager = Flight::get("BddManager");
    $repo = $bddManager->getVinRepository();
    $vendeur = $repo->getVinsByVendeurIdAndCategoryId($vendeur, $categorie);
    if($vendeur != false){
        $status["success"] = true;
        $status["vins"] = $vendeur;
    }
    echo json_encode($status);
});


// //Créer une note
// Flight::route("POST /note", function(){
//     $title = Flight::request()->data["title"];
//     $content = Flight::request()->data["content"];
//     $status = [
//         "success" => false,
//         "id" => 0
//     ];
//     if(strlen($title) > 0 && strlen($content) > 0) {
//         $note = new Note();
//         $note->setTitle($title);
//         $note->setContent($content);
//         $bddManager = Flight::get("BddManager");
//         $repo = $bddManager->getNoteRepository();
//         $id = $repo->save($note);
//         if($id != 0){
//             $status["success"] = true;
//             $status["id"] = $id;
//         }
//     }
//     echo json_encode($status); 
// });


// //Supprimer la note @id
// Flight::route("DELETE /note/@id", function( $id ){
//     $status = [
//         "success" => false
//     ];
//     $note = new Note();
//     $note->setId( $id );
//     $bddManager = Flight::get("BddManager");
//     $repo = $bddManager->getNoteRepository();
//     $rowCount = $repo->delete( $note );
//     if( $rowCount == 1 ){
//         $status["success"] = true;
//     }
//     echo json_encode( $status );
// });


// //Modifier la note @id
// Flight::route("PUT /note/@id", function( $id ){
//     // Pour récupérer des données PUT -> les données sont encodées en json string avec ajax, puis décodées ici en Php
//     //Requete PUT $_PUT n existe pas
//     $json = Flight::request()->getBody();
//     $_PUT = json_decode( $json, true);  // true pour le tableau associatif

//     if(isset($_PUT["title"]) && isset($_PUT["content"])){
//         $status = [
//             "success" => false
//         ];

//         $title = $_PUT["title"];
//         $content = $_PUT["content"];

//         $note = new Note();
//         $note->setId($id);
//         $note->setTitle($title);
//         $note->setContent($content);

//         $bddManager = Flight::get("BddManager");
//         $repo = $bddManager->getNoteRepository();
//         $rowCount = $repo->save($note);

//         if($rowCount == 1){
//             $status["success"] = true;
//         }
//     }
//     echo json_encode($status);
// });


Flight::start();
?>