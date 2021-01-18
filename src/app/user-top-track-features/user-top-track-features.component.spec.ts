import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopTrackFeaturesComponent } from './user-top-track-features.component';

describe('UserTopTrackFeaturesComponent', () => {
  let component: UserTopTrackFeaturesComponent;
  let fixture: ComponentFixture<UserTopTrackFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTopTrackFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopTrackFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
