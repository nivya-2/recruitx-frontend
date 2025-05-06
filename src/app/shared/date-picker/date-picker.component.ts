import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { DateAdapter,MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';


// Define custom date formats
export const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'dd/MM/yyyy',
    monthYearA11yLabel: 'MMMM yyyy'
  }
};

@Component({
  selector: 'app-date-picker',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css',
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'en-IN' } 
  ]
})
export class DatePickerComponent {
  dateControl = new FormControl();
  @Input() placeholder: string = "Select date";
}
