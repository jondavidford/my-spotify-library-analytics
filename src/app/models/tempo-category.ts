export interface TempoCategory {
  name: string;
  minBpm: number;
  maxBpm: number;
}

export const TempoCategories: TempoCategory[] = [
  {name: 'Uncategorized Slow', minBpm: 0, maxBpm: 56},
  {name: 'Ballads / Ultra Chill Grooves', minBpm: 56, maxBpm: 63},
  {name: 'Chillest Grooves', minBpm: 63, maxBpm: 72},
  {name: 'Up-Tempo Ballads', minBpm: 72, maxBpm: 77},
  {name: 'Chill Grooves', minBpm: 77, maxBpm: 81},
  {name: 'Up-Tempo Grooves', minBpm: 81, maxBpm: 84},
  {name: 'Impactful', minBpm: 85, maxBpm: 89},
  {name: '89-91', minBpm: 89, maxBpm: 91},
  {name: 'Down-Tempo Groovy Dance', minBpm: 91, maxBpm: 93},
  {name: 'Down-Tempo Dance', minBpm: 94, maxBpm: 97.5},
  {name: 'Dancy Rock', minBpm: 97.5, maxBpm: 100},
  {name: 'Chiller Bangers', minBpm: 100, maxBpm: 103},
  {name: 'Groovy Bangers', minBpm: 103, maxBpm: 105},
  {name: 'Bangers', minBpm: 105, maxBpm: 109},
  {name: '109-112', minBpm: 109, maxBpm: 113},
  {name: 'Chillest 4 to the Floor', minBpm: 113, maxBpm: 117},
  {name: 'Down-Tempo 4 to the Floor', minBpm: 117, maxBpm: 120},
  {name: '4 to the Floor', minBpm: 120, maxBpm: 120},
  {name: 'Up-Tempo 4 to the Floor', minBpm: 120, maxBpm: 124},
  {name: 'Groovy Funk/Pop', minBpm: 124, maxBpm: 127},
  {name: 'Up-Tempo Funk/Pop', minBpm: 127, maxBpm: 131},
  {name: 'High Energy Dance', minBpm: 131, maxBpm: 136},
  {name: 'Higher Energy Dance', minBpm: 136, maxBpm: 141},
  {name: '141-146', minBpm: 141, maxBpm: 147},
  {name: 'Straight Rock', minBpm: 147, maxBpm: 154},
  {name: 'Highest Energy Dance', minBpm: 154, maxBpm: 161},
  {name: 'Uncategorized Fast', minBpm: 161, maxBpm: 1000},
];