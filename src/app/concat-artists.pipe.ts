import { Pipe, PipeTransform } from '@angular/core';
import { SpotifyApi } from './models/spotify-api';

@Pipe({
  name: 'concatArtists'
})
export class ConcatArtistsPipe implements PipeTransform {

  transform(value: SpotifyApi.ArtistObjectSimplified[]): string {
    return value.map((artist) => artist.name).join(', ');
  }

}
