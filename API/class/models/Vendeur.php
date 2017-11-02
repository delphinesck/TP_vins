<?php

class Vendeur extends Model implements JsonSerializable {
    private $nom;
    private $username;
    private $upassword;
    
    function setNom($nom) { $this->nom = $nom; }
    function getNom() { return $this->nom; }
    function setUsername($username) { $this->username = $username; }
    function getUsername() { return $this->username; }
    function setUpassword($upassword) { $this->upassword = $upassword; }
    function getUpassword() { return $this->upassword; }
    
    
    function jsonSerialize(){
        return [
            "id" => $this->id,
            "nom" => $this->nom,
            "username" => $this->username,
            "upassword" => $this->upassword
        ];
    }
}

?>