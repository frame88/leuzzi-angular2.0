import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  titlesPanels: string[] = ["Siti attivi", "Crea il tuo menu", "Siti passati"];
  subtitles: string[] = ["lore ipsum", "Alcuni esempi completamente personalizzabili", "lorem lorem lorem lorem"];
  
  constructor(private router: Router) { } 

  clickButton(path: string) {
    this.router.navigate([path]);  
  }

}
