import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { ContentCardComponent } from './content-card.component';
import { PlaylistFormComponent } from './playlist-form.component';
import { PlaylistsListComponent } from './playlists-list.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { PlaylistsService } from './playlists.service';

import playlistsData from './playlists.data';

@NgModule({
  declarations: [
    PlaylistsComponent,
    ContentCardComponent,
    PlaylistFormComponent,
    PlaylistsListComponent,
    PlaylistDetailComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [PlaylistsComponent],
  providers: [
    PlaylistsService,
    { provide: 'PlaylistsData', useValue: playlistsData },
    // {
    //   provide: 'PlaylistsData',
    //   useFactory: (data) => {
    //     data.push({
    //       id: 123,
    //       name: 'test',
    //       color: 'red',
    //       favourite: false,
    //       tracks: 11,
    //     });
    //     return data;
    //   },
    //   deps: ['PlaylistsExampleData'],
    // },
  ],
})
export class PlaylistsModule {}
