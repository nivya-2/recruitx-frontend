import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackHomeComponent } from './track-home.component';

describe('TrackHomeComponent', () => {
  let component: TrackHomeComponent;
  let fixture: ComponentFixture<TrackHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
