import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedjdHomeComponent } from './closedjd-home.component';

describe('ClosedjdHomeComponent', () => {
  let component: ClosedjdHomeComponent;
  let fixture: ComponentFixture<ClosedjdHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosedjdHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedjdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
