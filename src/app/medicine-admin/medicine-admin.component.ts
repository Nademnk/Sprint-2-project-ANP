import { Component } from '@angular/core';
import { adminService } from './adminService';
import { response } from 'express';
import { error } from 'console';

import { mdcnProducts } from './mdcnProducts';

@Component({
  selector: 'app-medicine-admin',
  templateUrl: './medicine-admin.component.html',
  styleUrl: './medicine-admin.component.css'
})
export class MedicineAdminComponent {
    constructor(private httpService: adminService){}
    posts:any;
    model=new mdcnProducts(1,"corosin", "painkiller", "Wow", 147, "tabler", 78);

    ngOnInit()
    {
      this.httpService.getmdcnProducts().subscribe(
        (response)=>{this.posts=response,
          console.log(this.posts);
        },
        (error)=>{console.log(error)}
      );
    }
    update(mdcnid:number, mdcnName:string, mdcnType:string, cmpnyOfmdcn:string, mdcnCost:number, mdcnDose:string, mdcnStock:number){
      this.model=new mdcnProducts(mdcnid, mdcnName, mdcnType, cmpnyOfmdcn, mdcnCost, mdcnDose, mdcnStock);
      this.httpService.update(this.model).subscribe(
        (response)=>{console.log(response)}
      )
      
      
     };
     Delete(mdcnid:number){
      this.httpService.Delete(mdcnid).subscribe(
        (response)=>{this.posts=response}
      )
     }
     
     model2=new mdcnProducts(1, "Peniciline", "Painkiller", "Pfizer", 127, "injection", 140);
     create()
     {
      this.httpService.create(this.model2).subscribe(
        
        (response)=>{console.log(response)}
        
      );
      
     }
  }

