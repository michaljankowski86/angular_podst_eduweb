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

  constructor(private playlistService: PlaylistsService) {}

  ngOnInit() {
    this.playlists = this.playlistService.getPlaylists();
    console.log(this.playlists);
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
    let newPlaylist = this.playlistService.createPlaylist();
    this.selected = newPlaylist;
    this.edited = newPlaylist;
  }

  save(playlist) {
    this.playlistService.savePlaylist(playlist);
  }
}
