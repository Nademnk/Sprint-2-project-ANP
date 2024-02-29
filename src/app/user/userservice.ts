import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { customer } from "./Customer";
import { login } from "./login";
import { mdcnProducts } from "../medicine-admin/mdcnProducts";

@Injectable({
    providedIn:'root'
})
export class userservice {
    constructor(private http: HttpClient) { }
    getmdcnProducts() {//calling api
        const url = "http://localhost:8080/api/mdcnProducts/show";
        return this.http.get(url);
    }

    placeOrder(cust: customer) {
        const url = "http://localhost:8080/api/mdcnProducts/orderproduct";
        var headers = new HttpHeaders({ 'Content-Type': 'application/json', responseType: 'text' });
     
        //var respose=new HttpResponse({'Response-Type': 'text'});
        console.log(cust);
        return this.http.post(url, cust, { headers, 'responseType': 'text' });
    }

    userlogin(model:login)
    {
     const url="http://localhost:8080/api/userlogin/search/"+model.email+"/"+model.password;
     var headers=new HttpHeaders({'content-Type':'application/json',responseType:'text'});
     return this.http.get(url,{headers,'responseType':'text'});
    }
 
    usersignup(model:login)
    {
     const url="http://localhost:8080/api/userlogin/signup";
     var headers=new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
     return this.http.post(url,model,{headers,'responseType':'text'});
    }
}