import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


import { mdcnProducts } from "./mdcnProducts";

@Injectable({
    providedIn: 'root'
})
export class adminService {
    constructor(private http: HttpClient) { }
    getmdcnProducts() {
        {
            const url = "http://localhost:8080/api/mdcnProducts/show";
            return this.http.get(url);
        }
    }

    update(p: mdcnProducts) //calling api
    {
        const url = "http://localhost:8080/api/mdcnProducts/update/" + p.mdcnid;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(url, p, { headers });
    }
    Delete(mdcnid: number) {
        const url = "http://localhost:8080/api/mdcnProducts/delete/" + mdcnid;
        return this.http.delete(url);
    }
    create(model: mdcnProducts) {
        const url = "http://localhost:8080/api/mdcnProducts/create";
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' })
        return this.http.post(url, model, { headers });
    }
}
