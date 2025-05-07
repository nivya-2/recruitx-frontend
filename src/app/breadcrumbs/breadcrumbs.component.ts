import { Component } from '@angular/core';
import { IconComponent } from '../icons/icons.component';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  imports: [IconComponent,MatIcon,CommonModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css'
})
export class BreadcrumbsComponent {
  breadcrumbTrail = [
    { icon: 'home', label: null },
    { icon: 'chevron_right', label: 'Job Descriptions' }
  ];

}
