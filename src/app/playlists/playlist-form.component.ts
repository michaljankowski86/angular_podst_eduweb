import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-form',
  template: `
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Playlista</h4>
        <p class="card-text">Opis playlisty</p>
      </div>
      <div class="card-block">
        <div class="form-group">
          <label>Nazwa:</label>
          <input type="text" [(ngModel)]="playlist.name" class="form-control" />
        </div>
        <div class="form-group">
          <label>Utwory:</label>
          <input
            type="text"
            [value]="playlist.tracks + ' utwory'"
            disabled
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>Kolor:</label>
          <input type="color" [(ngModel)]="playlist.color" />
        </div>
        <div class="form-group">
          <label
            ><input type="checkbox" [(ngModel)]="playlist.favourite" />
            Ulubiona</label
          >
        </div>
        <div class="form-group">
          <button class="btn btn-success float-xs-right" (click)="save($event)">
            Zapisz
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PlaylistFormComponent implements OnInit {
  @Input()
  playlist;

  constructor() {}

  save(event) {
    console.log('Zapisano', event);
  }

  ngOnInit(): void {}
}
