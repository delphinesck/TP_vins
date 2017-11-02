<?php

class CategorieRepository extends Repository {
    
    function getAll(){
        $query = "SELECT * FROM categories";
        $result = $this->connection->query($query);
        $result = $result->fetchAll(PDO::FETCH_ASSOC);
        $categories = [];
        foreach($result as $data){
            $categories[] = new Categorie($data);
        }
        return $categories;
    }
    
    function getById(Categorie $categorie){
        $query = "SELECT * FROM categories WHERE id=:id";
        $prep = $this->connection->prepare($query);
        $prep->execute([
            "id" => $categorie->getId()
        ]);
        $result = $prep->fetch(PDO::FETCH_ASSOC);
        if(empty($result)){
            return false;
        }
        else {
            return new Categorie($result);
        }
    }
}

?>