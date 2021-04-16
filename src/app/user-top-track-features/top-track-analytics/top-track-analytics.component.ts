import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackObjectFeatures } from 'src/app/models/trackObjectFeatures';
import { TempoCategorizationService } from 'src/app/tempo-categorization.service';

interface TempoCategoryData {
  key: string
  value: number
}

@Component({
  selector: 'app-top-track-analytics',
  templateUrl: './top-track-analytics.component.html',
  styleUrls: ['./top-track-analytics.component.scss']
})
export class TopTrackAnalyticsComponent implements OnInit {
  @Input() topTracksFeatures$: Observable<TrackObjectFeatures[]>;

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Category';
  showYAxisLabel = true;
  yAxisLabel = 'Number of Top Tracks in Category';
  data: TempoCategoryData[] = [];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private _tempoCategorizationService: TempoCategorizationService) { }

  ngOnInit(): void {
    this.topTracksFeatures$.subscribe(this.constructData);
  }

  private constructData(topTracksFeatures: TrackObjectFeatures[]): void {
     // TODO: move categorization to some shared service so tracks come in categorized
     topTracksFeatures.forEach(track => {
      const tempo = track.features.tempo;
      const category = this._tempoCategorizationService.categorize(tempo);

      // TODO: optimize to use hash table
      const index = this.data.findIndex((item) => item.key === category.name)
      if (index === -1) {
        this.data.push({key: category.name, value: 0});
      }

      this.data[index].value += 1;
    });
  }
}
