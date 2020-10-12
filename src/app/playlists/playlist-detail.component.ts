import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-detail',
  template: `
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Playlista "{{ playlist.name }}"</h4>
        <p class="card-text">Wybrana Playlista</p>
        <div class="form-group">
          <button
            class="btn btn-default float-xs-right"
            (click)="edit(playlist)"
          >
            Edytuj
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PlaylistDetailComponent implements OnInit {
  @Input()
  playlist;

  @Output('editplaylist')
  onEdit = new EventEmitter();

  constructor() {}

  edit(playlist) {
    this.onEdit.emit(playlist); // wysyłamy playlistę wszystkim komponentom, które nasłuchują na tym elemencie
  }

  ngOnInit(): void {}
}
