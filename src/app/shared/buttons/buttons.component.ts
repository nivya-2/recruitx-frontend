import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ClassDirective } from '../../class.directive';

@Component({
  selector: 'app-buttons',
  imports: [MatIconModule, MatButtonModule, ClassDirective],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

}
