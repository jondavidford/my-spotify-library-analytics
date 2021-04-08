import { Component, OnInit, Input } from '@angular/core';
import { SpotifyApi } from '../models/spotify-api';
import { TrackObjectFeatures } from '../models/trackObjectFeatures';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss']
})
export class TrackInfoComponent implements OnInit {

  @Input() trackObjectFeatures: TrackObjectFeatures;

  constructor() { }

  ngOnInit(): void {
  }

}
