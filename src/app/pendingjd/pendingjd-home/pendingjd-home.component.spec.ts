import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingjdHomeComponent } from './pendingjd-home.component';

describe('PendingjdHomeComponent', () => {
  let component: PendingjdHomeComponent;
  let fixture: ComponentFixture<PendingjdHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingjdHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingjdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
