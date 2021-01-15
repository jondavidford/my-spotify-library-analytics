import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import { SpotifyService } from '../spotify.service';
import { SpotifyApi } from '../models/spotify-api/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topTracks$: Observable<SpotifyApi.UsersTopTracksResponse>;

  constructor(private authService: AuthService, private spotifyService: SpotifyService) {
    this.topTracks$ = this.spotifyService.getUserTopTracks();
    this.authService.user$.subscribe(user => {
      this.topTracks$ = this.spotifyService.getUserTopTracks();
    })
  }

  ngOnInit(): void {

  }

  user$: Observable<User> = this.authService.user$

}
