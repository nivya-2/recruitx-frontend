import { Component } from '@angular/core';
import { IconComponent } from './icons/icons.component';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from "./shared/shared.module";
import { ButtonsComponent } from "./shared/buttons/buttons.component";
import { DatePickerComponent } from "./shared/date-picker/date-picker.component";
import { ClassDirective } from './class.directive';
import { HeaderTextComponent } from './widgets/header-text/header-text.component';
import { ProfileComponent } from './widgets/profile/profile.component';
import { ProfileBoxComponent } from './widgets/profile-box/profile-box.component';
import { HeaderComponent } from './widgets/header/header.component';
import { DropdownfilterComponent } from "./shared/dropdownfilter/dropdownfilter.component";
import { TablefilterComponent } from './shared/tablefilter/tablefilter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderTextComponent,ProfileComponent,ProfileBoxComponent,HeaderComponent,IconComponent, DropdownfilterComponent, ButtonsComponent, SharedModule, DatePickerComponent, ClassDirective, IconComponent,TablefilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recruitxfrontend';
}