import { Component } from '@angular/core';
import { ProfileBoxComponent } from '../profile-box/profile-box.component';
import { HeaderTextComponent } from '../header-text/header-text.component';
@Component({
  selector: 'app-header',
  imports: [ProfileBoxComponent,HeaderTextComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
