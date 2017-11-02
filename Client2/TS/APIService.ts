export class APIService {
    private static instance:APIService = null;
    static getService():APIService{
        if(!APIService.instance){
            APIService.instance = new APIService();
        }
        return APIService.instance;
    }
    private url:string = "http://192.168.110.37:8888/dragndrop%20exo2/API/";

    getConnexion(username:string, upassword:string){
        var promise:Promise<string[]> = new Promise((resolve:any, reject:any) => {
            $.ajax({
                url: this.url + "connexion",
                method: "post",
                dataType: "json",
                data: {
                    username: username,
                    upassword: upassword
                },
                success: function(data){
                    resolve(data);
                },
                error: function(error){
                    reject(error);
                }
            });
        });

        return promise;
    }

    getAllCategories():Promise<{id:number, nom:string, code:string}[]>{
        var promise:Promise<{id:number, nom:string, code:string}[]> = new Promise((resolve:any, reject:any) => {
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
    }

    getVinsByVendeurIdAndCategoryId(id:number, catid:number) {
        var promise:Promise< any[] > = new Promise((resolve:any, reject:any) => {
            $.ajax({
                url: this.url + "vins/vendeur/" + id + "/category/" + catid ,
                method: "get",
                dataType: "json",
                success: function(data: {success: boolean, vins: any[]}){
                    resolve(data.vins);
                },
                error: function(error){
                    reject(error);
                }
            });
        });

        return promise;
    }

    getVinById(id:number){
        var promise:Promise<any> = new Promise((resolve:any, reject:any) => {
            $.ajax({
                url: this.url + "vin/" + id,
                method: "get",
                dataType: "json",
                success: function(data: {success:boolean, vin:any[]}){
                    resolve(data);
                },
                error: function(error){
                    reject(error);
                }
            });
        });

        return promise;
    }

}