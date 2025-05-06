import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePickerComponent } from './date-picker/date-picker.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonsComponent,
    DatePickerComponent,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ButtonsComponent]
})
export class SharedModule { }
