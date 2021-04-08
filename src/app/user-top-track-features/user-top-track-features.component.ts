import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import { TrackObjectFeatures } from '../models/trackObjectFeatures';

@Component({
  selector: 'app-user-top-track-features',
  templateUrl: './user-top-track-features.component.html',
  styleUrls: ['./user-top-track-features.component.scss']
})

export class UserTopTrackFeaturesComponent implements OnInit {
  userTopTracksObjectFeatures$: Observable<TrackObjectFeatures[]>;

  constructor(private spotifyService: SpotifyService) { 
    this.userTopTracksObjectFeatures$ = this.spotifyService.getUserTopTrackFeatures();
  }

  ngOnInit(): void { }

}
