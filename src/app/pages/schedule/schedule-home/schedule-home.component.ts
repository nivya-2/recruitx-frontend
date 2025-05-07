import { Component } from '@angular/core';
import { HeaderComponent } from "../../../widgets/header/header.component";
import { IconGroupComponent } from "../../../icon-group/icon-group.component";
import { TablefilterComponent } from "../../../shared/tablefilter/tablefilter.component";
import { TableComponent } from "../../../table/table.component";
import { BreadcrumbsComponent } from "../../../breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-schedule-home',
  imports: [HeaderComponent, IconGroupComponent, TablefilterComponent, TableComponent, BreadcrumbsComponent],
  templateUrl: './schedule-home.component.html',
  styleUrl: './schedule-home.component.css'
})
export class ScheduleHomeComponent {

  scheduleColumns = [
    { key: 'jdId', label: 'JD ID' },
    { key: 'roleTitle', label: 'Role Title' },
    { key: 'deliveryUnit', label: 'Delivery Unit' },
    { key: 'location', label: 'Location' },
    { key: 'experience', label: 'Experience' },
    { key: 'createdDate', label: 'Created Date' },
    { key: 'associatedJR', label: 'Associated JR' },
    { key: 'actions', label: 'Action' }
  ];
  
  scheduledInterviews = [
    {
      jdId: 'JD101',
      roleTitle: 'Backend Developer',
      deliveryUnit: 'DU3',
      location: 'Chennai',
      experience: '2 years',
      createdDate: '01/04/2025',
      associatedJR: 'JR2025-122',
      actions: 'Schedule'
    },
    {
      jdId: 'JD102',
      roleTitle: 'Frontend Developer',
      deliveryUnit: 'DU4',
      location: 'Bangalore',
      experience: '3 years',
      createdDate: '02/04/2025',
      associatedJR: 'JR2025-123',
      actions: 'Schedule'
    },
    {
      jdId: 'JD103',
      roleTitle: 'Data Scientist',
      deliveryUnit: 'DU5',
      location: 'Hyderabad',
      experience: '4 years',
      createdDate: '03/04/2025',
      associatedJR: 'JR2025-124',
      actions: 'Schedule'
    },
    {
      jdId: 'JD104',
      roleTitle: 'DevOps Engineer',
      deliveryUnit: 'DU1',
      location: 'Pune',
      experience: '3 years',
      createdDate: '04/04/2025',
      associatedJR: 'JR2025-125',
      actions: 'Schedule'
    },
    {
      jdId: 'JD105',
      roleTitle: 'QA Analyst',
      deliveryUnit: 'DU2',
      location: 'Bangalore',
      experience: '2 years',
      createdDate: '05/04/2025',
      associatedJR: 'JR2025-126',
      actions: 'Schedule'
    },
    {
      jdId: 'JD106',
      roleTitle: 'AI Engineer',
      deliveryUnit: 'DU7',
      location: 'Trivandrum',
      experience: '5 years',
      createdDate: '06/04/2025',
      associatedJR: 'JR2025-127',
      actions: 'Schedule'
    },
    {
      jdId: 'JD107',
      roleTitle: 'HR Executive',
      deliveryUnit: 'DU6',
      location: 'Chennai',
      experience: '2 years',
      createdDate: '07/04/2025',
      associatedJR: 'JR2025-128',
      actions: 'Schedule'
    },
    {
      jdId: 'JD108',
      roleTitle: 'Business Analyst',
      deliveryUnit: 'DU3',
      location: 'Kochi',
      experience: '3 years',
      createdDate: '08/04/2025',
      associatedJR: 'JR2025-129',
      actions: 'Schedule'
    }
  ];
  
  
}
