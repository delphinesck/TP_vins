export class APIService {
    private static instance:APIService = null;
    static getService():APIService{
        if(!APIService.instance){
            APIService.instance = new APIService();
        }
        return APIService.instance;
    }
    private url:string = "http://192.168.110.37:8888/dragndrop%20exo2/API/";
    

    getAllVins(){
        var promise:Promise<string[]> = new Promise(function(resolve:any, reject:any){  
            $.ajax({
                url: this.url + "vins",
                method: "get",
                dataType: "json",
                success: function(data){
                    resolve(data);
                },
                error: function(error){
                    reject(error);
                }
            });  
        });
                
        promise.then(function(data){      
            for(let item of data){
                console.log(item);
            }
        });
        promise.catch(function(error){
            console.log(error);
        });
    }

    getVinById(id:number){
        var promise:Promise<string[]> = new Promise(function(resolve:any, reject:any){
            $.ajax({
                url: this.url + "vin/" + id,
                method: "get",
                dataType: "json",
                success: function(data){
                    resolve(data);
                },
                error: function(error){
                    reject(error);
                }
            });
        });

        promise.then(function(data){
            for(let item of data){
                console.log(item);
            }
        });
        promise.catch(function(error){
            console.log(error);
        });
    }

    getAllVendeurs(){
        var promise:Promise<string[]> = new Promise(function(resolve:any, reject:any){
            $.ajax({
                url: this.url + "vendeurs",
                method: "get",
                dataType: "json",
                success: function(data){
                    resolve(data);
                },
                error: function(error){
                    reject(error);
                }
            });
        });

        promise.then(function(data){
            for(let item of data){
                console.log(item);
            }
        });
        promise.catch(function(error){
            console.log(error);
        });
    }

    getVendeurById(id:number){
        var promise:Promise<string[]> = new Promise(function(resolve:any, reject:any){
            $.ajax({
                url: this.url + "vendeur/" + id,
                method: "get",
                dataType: "json",
                success: function(data){
                    resolve(data);
                },
                error: function(error){
                    reject(error);
                }
            });
        });

        promise.then(function(data){
            for(let item of data){
                console.log(item);
            }
        });
        promise.catch(function(error){
            console.log(error);
        });
    }

    getAllCategories(): Promise<{id:number, nom:string}[]>{
        var promise:Promise<{id:number, nom:string}[]> = new Promise((resolve:any, reject:any) => {
            $.ajax({
                url: this.url + "categories",
                method: "get",
                dataType: "json",
                success: function(data){
                    resolve(data);
                },
                error: function(error){
                    reject(error);
                }
            });
        });

        return promise;

        // promise.then(function(data){
        //     for(let item of data){
        //         console.log(item);
        //     }
        // });
        // promise.catch(function(error){
        //     console.log(error);
        // });
    }

    getCategorieById(id:number){
        var promise:Promise<string[]> = new Promise(function(resolve:any, reject:any){
            $.ajax({
                url: this.url + "categorie" + id,
                method: "get",
                dataType: "json",
                success: function(data){
                    resolve(data);
                },
                error: function(error){
                    reject(error);
                }
            });
        });

        promise.then(function(data){
            for(let item of data){
                console.log(item);
            }
        });
        promise.catch(function(error){
            console.log(error);
        });
    }

    
}