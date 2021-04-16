import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrackAnalyticsComponent } from './top-track-analytics.component';

describe('TopTrackAnalyticsComponent', () => {
  let component: TopTrackAnalyticsComponent;
  let fixture: ComponentFixture<TopTrackAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTrackAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTrackAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
