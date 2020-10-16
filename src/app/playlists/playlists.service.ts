import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsService {
  playlists = [
    {
      id: 1,
      name: 'Angular Greatest Hits!',
      tracks: 2,
      color: '#FF0000',
      favourite: true,
    },
    {
      id: 2,
      name: 'The best of EduWeb!',
      tracks: 23,
      color: '#0000FF',
      favourite: false,
    },
  ];

  getPlaylists() {
    return this.playlists;
  }

  constructor() {}
}
