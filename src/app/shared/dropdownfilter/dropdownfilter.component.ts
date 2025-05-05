import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-dropdownfilter',
  imports: [MatFormField,MatSelectModule,MatFormFieldModule],
  templateUrl: './dropdownfilter.component.html',
  styleUrl: './dropdownfilter.component.css'
})
export class DropdownfilterComponent {

}
