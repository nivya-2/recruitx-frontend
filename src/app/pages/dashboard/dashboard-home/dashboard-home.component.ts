import { Component } from '@angular/core';
import { HeaderComponent } from '../../../widgets/header/header.component';
import { IconGroupComponent } from '../../../icon-group/icon-group.component';

@Component({
  selector: 'app-dashboard-home',
  imports: [HeaderComponent,IconGroupComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {

}
