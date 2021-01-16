import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { SpotifyApi } from './models/spotify-api/index';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUserTopTracks(): Observable<SpotifyApi.UsersTopTracksResponse> {
    return this.http.get<SpotifyApi.UsersTopTracksResponse>('https://api.spotify.com/v1/me/top/tracks?limit=10');
  }

  getMultipleTrackAnalytics(tracks: string[]): Observable<SpotifyApi.MultipleAudioFeaturesResponse> {
    const commaSeparatedTracks = tracks.join(',');
    return this.http.get<SpotifyApi.MultipleAudioFeaturesResponse>(`https://api.spotify.com/v1/audio-features?ids=${commaSeparatedTracks}`);
  }
}
