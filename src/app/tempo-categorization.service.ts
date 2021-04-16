import { Injectable } from '@angular/core';
import { TempoCategory, TempoCategories } from './models/tempo-category';

@Injectable({
  providedIn: 'root'
})
export class TempoCategorizationService {
  constructor() {}

  categorize(tempo: number): TempoCategory {
    for (var i = 0; i < TempoCategories.length; i++) {
      let category = TempoCategories[i];
      if (category.minBpm <= tempo && tempo < category.maxBpm) return category;
    }
    return TempoCategories[0];
  }
}
