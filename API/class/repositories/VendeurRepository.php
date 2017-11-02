<?php

class VendeurRepository extends Repository {

    function getAll(){
        $query = "SELECT * FROM vendeurs";
        $result = $this->connection->query($query);
        $result = $result->fetchAll(PDO::FETCH_ASSOC);
        $vendeurs = [];
        foreach($result as $data){
            $vendeurs[] = new Vendeur($data);
        }
        return $vendeurs;
    }

    function getById(Vendeur $vendeur){
        $query = "SELECT * FROM vendeurs WHERE id=:id";
        $prep = $this->connection->prepare($query);
        $prep->execute([
            "id" => $vendeur->getId()
        ]);
        $result = $prep->fetch(PDO::FETCH_ASSOC);
        if(empty($result)){
            return false;
        }
        else {
            return new Vendeur($result);
        }
    }

    function login(Vendeur $vendeur){
        $query = "SELECT * FROM vendeurs WHERE username=:username AND upassword=:upassword";
        $prep = $this->connection->prepare($query);
        $prep->execute([
            "username" => $vendeur->getUsername(),
            "upassword" => $vendeur->getUpassword()
        ]);
        $result = $prep->fetch(PDO::FETCH_ASSOC);
        if(empty($result)){
            return false;
        }
        else{
            return $result;
        }
    }
}

?>