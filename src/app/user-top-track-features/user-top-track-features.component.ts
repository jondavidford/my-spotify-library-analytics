import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyApi } from '../models/spotify-api';
import { User } from '../models/user';
import { UserTopTrackFeatures } from '../models/userTopTrackFeatures';
import { SpotifyService } from '../spotify.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-top-track-features',
  templateUrl: './user-top-track-features.component.html',
  styleUrls: ['./user-top-track-features.component.scss']
})
export class UserTopTrackFeaturesComponent implements OnInit {
  topTracks$: Observable<SpotifyApi.UsersTopTracksResponse>;
  trackFeatures$: Observable<SpotifyApi.MultipleAudioFeaturesResponse>;

  constructor(private spotifyService: SpotifyService) {
    this.topTracks$ = this.spotifyService.getUserTopTracks();
    this.trackFeatures$ = this.topTracks$.pipe(
      mergeMap(topTracks => {
        const trackIds = topTracks.items.map(track => track.id);
        return this.spotifyService.getMultipleTrackFeatures(trackIds);
      })
    );
  }

  ngOnInit(): void {
  }

}
