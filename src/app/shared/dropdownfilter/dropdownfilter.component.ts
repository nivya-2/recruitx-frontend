import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormField } from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import { NgFor } from '@angular/common';
import { IconComponent } from '../../icons/icons.component';
@Component({
  selector: 'app-dropdownfilter',
  imports: [MatFormField, MatSelectModule, MatFormFieldModule, MatIconModule ,NgFor,IconComponent],
  templateUrl: './dropdownfilter.component.html',
  styleUrl: './dropdownfilter.component.css'
})
export class DropdownfilterComponent {
  @Input() placeholder: string = 'Select an option';
  @Input() options: string[] = [];
  
}
