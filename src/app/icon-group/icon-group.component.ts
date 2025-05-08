import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icons/icons.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';





@Component({
  selector: 'app-icon-group',
  standalone: true,
imports: [CommonModule, RouterModule, IconComponent,MatSidenavModule,MatButtonModule],
  templateUrl: './icon-group.component.html',
  styleUrl: './icon-group.component.css'
})
export class IconGroupComponent {
  isExpanded = false;
  activeIcon = 'dashboard';


// icons displayed in the recruiters login defined in the recruitersIcon array
recruiterIcons = [
  { name: 'dashboard', color: '#B8AAFF', size: '24px', fullName: 'Dashboard', route: '/dashboard' },
  { name: 'bar_chart', color: '#B8AAFF', size: '24px', fullName: 'Analytics', route: '/analytics' },
  { name: 'timeline', color: '#B8AAFF', size: '24px', fullName: 'Track JD', route: '/track' },
  { name: 'date_range', color: '#B8AAFF', size: '24px', fullName: 'Schedule', route: '/schedule' }
];

  
  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
  constructor(private router: Router) {}

setActiveAndToggle(iconName: string) {
  this.activeIcon = iconName;
  this.toggleSidebar();
}

  setActive(name: string) {
    this.activeIcon = name;
  }

  onTextClick(icon: any) {
    this.setActiveIcon(icon.name);
    this.router.navigate([icon.route]);
  }
  

  setActiveIcon(iconName: string) {
    this.activeIcon = iconName;
  }
  getIconColor(name: string): string {
    return this.activeIcon === name ? 'white' : '#B8AAFF';
  }
  
}