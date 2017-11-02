export const BDD:{ 
    categories : { id:number, nom:string}[],
    vins : { id:number, nom:string, categorie_id:number }[],
    vendeurs : { id:number, nom:string, vins:number[] }[]
} 
    = {

    categories: [
        {
            id: 1,
            nom: "rouge"
        },
        {
            id: 2,
            nom: "rosé"
        },
        {
            id: 3,
            nom: "blanc"
        }
    ],
    vins : [
        {
            id : 1,
            nom : "Bordeaux",
            categorie_id : 1
        },
        {
            id : 2,
            nom : "Bordeaux",
            categorie_id : 1
        },
        {
            id : 3,
            nom : "Bordeaux",
            categorie_id : 1
        },
        {
            id : 4,
            nom : "Bordeaux",
            categorie_id : 1
        },
        {
            id : 5,
            nom : "Bordeaux",
            categorie_id : 1
        },
        {
            id : 6,
            nom : "José",
            categorie_id : 2
        },
        {
            id : 7,
            nom : "José",
            categorie_id : 2
        },
        {
            id : 8,
            nom : "José",
            categorie_id : 2
        },
        {
            id : 9,
            nom : "José",
            categorie_id : 2
        },
        {
            id : 10,
            nom : "José",
            categorie_id : 2
        },
        {
            id : 11,
            nom : "Rivesaltes",
            categorie_id : 3
        },
        {
            id : 12,
            nom : "Rivesaltes",
            categorie_id : 3
        },
        {
            id : 13,
            nom : "Rivesaltes",
            categorie_id : 3
        },
        {
            id : 14,
            nom : "Rivesaltes",
            categorie_id : 3
        },
        {
            id : 15,
            nom : "Rivesaltes",
            categorie_id : 3
        }
    ],
    vendeurs : [
        {
            id: 1,
            nom: "Paul",
            vins : [ 1, 15, 8, 4 ]
        },
        {
            id: 2,
            nom: "Jérémy",
            vins : [ 5, 2, 14 ]
        },
        {
            id: 3,
            nom: "Pierre",
            vins : [ 2, 8 ]
        }

    ]


}