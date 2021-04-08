import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, zip } from 'rxjs';
import { catchError, retry, switchMap, tap, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { SpotifyApi } from './models/spotify-api/index';
import { TrackObjectFeatures } from './models/trackObjectFeatures';

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

  getUserTopTrackFeatures(): Observable<TrackObjectFeatures[]> {
    return this.getUserTopTracks().pipe(
      switchMap(topTracks => {
        const trackIds = topTracks.items.map(track => track.id);
        return this.getMultipleTrackFeatures(trackIds).pipe(
          map((trackFeatures) => {
            return topTracks.items.map((e, i) => {
              const trackObjectFeatures: TrackObjectFeatures = { track: e, features: trackFeatures.audio_features[i]};
              return trackObjectFeatures;
            });
          })
        );
      })
    );
  }
}
