import { Observable } from "rxjs";
import { SpotifyApi } from "./spotify-api";

export interface UserTopTrackFeatures {
  topTracks$?: SpotifyApi.UsersTopTracksResponse,
  trackFeatures$?: SpotifyApi.MultipleAudioFeaturesResponse
}
