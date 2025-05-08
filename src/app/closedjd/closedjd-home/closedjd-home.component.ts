import { Component } from '@angular/core';
import { WidgetsModule } from "../../widgets/widgets.module";
import { TableComponent } from "../../table/table.component";
import { TablefilterComponent } from '../../shared/tablefilter/tablefilter.component';

@Component({
  selector: 'app-closedjd-home',
  imports: [WidgetsModule, TableComponent,TablefilterComponent],
  templateUrl: './closedjd-home.component.html',
  styleUrl: './closedjd-home.component.css'
})
export class ClosedjdHomeComponent {
  closeJobDescriptions = [
    {
      id: 'JD001',
      roleTitle: 'Software Engineer',
      deliveryUnit: 'DU1',
      location: 'Bangalore',
      experience: '3-5 years',
      createdDate: '04/04/2025',
      associatedJR: 'JR2025-112'
    },
    {
      id: 'JD002',
      roleTitle: 'UX Designer',
      deliveryUnit: 'DU3',
      location: 'Trivandrum',
      experience: '4-6 years',
      createdDate: '12/02/2025',
      associatedJR: 'JR2025-113'
    },
    {
      id: 'JD003',
      roleTitle: 'Data Analyst',
      deliveryUnit: 'DU2',
      location: 'Chennai',
      experience: '2-6 years',
      createdDate: '20/03/2025',
      associatedJR: 'JR2025-114'
    },
    {
      id: 'JD004',
      roleTitle: 'Sales Manager',
      deliveryUnit: 'DU4',
      location: 'Kochi',
      experience: '4-5 years',
      createdDate: '17/01/2025',
      associatedJR: 'JR2025-115'
    },
    {
      id: 'JD005',
      roleTitle: 'Junior HR',
      deliveryUnit: 'DU6',
      location: 'Trivandrum',
      experience: '2-3 years',
      createdDate: '10/04/2025',
      associatedJR: 'JR2025-116'
    },
    {
      id: 'JD005',
      roleTitle: 'Junior HR',
      deliveryUnit: 'DU6',
      location: 'Trivandrum',
      experience: '2-3 years',
      createdDate: '10/04/2025',
      associatedJR: 'JR2025-116'
    },
    {
      id: 'JD005',
      roleTitle: 'Junior HR',
      deliveryUnit: 'DU6',
      location: 'Trivandrum',
      experience: '2-3 years',
      createdDate: '10/04/2025',
      associatedJR: 'JR2025-116'
    },
    {
      id: 'JD005',
      roleTitle: 'Junior HR',
      deliveryUnit: 'DU6',
      location: 'Trivandrum',
      experience: '2-3 years',
      createdDate: '10/04/2025',
      associatedJR: 'JR2025-116'
    },
    {
      id: 'JD005',
      roleTitle: 'Junior HR',
      deliveryUnit: 'DU6',
      location: 'Trivandrum',
      experience: '2-3 years',
      createdDate: '10/04/2025',
      associatedJR: 'JR2025-116'
    }
  ];
  closeJDColumns = [
    { key: 'id', label: 'ID' },
    { key: 'roleTitle', label: 'Role Title' },
    { key: 'deliveryUnit', label: 'Delivery Unit' },
    { key: 'location', label: 'Location' },
    { key: 'experience', label: 'Experience' },
    { key: 'createdDate', label: 'Created Date' },
    { key: 'associatedJR', label: 'Associated JR' }
  ];
  
}
