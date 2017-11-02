<?php

class Vin extends Model implements JsonSerializable {
    private $nom;
    private $categorie_id;
    private $photo;
    private $description;
    private $pays;
    private $contenance;
    private $annee;
    
    function setNom($nom) { $this->nom = $nom; }
    function getNom() { return $this->nom; }
    function setCategorie_id($categorie_id) { $this->categorie_id = $categorie_id; }
    function getCategorie_id() { return $this->categorie_id; }
    function setPhoto($photo) { $this->photo = $photo; }
    function getPhoto() { return $this->photo; }
    function setDescription($description) { $this->description = $description; }
    function getDescription() { return $this->description; }
    function setPays($pays) { $this->pays = $pays; }
    function getPays() { return $this->pays; }
    function setContenance($contenance) { $this->contenance = $contenance; }
    function getContenance() { return $this->contenance; }
    function setAnnee($annee) { $this->annee = $annee; }
    function getAnnee() { return $this->annee; }      

    function jsonSerialize(){
        return [
            "id" => $this->id,
            "nom" => $this->nom,
            "categorie_id" => $this->categorie_id,
            "photo" => $this->photo,
            "description" => $this->description,
            "pays" => $this->pays,
            "contenance" => $this->contenance,
            "annee" => $this->annee
        ];
    }
}

?>