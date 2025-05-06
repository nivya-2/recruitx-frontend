import { Component } from '@angular/core';
import { IconComponent } from './icons/icons.component';
import { RouterOutlet } from '@angular/router';
import { HeaderTextComponent } from './widgets/header-text/header-text.component';
import { ProfileComponent } from './widgets/profile/profile.component';
import { ProfileBoxComponent } from './widgets/profile-box/profile-box.component';
import { HeaderComponent } from './widgets/header/header.component';

@Component({
  selector: 'app-root',
  imports: [IconComponent],
  imports: [RouterOutlet,HeaderTextComponent,ProfileComponent,ProfileBoxComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recruitxfrontend';
}