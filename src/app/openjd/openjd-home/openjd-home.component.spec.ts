import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenjdHomeComponent } from './openjd-home.component';

describe('OpenjdHomeComponent', () => {
  let component: OpenjdHomeComponent;
  let fixture: ComponentFixture<OpenjdHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenjdHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenjdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
