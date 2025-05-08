import { Component } from '@angular/core';
import { HeaderComponent } from '../../../widgets/header/header.component';
import { IconGroupComponent } from '../../../icon-group/icon-group.component';
import { TableComponent } from "../../../table/table.component";
import { HeaderTextComponent } from '../../../widgets/header-text/header-text.component';

@Component({
  selector: 'app-dashboard-home',
  imports: [HeaderComponent, IconGroupComponent, TableComponent, HeaderTextComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {

  scheduledInterviews = [
    { candidateId: 'CAN-009', name: 'Arjun Menon', interviewDate: '15/05/2025' },
    { candidateId: 'CAN-013', name: 'Alia V', interviewDate: '15/05/2025' },
    { candidateId: 'CAN-012', name: 'Kavya Nair', interviewDate: '15/05/2025' }
  ];
  
  
  completedInterviews = [
    { candidateId: 'CAN-014', name: 'Tanvi Rao', interviewDate: '12/04/2025' },
    { candidateId: 'CAN-011', name: 'Rajat Verma', interviewDate: '11/04/2025' },
    { candidateId: 'CAN-015', name: 'Aditya Pillai', interviewDate: '15/04/2025' }
  ];
  
  awaitingShortlisting = [
    { candidateId: 'CAN-006', name: 'Aswin A', interviewDate: '17/04/2025', interviewType: 'Technical L1',actions:'Shortlist'},
    { candidateId: 'CAN-002', name: 'Priya Sharma', interviewDate: '10/04/2025', interviewType: 'Technical L1',actions:'Shortlist' },
    { candidateId: 'CAN-004', name: 'Aarav Mehta', interviewDate: '09/04/2025', interviewType: 'Technical L1' ,actions:'Shortlist'},
    { candidateId: 'CAN-010', name: 'Rohan Kapoor', interviewDate: '17/04/2025', interviewType: 'Technical L2',actions:'Shortlist' },
    { candidateId: 'CAN-005', name: 'Ananya Iyer', interviewDate: '08/04/2025', interviewType: 'Technical L2' ,actions:'Shortlist'},
    { candidateId: 'CAN-003', name: 'Karan Malhotra', interviewDate: '07/04/2025', interviewType: 'Technical L2' ,actions:'Shortlist'},
    { candidateId: 'CAN-001', name: 'Vivek Reddy', interviewDate: '06/04/2025', interviewType: 'Management',actions:'Shortlist' },
    { candidateId: 'CAN-007', name: 'Nisha Patel', interviewDate: '13/04/2025', interviewType: 'Management',actions:'Shortlist' },
    { candidateId: 'CAN-008', name: 'Arjun Bansal', interviewDate: '04/04/2025', interviewType: 'Management',actions:'Shortlist' }
  ];
  
  
  scheduledColumns = [
    { key: 'candidateId', label: 'Candidate ID' },
    { key: 'name', label: 'Name' },
    { key: 'interviewDate', label: 'Interview Date' }
  ];
  
  awaitingColumns = [
    { key: 'candidateId', label: 'Candidate ID' },
    { key: 'name', label: 'Name' },
    { key: 'interviewDate', label: 'Interview Date' },
    { key: 'interviewType', label: 'Interview Type' },
    { key: 'actions', label: 'Shortlist' }
  ];
  
  completedColumns = [...this.scheduledColumns];
  
  
  

}
