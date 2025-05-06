import { Component } from '@angular/core';
import { IconComponent } from './icons/icons.component';

@Component({
  selector: 'app-root',
  imports: [IconComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recruitxfrontend';
}