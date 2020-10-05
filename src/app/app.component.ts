import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Witaj w kursie Angular!';

  selected = null;

  edited = {};

  playlist = {
    name: 'The best of EduWeb!',
    tracks: 23,
    color: '#FF0000',
    favourite: true,
  };

  save(event) {
    console.log('Zapisano', event);
  }

  constructor() {}
}
