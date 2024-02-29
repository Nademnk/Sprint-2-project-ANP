import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-succsess',
  templateUrl: './succsess.component.html',
  styleUrl: './succsess.component.css'
})
export class SuccsessComponent {
    
  constructor(private router: Router) { }

  navigateToStore() {
    this.router.navigate(['/User']); // Navigate to the home page (replace '/' with the appropriate route path)
  }
}
