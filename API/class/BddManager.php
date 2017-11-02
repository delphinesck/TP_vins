<?php

class BddManager {
    private $vinRepository;
    private $vendeurRepository;
    private $categorieRepository;
    private $connection;

    function __CONSTRUCT(){
        $this->connection = Connection::getConnection();
        $this->vinRepository = new VinRepository(Connection::getConnection());
        $this->vendeurRepository = new VendeurRepository(Connection::getConnection());
        $this->categorieRepository = new CategorieRepository(Connection::getConnection());
    }

    function getVinRepository(){
        return $this->vinRepository;
    }

    function getVendeurRepository(){
        return $this->vendeurRepository;
    }

    function getCategorieRepository(){
        return $this->categorieRepository;
    }
}

?>