import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-podst';

  selected = null;

  constructor() {}

  playlist = {
    name: 'The best songs',
    tracks: 23,
    color: '#ff0000',
    favourite: false,
  };

  size = 26;

  save(event) {
    console.log(event);
  }
}
