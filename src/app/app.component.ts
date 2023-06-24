import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leuzzi-angular2.0';

  titlesPanels: string[] = ["Siti attivi", "Crea il tuo menu", "siti passati"];
  subtitles: string[] = ["lore ipsum", "lorem ipsum ipsum", "lorem lorem lorem lorem"];
}
