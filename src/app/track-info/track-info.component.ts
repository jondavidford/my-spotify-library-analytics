import { Component, OnInit, Input } from '@angular/core';
import { TempoCategory } from '../models/tempo-category';
import { TrackObjectFeatures } from '../models/trackObjectFeatures';
import { TempoCategorizationService } from '../tempo-categorization.service';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss']
})
export class TrackInfoComponent implements OnInit {

  @Input() trackObjectFeatures: TrackObjectFeatures;

  constructor(private _tempoCategorizationService: TempoCategorizationService) { }

  ngOnInit(): void {
  }

  categorizeTempo(tempo: number): TempoCategory {
    return this._tempoCategorizationService.categorize(tempo);
  }

}
