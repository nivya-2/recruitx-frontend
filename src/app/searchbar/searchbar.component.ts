import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../icons/icons.component';

@Component({
  selector: 'app-searchbar',
  imports: [MatFormFieldModule,
    MatInputModule,
    MatIconModule, FormsModule, IconComponent],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {

  searchQuery: string = '';

  onSearch() {
    console.log('Searching for:', this.searchQuery);
    // You can trigger a filter or API call here
  }

}
