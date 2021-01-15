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
  private _topTracks: SpotifyApi.UsersTopTracksResponse | undefined = undefined;

  constructor(private authService: AuthService, private spotifyService: SpotifyService) { }

  ngOnInit(): void { }

  user$: Observable<User> = this.authService.user$

  getTopTracks(): void {
    debugger;
    this.spotifyService.getUserTopTracks().subscribe(next => this._topTracks = next);
  }

  topTracks = this._topTracks;

}
