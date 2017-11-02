System.register("APIService", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var APIService;
    return {
        setters: [],
        execute: function () {
            APIService = class APIService {
                constructor() {
                    this.url = "http://192.168.110.37:8888/dragndrop%20exo2/API/";
                }
                static getService() {
                    if (!APIService.instance) {
                        APIService.instance = new APIService();
                    }
                    return APIService.instance;
                }
                getAllVins() {
                    var promise = new Promise(function (resolve, reject) {
                        $.ajax({
                            url: this.url + "vins",
                            method: "get",
                            dataType: "json",
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    promise.then(function (data) {
                        for (let item of data) {
                            console.log(item);
                        }
                    });
                    promise.catch(function (error) {
                        console.log(error);
                    });
                }
                getVinById(id) {
                    var promise = new Promise(function (resolve, reject) {
                        $.ajax({
                            url: this.url + "vin/" + id,
                            method: "get",
                            dataType: "json",
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    promise.then(function (data) {
                        for (let item of data) {
                            console.log(item);
                        }
                    });
                    promise.catch(function (error) {
                        console.log(error);
                    });
                }
                getAllVendeurs() {
                    var promise = new Promise(function (resolve, reject) {
                        $.ajax({
                            url: this.url + "vendeurs",
                            method: "get",
                            dataType: "json",
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    promise.then(function (data) {
                        for (let item of data) {
                            console.log(item);
                        }
                    });
                    promise.catch(function (error) {
                        console.log(error);
                    });
                }
                getVendeurById(id) {
                    var promise = new Promise(function (resolve, reject) {
                        $.ajax({
                            url: this.url + "vendeur/" + id,
                            method: "get",
                            dataType: "json",
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    promise.then(function (data) {
                        for (let item of data) {
                            console.log(item);
                        }
                    });
                    promise.catch(function (error) {
                        console.log(error);
                    });
                }
                getAllCategories() {
                    var promise = new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "categories",
                            method: "get",
                            dataType: "json",
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    return promise;
                }
                getCategorieById(id) {
                    var promise = new Promise(function (resolve, reject) {
                        $.ajax({
                            url: this.url + "categorie" + id,
                            method: "get",
                            dataType: "json",
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    promise.then(function (data) {
                        for (let item of data) {
                            console.log(item);
                        }
                    });
                    promise.catch(function (error) {
                        console.log(error);
                    });
                }
            };
            APIService.instance = null;
            exports_1("APIService", APIService);
        }
    };
});
System.register("Model", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Model;
    return {
        setters: [],
        execute: function () {
            Model = class Model {
                constructor(id) {
                    this.id = id;
                }
                getId() {
                    return this.id;
                }
                get$Dom() {
                    return this.$dom;
                }
            };
            exports_2("Model", Model);
        }
    };
});
System.register("Categorie", ["Model"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Model_1, Categorie;
    return {
        setters: [
            function (Model_1_1) {
                Model_1 = Model_1_1;
            }
        ],
        execute: function () {
            Categorie = class Categorie extends Model_1.Model {
                constructor(id, nom) {
                    super(id);
                    this.nom = nom;
                }
                getName() {
                    return this.nom;
                }
                display($parent) {
                    let div = "<div class='vins_box container' id='" + this.nom + "' data-category='" + this.id + "' ></div>";
                    this.$dom = $(div);
                    $parent.append($("<h2>Vins " + this.nom + "s</h2>"));
                    $parent.append(this.$dom);
                }
            };
            exports_3("Categorie", Categorie);
        }
    };
});
System.register("Vin", ["Model"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Model_2, Vin;
    return {
        setters: [
            function (Model_2_1) {
                Model_2 = Model_2_1;
            }
        ],
        execute: function () {
            Vin = class Vin extends Model_2.Model {
                constructor(id, nom, categorie) {
                    super(id);
                    this.nom = nom;
                    this.categorie = categorie;
                }
                display($parent) {
                    let categorie_nom = this.categorie.getName();
                    let id = categorie_nom + this.id;
                    let div = "<div class='vin " + categorie_nom + "' id='" + id + "' data-id='" + this.id + "' draggable='true' >🍷</div>";
                    this.$dom = $(div);
                    $parent.append(this.$dom);
                }
                getCategorie() {
                    return this.categorie;
                }
            };
            exports_4("Vin", Vin);
        }
    };
});
System.register("BDD", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var BDD;
    return {
        setters: [],
        execute: function () {
            exports_5("BDD", BDD = {
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
                vins: [
                    {
                        id: 1,
                        nom: "Bordeaux",
                        categorie_id: 1
                    },
                    {
                        id: 2,
                        nom: "Bordeaux",
                        categorie_id: 1
                    },
                    {
                        id: 3,
                        nom: "Bordeaux",
                        categorie_id: 1
                    },
                    {
                        id: 4,
                        nom: "Bordeaux",
                        categorie_id: 1
                    },
                    {
                        id: 5,
                        nom: "Bordeaux",
                        categorie_id: 1
                    },
                    {
                        id: 6,
                        nom: "José",
                        categorie_id: 2
                    },
                    {
                        id: 7,
                        nom: "José",
                        categorie_id: 2
                    },
                    {
                        id: 8,
                        nom: "José",
                        categorie_id: 2
                    },
                    {
                        id: 9,
                        nom: "José",
                        categorie_id: 2
                    },
                    {
                        id: 10,
                        nom: "José",
                        categorie_id: 2
                    },
                    {
                        id: 11,
                        nom: "Rivesaltes",
                        categorie_id: 3
                    },
                    {
                        id: 12,
                        nom: "Rivesaltes",
                        categorie_id: 3
                    },
                    {
                        id: 13,
                        nom: "Rivesaltes",
                        categorie_id: 3
                    },
                    {
                        id: 14,
                        nom: "Rivesaltes",
                        categorie_id: 3
                    },
                    {
                        id: 15,
                        nom: "Rivesaltes",
                        categorie_id: 3
                    }
                ],
                vendeurs: [
                    {
                        id: 1,
                        nom: "Paul",
                        vins: [1, 15, 8, 4]
                    },
                    {
                        id: 2,
                        nom: "Jérémy",
                        vins: [5, 2, 14]
                    },
                    {
                        id: 3,
                        nom: "Pierre",
                        vins: [2, 8]
                    }
                ]
            });
        }
    };
});
System.register("Vendeur", ["Model"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var Model_3, Vendeur;
    return {
        setters: [
            function (Model_3_1) {
                Model_3 = Model_3_1;
            }
        ],
        execute: function () {
            Vendeur = class Vendeur extends Model_3.Model {
                constructor(id, nom, vins) {
                    super(id);
                    this.$element = $("#vinsvendeur");
                    this.$tous = $("#vins");
                    this.nom = nom;
                    this.vins = vins;
                }
                getProducts() {
                    return this.vins;
                }
                addProduct(vin) {
                    this.vins.push(vin);
                }
                removeProduct(vin) {
                    for (let key in this.vins) {
                        let vproduct = this.vins[key];
                        if (vproduct.getId() == vin.getId()) {
                            this.vins.splice(parseInt(key), 1);
                        }
                        return;
                    }
                }
                display($parent) {
                    let div = "<div class='vendeur' id='" + this.id + "' >" + this.nom + "</div>";
                    this.$dom = $(div);
                    $parent.append(this.$dom);
                }
            };
            exports_6("Vendeur", Vendeur);
        }
    };
});
System.register("App", ["Vin", "BDD", "Vendeur", "Categorie", "APIService"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var Vin_1, BDD_1, Vendeur_1, Categorie_1, APIService_1, App;
    return {
        setters: [
            function (Vin_1_1) {
                Vin_1 = Vin_1_1;
            },
            function (BDD_1_1) {
                BDD_1 = BDD_1_1;
            },
            function (Vendeur_1_1) {
                Vendeur_1 = Vendeur_1_1;
            },
            function (Categorie_1_1) {
                Categorie_1 = Categorie_1_1;
            },
            function (APIService_1_1) {
                APIService_1 = APIService_1_1;
            }
        ],
        execute: function () {
            App = class App {
                constructor() {
                    this.api = APIService_1.APIService.getService();
                    this.tous_vins = [];
                    this.toutes_categories = [];
                    this.tous_vendeurs = [];
                    this.$vin = $(".vin");
                    this.$categories_container = $("#vins");
                    this.$categorie_vendeurs = $("h3");
                    this.$container = $(".container");
                    this.$vinsvendeur = $("#vinsvendeur");
                    this.getAllCategories();
                    this.getAllVins();
                    this.getAllVendeurs();
                    this.displayVendeurs();
                }
                getAllVins() {
                    let vins = BDD_1.BDD.vins;
                    for (let vin of vins) {
                        let the_vin = new Vin_1.Vin(vin.id, vin.nom, this.getCategorieById(vin.categorie_id));
                        this.tous_vins.push(the_vin);
                    }
                }
                getAllCategories() {
                    this.api.getAllCategories()
                        .then((categories) => {
                        console.log(categories);
                        for (let categorie of categories) {
                            let the_categorie = new Categorie_1.Categorie(categorie.id, categorie.nom);
                            this.toutes_categories.push(the_categorie);
                        }
                        this.displayCategories();
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                }
                ;
                getAllVendeurs() {
                    let vendeurs = BDD_1.BDD.vendeurs;
                    for (let vendeur of vendeurs) {
                        let vendeurs_vins = [];
                        for (let vin_id of vendeur.vins) {
                            let the_vin = this.getProductById(vin_id);
                            vendeurs_vins.push(the_vin);
                        }
                        let the_vendeur = new Vendeur_1.Vendeur(vendeur.id, vendeur.nom, vendeurs_vins);
                        this.tous_vendeurs.push(the_vendeur);
                    }
                }
                getCategorieById(id) {
                    for (let categorie of this.toutes_categories) {
                        if (id == categorie.getId()) {
                            return categorie;
                        }
                    }
                    return null;
                }
                getProductById(id) {
                    for (let vin of this.tous_vins) {
                        if (id == vin.getId()) {
                            return vin;
                        }
                        ;
                    }
                    return null;
                }
                displayCategories() {
                    for (let categorie of this.toutes_categories) {
                        categorie.display(this.$categories_container);
                    }
                }
                getVendeurById(vendeurid) {
                    for (let vendeur of this.tous_vendeurs) {
                        if (vendeurid == vendeur.getId()) {
                            return vendeur;
                        }
                    }
                    return null;
                }
                displayVins(vendeur) {
                    let vendeur_vins = vendeur.getProducts();
                    for (let vin of this.tous_vins) {
                        let find = false;
                        for (let le_vin of vendeur_vins) {
                            if (le_vin.getId() == vin.getId()) {
                                find = true;
                            }
                        }
                        if (find == true) {
                            vin.display(this.$vinsvendeur);
                        }
                        else {
                            let categorie_name = vin.categorie.getName();
                            vin.display($("#" + categorie_name));
                        }
                    }
                }
                displayVendeurs() {
                    for (let vendeur of this.tous_vendeurs) {
                        vendeur.display(this.$categorie_vendeurs);
                    }
                }
                getCurrentVendeur() {
                    return this.currentVendeur;
                }
                setCurrentVendeur(vendeur) {
                    this.currentVendeur = vendeur;
                }
            };
            exports_7("App", App);
        }
    };
});
System.register("main", ["App", "APIService"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var App_1, APIService_2, app, api;
    return {
        setters: [
            function (App_1_1) {
                App_1 = App_1_1;
            },
            function (APIService_2_1) {
                APIService_2 = APIService_2_1;
            }
        ],
        execute: function () {
            app = new App_1.App();
            api = APIService_2.APIService.getService();
            $(document).on("dragover", ".container", function (event) {
                event.preventDefault();
            });
            $(document).on("dragstart", ".vin", function (event) {
                let dragEvent = event.originalEvent;
                dragEvent.dataTransfer.setData("id", $(this).attr("data-id"));
            });
            $(document).on("drop", "#vinsvendeur", function (event) {
                const dragEvent = event.originalEvent;
                const vin_id = parseInt(dragEvent.dataTransfer.getData("id"));
                let vin = app.getProductById(vin_id);
                let vendeur = app.currentVendeur;
                vendeur.addProduct(vin);
                $(this).append(vin.get$Dom());
            });
            $(document).on("drop", ".vins_box", function (event) {
                const dragEvent = event.originalEvent;
                let id_product = parseInt(dragEvent.dataTransfer.getData("id"));
                let product = app.getProductById(id_product);
                app.getCurrentVendeur().removeProduct(product);
                product.getCategorie().get$Dom()
                    .append(product.get$Dom());
            });
            $(document).on("click", ".vendeur", function () {
                let id = parseInt($(this).attr("id"));
                $("#vinsvendeur").children().remove();
                $(".vins_box").children().remove();
                $("#vinsvendeur").removeClass("bgvin");
                $(".vendeur").css("background-color", "rgb(185, 163, 136)");
                $(".vendeur").css("color", "white");
                $(this).css("background-color", "white");
                $(this).css("color", "black");
                let vendeur = app.getVendeurById(id);
                app.currentVendeur = vendeur;
                app.displayVins(vendeur);
            });
        }
    };
});
//# sourceMappingURL=main.js.map