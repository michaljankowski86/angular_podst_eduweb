import { Injectable, Inject, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsService {
  playlists = [];

  constructor(@Optional() @Inject('PlaylistsData') playlistsData) {
    this.playlists = playlistsData === null ? this.playlists : playlistsData;
  }

  savePlaylist(playlist) {
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

  createPlaylist() {
    var newPlaylist = {
      name: '',
      tracks: 0,
      color: '#FF0000',
      favourite: true,
    };
    return Object.assign({}, newPlaylist);
  }

  getPlaylists() {
    return this.playlists;
  }
}
