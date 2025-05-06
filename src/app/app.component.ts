import { Component } from '@angular/core';
import { IconComponent } from './icons/icons.component';
import { IconGroupComponent } from "./icon-group/icon-group.component";
import { RouterOutlet } from '@angular/router';
import { HeaderTextComponent } from './widgets/header-text/header-text.component';
import { ProfileComponent } from './widgets/profile/profile.component';
import { ProfileBoxComponent } from './widgets/profile-box/profile-box.component';
import { HeaderComponent } from './widgets/header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,IconGroupComponent,HeaderTextComponent,ProfileComponent,ProfileBoxComponent,HeaderComponent,IconComponent,SearchbarComponent],
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent {

  title = 'recruitxfrontend';
}