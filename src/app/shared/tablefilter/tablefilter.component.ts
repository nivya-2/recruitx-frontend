import { Component } from '@angular/core';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { DropdownfilterComponent } from '../dropdownfilter/dropdownfilter.component';
import { IconComponent } from '../../icons/icons.component';

@Component({
  selector: 'app-tablefilter',
  imports: [DatePickerComponent,ButtonsComponent,DropdownfilterComponent, IconComponent],
  templateUrl: './tablefilter.component.html',
  styleUrl: './tablefilter.component.css'
})
export class TablefilterComponent {

}
