import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DropdownfilterComponent } from './dropdownfilter/dropdownfilter.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    DropdownfilterComponent
  ],
  exports: [
    DropdownfilterComponent
  ]
})
export class SharedModule { }