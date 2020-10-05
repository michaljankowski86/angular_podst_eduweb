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

  mode = 'none';

  playlist = {
    name: 'The best of EduWeb!',
    tracks: 23,
    color: '#FF0000',
    favourite: true,
  };

  select(playlist) {
    if (playlist == null) {
      this.mode = 'none';
      this.selected = null;
    } else {
      this.mode = 'selected';
      this.selected = playlist;
    }
  }

  edit(playlist) {
    this.mode = 'edit';
    this.edited = playlist;
    this.selected = playlist;
  }

  createNew() {
    this.mode = 'edit';
    var newPlaylist = {};
    this.selected = newPlaylist;
    this.edited = newPlaylist;
  }

  save(event) {
    console.log('Zapisano', event);
  }

  constructor() {}
}
