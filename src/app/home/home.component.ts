import { Component } from '@angular/core';
import { login } from '../user/login';
import { userservice } from '../user/userservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  model=new login("nadeem","123");
  posts:any;
  constructor(private httpService:userservice, private router:Router){}
  userlogin(){
   this.httpService.userlogin(this.model).subscribe(
     (response:string)=>{this.posts=response;
       console.log (this.posts);
        if(this.posts==="you are welcome")
        this.router.navigate(['/User']);
       else
       alert(this.posts);
     }
   );
  }
 
  usersignup(){
   this.httpService.usersignup(this.model).subscribe(
     (response)=>{
       this.posts = response;
       console.log(response);
       alert(this.posts);
     },
     error => console.log(error)
   )
 
  }
 
  adminLogin(){
     this.router.navigate(['/MedicineAdmin'])
  }
}
