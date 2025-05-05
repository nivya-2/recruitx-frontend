import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JrrowComponent } from './jrrow.component';

describe('JrrowComponent', () => {
  let component: JrrowComponent;
  let fixture: ComponentFixture<JrrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JrrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JrrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
