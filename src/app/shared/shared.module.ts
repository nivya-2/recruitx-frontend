import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePickerComponent } from './date-picker/date-picker.component';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DropdownfilterComponent } from './dropdownfilter/dropdownfilter.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonsComponent,
    DatePickerComponent,
    MatButtonModule,
    MatIconModule,
    DropdownfilterComponent
  ],
  exports: [
    ButtonsComponent,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    DropdownfilterComponent
  ]
})
export class SharedModule { }