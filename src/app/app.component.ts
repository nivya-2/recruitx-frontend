import { Component } from '@angular/core';
import { IconComponent } from './icons/icons.component';
import { IconGroupComponent } from "./icon-group/icon-group.component";
import { RouterModule, RouterOutlet } from '@angular/router';
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
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MatTabsModule } from '@angular/material/tabs'

import { TableComponent } from './table/table.component';
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";


import {  ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderTextComponent, ProfileComponent, IconGroupComponent, ProfileBoxComponent, HeaderComponent, IconComponent, DropdownfilterComponent, ButtonsComponent, SharedModule, DatePickerComponent, ClassDirective, TablefilterComponent, SearchbarComponent, TableComponent, MatTabsModule, RouterModule, BreadcrumbsComponent],
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent {

  title = 'recruitxfrontend';

  // content: any[] = [ 
  //   { id: 'JR2025-112', 
  //     roleTitle: 'Software Engineer',
  //     deliveryUnit: 'DU1',
  //     location: 'Bangalore', 
  //     openPositions: 5, 
  //     createdDate: '05-05-2025', 
  //     hiringManager: 'John Doe',
  //     actions:'generate',
  //     },
  //     {  id: 'JR2025-113', 
  //       roleTitle: 'UX Designer',
  //       deliveryUnit: 'DU2',
  //       location: 'Bangalore', 
  //       openPositions: 7, 
  //       createdDate: '05-05-2025', 
  //       hiringManager: 'John James',
  //       actions:'generate',

  //     },
  //     {  id: 'JR2025-114', 
  //         roleTitle: 'Sales Manager',
  //         deliveryUnit: 'DU4',
  //         location: 'Trivandrum', 
  //         openPositions: 9, 
  //         createdDate: '09-05-2025', 
  //         hiringManager: 'Alan Smith',
  //         actions:'generate',

  //     },
  //     {  id: 'JR2025-115', 
  //           roleTitle: 'Junior HR',
  //           deliveryUnit: 'DU7',
  //           location: 'Bangalore', 
  //           openPositions: 9, 
  //           createdDate: '09-05-2025', 
  //           hiringManager: 'James Roy',
  //           actions:'draft',

  //     },
  //     { id: 'JR2025-116', 
  //             roleTitle: 'AI Engineer',
  //             deliveryUnit: 'DU2',
  //             location: 'Bangalore', 
  //             openPositions: 7, 
  //             createdDate: '05-07-2025', 
  //             hiringManager: 'James Jacob',
  //             actions:'generate',

  //           },
  //           {  id: 'JR2025-117', 
  //               roleTitle: 'UX Designer',
  //               deliveryUnit: 'DU2',
  //               location: 'Bangalore', 
  //               openPositions: 7, 
  //               createdDate: '05-08-2025', 
  //               hiringManager: 'John James',
  //               actions:'draft',

  //           },
  //           {  id: 'JR2025-119', 
  //             roleTitle: 'UI Designer',
  //             deliveryUnit: 'DU2',
  //             location: 'Bangalore', 
  //             openPositions: 7, 
  //             createdDate: '15-05-2025', 
  //             hiringManager: 'John James',
  //             actions:'draft',

  //             },
  //       {  id: 'JR2025-119', 
  //         roleTitle: 'Data Analyst',
  //         deliveryUnit: 'DU6',
  //         location: 'Kochi', 
  //         openPositions: 11, 
  //         createdDate: '25-06-2025', 
  //         hiringManager: 'John James',
  //         actions:'generate',

  //         }

  //   ];

  //   columns: Array<{key: string, label: string}> = [
  //     { key: 'id', label: 'ID' },
  //     { key: 'roleTitle', label: 'Role Title' },
  //     { key: 'deliveryUnit', label: 'Delivery Unit' },
  //     { key: 'location', label: 'Location' },
  //     { key: 'openPositions', label: 'No. Of Open Positions' },
  //     { key: 'createdDate', label: 'Created Date' },
  //     { key: 'hiringManager', label: 'Hiring Manager' },
  //     { key: 'actions', label: 'Actions' }
  //   ];
}