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
                getConnexion(username, upassword) {
                    var promise = new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "connexion",
                            method: "post",
                            dataType: "json",
                            data: {
                                username: username,
                                upassword: upassword
                            },
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
                getVinsByVendeurIdAndCategoryId(id, catid) {
                    var promise = new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "vins/vendeur/" + id + "/category/" + catid,
                            method: "get",
                            dataType: "json",
                            success: function (data) {
                                resolve(data.vins);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    return promise;
                }
                getVinById(id) {
                    var promise = new Promise((resolve, reject) => {
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
                    return promise;
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
System.register("Vin", ["Model"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Model_1, Vin;
    return {
        setters: [
            function (Model_1_1) {
                Model_1 = Model_1_1;
            }
        ],
        execute: function () {
            Vin = class Vin extends Model_1.Model {
                constructor(id, nom, categorie, photo, description, pays, contenance, annee) {
                    super(id);
                    this.nom = nom;
                    this.categorie = categorie;
                    this.photo = photo;
                    this.description = description;
                    this.pays = pays;
                    this.contenance = contenance;
                    this.annee = annee;
                }
                display($parent) {
                    let categorie_code = this.categorie.getCode();
                    let categorie_nom = this.categorie.getNom();
                    let div = "<div class='vin_box " + this.categorie.getCode() + "' data-id='" + this.id + "' >";
                    div += "<h6>" + this.nom + "</h6></div>";
                    this.$dom = $(div);
                    $parent.append(this.$dom);
                }
                getNom() {
                    return this.nom;
                }
                getCategorie() {
                    return this.categorie;
                }
                getPhoto() {
                    return this.photo;
                }
                getDescription() {
                    return this.description;
                }
                getPays() {
                    return this.pays;
                }
                getContenance() {
                    return this.contenance;
                }
                getAnnee() {
                    return this.annee;
                }
            };
            exports_3("Vin", Vin);
        }
    };
});
System.register("Categorie", ["Model"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Model_2, Categorie;
    return {
        setters: [
            function (Model_2_1) {
                Model_2 = Model_2_1;
            }
        ],
        execute: function () {
            Categorie = class Categorie extends Model_2.Model {
                constructor(id, nom, code) {
                    super(id);
                    this.nom = nom;
                    this.code = code;
                }
                getNom() {
                    return this.nom;
                }
                getCode() {
                    return this.code;
                }
                display($parent) {
                    let div = "<div class='categorievin' id='" + this.code + "' data-id='" + this.id + "'><span>" + this.nom + "</span></div>";
                    this.$dom = $(div);
                    $parent.append(this.$dom);
                }
            };
            exports_4("Categorie", Categorie);
        }
    };
});
System.register("Vendeur", ["Model"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var Model_3, Vendeur;
    return {
        setters: [
            function (Model_3_1) {
                Model_3 = Model_3_1;
            }
        ],
        execute: function () {
            Vendeur = class Vendeur extends Model_3.Model {
                constructor(id, nom, username, upassword) {
                    super(id);
                    this.nom = nom;
                    this.username = username;
                    this.upassword = upassword;
                }
                display($parent) {
                    throw new Error("Method not implemented.");
                }
            };
            exports_5("Vendeur", Vendeur);
        }
    };
});
System.register("App", ["APIService", "Categorie", "Vin", "Vendeur"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var APIService_1, Categorie_1, Vin_1, Vendeur_1, App;
    return {
        setters: [
            function (APIService_1_1) {
                APIService_1 = APIService_1_1;
            },
            function (Categorie_1_1) {
                Categorie_1 = Categorie_1_1;
            },
            function (Vin_1_1) {
                Vin_1 = Vin_1_1;
            },
            function (Vendeur_1_1) {
                Vendeur_1 = Vendeur_1_1;
            }
        ],
        execute: function () {
            App = class App {
                constructor() {
                    this.api = APIService_1.APIService.getService();
                    this.$form = $("#formconnexion");
                    this.$username = $("#username");
                    this.$upassword = $("#upassword");
                    this.currentVendeur = null;
                    this.currentVin = null;
                    this.toutes_categories = [];
                    this.tous_vins = [];
                    this.$categories_box = $("#categories_box");
                    this.$pagevins_box = $("#pagevins_box");
                    this.getAllCategories();
                }
                switchPage($currentPage, $nextPage, callback) {
                    $nextPage.show();
                    $currentPage.fadeTo("slow", 0, function () {
                        $nextPage.css("z-index", 1);
                        $currentPage.css("z-index", 0);
                        $currentPage.css("opacity", 1);
                        $currentPage.hide();
                        callback();
                    });
                }
                getConnexion() {
                    this.api.getConnexion(this.$username.val().toString(), this.$upassword.val().toString())
                        .then((data) => {
                        if (data.toString() != "false") {
                            this.switchPage($("#pageconnexion"), $("#pagecategories"), function () { });
                            this.currentVendeur = new Vendeur_1.Vendeur(data.id, data.nom, data.username, data.upassword);
                        }
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                }
                getAllCategories() {
                    this.api.getAllCategories()
                        .then((categories) => {
                        for (let categorie of categories) {
                            let the_categorie = new Categorie_1.Categorie(categorie.id, categorie.nom, categorie.code);
                            this.toutes_categories.push(the_categorie);
                        }
                        this.displayCategories();
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                }
                ;
                displayCategories() {
                    for (let categorie of this.toutes_categories) {
                        categorie.display(this.$categories_box);
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
                getVinsByVendeurIdAndCategoryId(id, catid) {
                    this.api.getVinsByVendeurIdAndCategoryId(id, catid)
                        .then((data) => {
                        var vins = [];
                        for (let vin of data) {
                            let categorie = this.getCategorieById(catid);
                            let the_vin = new Vin_1.Vin(vin.id, vin.nom, categorie, vin.photo, vin.description, vin.pays, vin.contenance, vin.annee);
                            vins.push(the_vin);
                        }
                        this.switchPage($("#pagecategories"), $("#pagevins"), function () { });
                        vins.forEach(function (vin) {
                            vin.display($("#pagevins_box"));
                        });
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                }
                getVinById(id) {
                    this.api.getVinById(id)
                        .then((data) => {
                        let data_vin = data.vin;
                        let categorie = this.getCategorieById(data_vin.categorie_id);
                        let the_vin = new Vin_1.Vin(data_vin.id, data_vin.nom, categorie, data_vin.photo, data_vin.description, data_vin.pays, data_vin.contenance, data_vin.annee);
                        this.displayVin(the_vin);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                }
                displayVin(vin) {
                    let cat = vin.getCategorie();
                    let div = "<img src='" + vin.getPhoto() + "' class='imgvin'>";
                    div += "<div id='vindescription'>Vin " + cat.getNom() + "<br />";
                    div += "<h5>" + vin.getNom() + "</h5><br />";
                    div += "Pays d'origine : " + vin.getPays() + "<br />";
                    div += "Année : " + vin.getAnnee() + "<br />";
                    div += "Contenance : " + vin.getContenance() + "<br /><br />";
                    div += "Description : " + vin.getDescription() + "</div>";
                    var $dom = $(div);
                    $("#vinselect_box").append($dom);
                }
            };
            exports_6("App", App);
        }
    };
});
System.register("main", ["App", "APIService"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
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
            app.$form.submit(function (event) {
                event.preventDefault();
                app.getConnexion();
            });
            $(document).on("click", ".categorievin", function (event) {
                let id = parseInt($(this).attr("data-id"));
                let vendeur_id = app.currentVendeur.getId();
                let vins_vendeur = app.getVinsByVendeurIdAndCategoryId(vendeur_id, id);
            });
            $(document).on("click", "#retour1", function (event) {
                app.switchPage($("#pagevins"), $("#pagecategories"), function () {
                    $("#pagevins_box").children().remove();
                });
            });
            $(document).on("click", "#retour2", function (event) {
                app.switchPage($("#pagevinselect"), $("#pagevins"), function () {
                    $("#vinselect_box").children().remove();
                });
            });
            $(document).on("click", ".vin_box", function (event) {
                let vin_id = parseInt($(this).attr("data-id"));
                app.getVinById(vin_id);
                app.switchPage($("#pagevins"), $("#pagevinselect"), function () { });
            });
            $(".page").hide();
            $("#pageconnexion").show();
        }
    };
});
//# sourceMappingURL=main.js.map