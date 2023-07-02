import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class AppComponent {
  title = 'leuzzi-angular2.0';

  titlesPanels: string[] = ["Siti attivi", "Crea il tuo menu", "Siti passati"];
  subtitles: string[] = ["lore ipsum", "Alcuni esempi completamente personalizzabili", "lorem lorem lorem lorem"];
  
  constructor(private router: Router) { } 

  clickButton(path: string) {
    this.router.navigate([path]);  
  }
}
