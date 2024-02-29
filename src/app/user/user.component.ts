import { Component } from '@angular/core';
import { cart } from '../Cart';
import { customer } from './Customer';
import { userservice } from './userservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  httpService: any;

  constructor(private http: userservice, private router: Router) { }
  products: any;
  cart1: cart[] = new Array();

  ngOnInit() {
    this.http.getmdcnProducts().subscribe(
      (response) => {
        this.products = response;
        console.log(this.products)
      },
      (error) => { console.log(error) }
    );
  }
  Quantity: any;
  total: number = 0;
  addtocart(mdcnid: number, mdcnName: string, mdcnCost: number) {
    this.total = 0;
    this.cart1.push(new cart(mdcnName,mdcnid, mdcnCost,  this.Quantity, mdcnCost* this.Quantity));
    console.log(this.cart1);
    for (let i of this.cart1) {
      console.log(this.total);
      this.total += i.total;
    }

  }

  cust = new customer(7897412369, "nadeem", this.cart1, "kazim@gmail.com");
  
  m: any;
  placeOrder() {
  this.cust.cart=this.cart1;
   console.log(this.cust);
   console.log(this.cart1);
    this.http.placeOrder(this.cust).subscribe(
      (response: string) => {
        this.m = response;
        console.log(this.m);
        if (this.m.indexOf('your order has been placed successfully') != -1)
          this.router.navigate(['/Succsess'])
        else
          document.write(this.m);
      },
      (error: any) => { console.log(error) },
    );
  }
}
