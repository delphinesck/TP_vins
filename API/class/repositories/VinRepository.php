<?php 

class VinRepository extends Repository {

    function getAll(){
        $query = "SELECT * FROM vins";
        $result = $this->connection->query($query);
        $result = $result->fetchAll(PDO::FETCH_ASSOC);
        $vins = [];
        foreach($result as $data){
            $vins[] = new Vin($data);
        }
        return $vins;  
    }

    function getById(Vin $vin){
        $query = "SELECT * FROM vins WHERE id=:id";
        $prep = $this->connection->prepare($query);
        $prep->execute([
            "id" => $vin->getId()
        ]);
        $result = $prep->fetch(PDO::FETCH_ASSOC);
        if(empty($result)){
            return false;
        }
        else {
            return new Vin($result);
        }
    }

    function save(Vin $vin){
        if(empty($vin->getId())){
            return $this->insert($vin);
        }
        else {
            return $this->update($vin);
        }
    }

    function getVinsByVendeurIdAndCategoryId(Vendeur $vendeur, Categorie $categorie){
        $query = "SELECT vins.id, vins.nom FROM vins
        JOIN vins_vendeurs ON vins_vendeurs.vendeur_id=:vendeur_id
        WHERE vins.categorie_id=:categorie_id 
        AND vins_vendeurs.vin_id=vins.id";
        $prep = $this->connection->prepare($query);
        $prep->execute([
            "vendeur_id" => $vendeur->getId(),
            "categorie_id" => $categorie->getId()
        ]);
        $result = $prep->fetchAll(PDO::FETCH_ASSOC);
        if(empty($result)){
            return false;
        }
        else {
            return $result;
        }
    }

    // private function insert( Note $note ){
    //     $query = "INSERT INTO notes SET title=:title, content=:content";
    //     $prep = $this->connection->prepare( $query );
    //     $prep->execute( [
    //         "title" => $note->getTitle(),
    //         "content" => $note->getContent()
    //     ] );
    //     return $this->connection->lastInsertId();
    // }

    // private function update( Note $note ){
    //     $query = "UPDATE notes SET title=:title, content=:content WHERE id=:id";
    //     $prep = $this->connection->prepare( $query );
    //     $prep->execute( [
    //         "title" => $note->getTitle(),
    //         "content" => $note->getContent(),
    //         "id" => $note->getId()
    //     ] );
    //     return $prep->rowCount();
    // }
    
    // function delete( Note $note ) {
    //     $query = "DELETE FROM notes WHERE id=:id";
    //     $prep = $this->connection->prepare( $query );
    //     $prep->execute([
    //         "id" => $note->getId()
    //     ]);
    //     return $prep->rowCount();
    // }
}