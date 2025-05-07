import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownfilterComponent } from './dropdownfilter.component';

describe('DropdownfilterComponent', () => {
  let component: DropdownfilterComponent;
  let fixture: ComponentFixture<DropdownfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownfilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
