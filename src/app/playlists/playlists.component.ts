import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
  selected = null;

  edited = {};

  mode = 'none';

  playlists = [];

  constructor(private playlistService: PlaylistsService) {
    this.playlists = playlistService.getPlaylists();
  }

  select(playlist) {
    if (playlist !== this.selected) this.mode = 'selected';
    this.selected = playlist;
  }

  edit(playlist) {
    this.mode = 'edit';
    this.edited = Object.assign({}, playlist);
    this.selected = playlist;
  }

  createNew() {
    this.mode = 'edit';
    var newPlaylist = {
      name: '',
      tracks: 0,
      color: '#FF0000',
      favourite: true,
    };
    this.selected = newPlaylist;
    this.edited = Object.assign({}, newPlaylist);
  }

  save(playlist) {
    if (playlist.id) {
      let index = this.playlists.findIndex((prev_playlist) => {
        return prev_playlist.id === playlist.id;
      });
      this.playlists.splice(index, 1, playlist);
    } else {
      playlist.id = Date.now();
      this.playlists.push(playlist);
    }
  }

  ngOnInit() {}
}
