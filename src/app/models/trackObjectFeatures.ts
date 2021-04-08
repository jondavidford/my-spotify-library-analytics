import { SpotifyApi } from "./spotify-api";

export interface TrackObjectFeatures {
  track: SpotifyApi.TrackObjectFull,
  features: SpotifyApi.AudioFeaturesObject
}