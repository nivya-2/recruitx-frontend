import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from "./shared/shared.module";
import { ButtonsComponent } from "./shared/buttons/buttons.component";
import { DatePickerComponent } from "./shared/date-picker/date-picker.component";
import { ClassDirective } from './class.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonsComponent, SharedModule, DatePickerComponent, ClassDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recruitxfrontend';
}
