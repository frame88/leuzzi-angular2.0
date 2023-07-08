import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent {
  
  constructor(private router: Router) { } 

  goHome(path: string) {
    this.router.navigate([path]);  
  }

}
