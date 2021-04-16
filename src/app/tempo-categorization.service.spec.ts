import { TestBed } from '@angular/core/testing';

import { TempoCategorizationService } from './tempo-categorization.service';

describe('TempoCategorizationService', () => {
  let service: TempoCategorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempoCategorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
