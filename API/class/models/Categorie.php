<?php

class Categorie extends Model implements JsonSerializable {
    private $nom;
    private $code;
    
    function setNom($nom) { $this->nom = $nom; }
    function getNom() { return $this->nom; }
    function setCode($code) { $this->code = $code; }
    function getCode() { return $this->code; }

    function jsonSerialize(){
        return [
            "id" => $this->id,
            "nom" => $this->nom,
            "code" => $this->code
        ];
    }
}

?>