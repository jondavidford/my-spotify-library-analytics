import { Component, OnInit, Input } from '@angular/core';
import { SpotifyApi } from '../models/spotify-api';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss']
})
export class TrackInfoComponent implements OnInit {

  @Input() track: SpotifyApi.TrackObjectFull;

  constructor() { }

  ngOnInit(): void {
  }

}
