import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { SpotifyApi } from './models/spotify-api/index';
import { UserTopTrackFeatures } from './models/userTopTrackFeatures';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUserTopTracks(): Observable<SpotifyApi.UsersTopTracksResponse> {
    return this.http.get<SpotifyApi.UsersTopTracksResponse>('https://api.spotify.com/v1/me/top/tracks?limit=10');
  }

  getMultipleTrackFeatures(tracks: string[]): Observable<SpotifyApi.MultipleAudioFeaturesResponse> {
    const commaSeparatedTracks = tracks.join(',');
    return this.http.get<SpotifyApi.MultipleAudioFeaturesResponse>(`https://api.spotify.com/v1/audio-features?ids=${commaSeparatedTracks}`);
  }

  // getUserTopTrackFeatures(): Observable<UserTopTrackFeatures> {
  //   this.getUserTopTracks().pipe(
  //     switchMap(topTracks => {
  //       const trackIds = topTracks.items.map(track => track.id);
  //       topTrackFeatures.trackFeatures$ = this.getMultipleTrackFeatures(trackIds);
  //     })
  //   )
  //   topTrackFeatures.topTracks$.subscribe(topTracks => {
      
  //   });
  //   return topTrackFeatures;
  // }
}
