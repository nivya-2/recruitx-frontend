import { Component, ViewChild } from '@angular/core';
import { CommonLayoutComponent } from '../../layouts/common-layout/common-layout.component';
import { TableComponent } from '../../shared-components/table/table.component';
import { CardsComponent } from '../../ui/cards/cards.component';
import { HeaderTextComponent } from '../../ui/header-text/header-text.component';
import { ButtonIconComponent } from '../../ui/button-icon/button-icon.component';
import { ButtonComponent } from "../../ui/button/button.component";
import { AssignComponent } from "../../ui/assign/assign.component";
import { AlertsComponent } from '../../ui/alerts/alerts.component';
import { ModalComponent } from "../../ui/modal/modal.component";
import { UploadComponent } from "../../shared-components/upload/upload.component";
import { IconComponent } from '../../ui/icon/icon.component';
import { UserApiService, UserDetails } from '../../services/user-api-service.service';

@Component({
  selector: 'app-admin-users',
  imports: [IconComponent, TableComponent, CommonLayoutComponent, AlertsComponent,
    CardsComponent, HeaderTextComponent, ButtonIconComponent, ButtonComponent, AssignComponent, ModalComponent, UploadComponent],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.scss'
})
export class AdminUsersComponent {
dataSource: UserDetails[] = [];

  recruiterHeadName: string | null = null;
  recruiterHeadEmail: string | null = null;

    constructor(private userApi: UserApiService) {}
mapUserDetailsToDataSource(users: UserDetails[]): any[] {
  return users.map(u => ({
    id: u.employeeId,   
    userId:u.userId,     // map employeeId → id
    name: u.name,
    jobTitle: u.jobTitle,
    role: u.roleTitle,       // roleTitle → role
    location: u.location,
    deliveryUnit: u.deliveryUnit,
    email: u.email,
    status1: u.status,       // status → status1 (table uses status1)
    actions: ['Edit']        // fixed array for action buttons
  }));
}

async ngOnInit() {

    const allUsers = await this.userApi.getAllUsers().toPromise();

    if (allUsers) {
      const recruiterHead = allUsers.find(user => user.roleTitle === 'Recruiter Head');
      if (recruiterHead) {  
        this.recruiterHeadName = recruiterHead.name;
        this.recruiterHeadEmail = recruiterHead.email;
      }
        const filteredUsers = allUsers.filter(u => u.roleTitle !== 'Recruiter Head');
        this.dataSource = this.mapUserDetailsToDataSource(filteredUsers);
    } else {
      this.dataSource = [];
    }
  }
    visible:boolean = false;
  openModal() {
    this.visible = !this.visible;
  }
  

    recruitersIcons=[
      {iconName:'dashboard',size:"32px",iconColour:"red"},
      {iconName:'home',size:"32px",iconColour:"blue"},
      {iconName:'delete',size:"32px",iconColour:"green"}
    ]

    columns: Array<{key: string, label: string, filterable: boolean,type?:string}> = [
      { key: 'id', label: 'Employee ID',filterable: false },
      { key: 'name', label: 'Name',filterable: true},
      { key: 'jobTitle', label: 'Job Title',filterable: true },
      { key: 'role', label: 'Role Title',filterable: true },
      { key: 'location', label: 'Location',filterable: false },
      { key: 'deliveryUnit', label: 'Delivery Unit',filterable: false },
      { key: 'email', label: 'Email',filterable: false },
      { key: 'status1', label: 'Status',filterable: true },
      { key: 'actions', label: 'Actions',filterable: false },
    ];

    globalFilterFields = this.columns.map(c => c.key).filter(key => key !== 'actions'); 

    teamList = [
      { fullName: 'Shankar Menon', role: 'Recruiter Head' },
      { fullName: 'John V', role: 'Senior Lead' },
      { fullName: 'Tom Philip', role: 'Associate Manager' },
      { fullName: 'Lakshmi S', role: 'Lead' },
      { fullName: 'Abhiram Prasad', role: 'Associate' },
      { fullName: 'Vinayak Sasi', role: 'Recruiter Head' },
      { fullName: 'Amal K', role: 'Senior Lead' },
      { fullName: 'Tom Philip', role: 'Associate Manager' },
      { fullName: 'Sona Nair S', role: 'Lead' },
      { fullName: 'Sresh Krishna ', role: 'Associate' },
      { fullName: 'Shaju Vidhya', role: 'Recruiter Head' },
      { fullName: 'Dennis Vakkachan', role: 'Senior Lead' },
      { fullName: 'Varghese Kuryan', role: 'Associate Manager' },
      { fullName: 'Ali Akbar S', role: 'Lead' },
      { fullName: ' Philip Cheriyan', role: 'Associate' }
    ];
    selectedMemberFromChild: any = null;

    userStatus(member: any) {
      const isCurrentlyActive = member.status1 === 'Active';
      const newStatus = isCurrentlyActive ? 'Inactive' : 'Active';
    
      const message = `Are you sure you want to set ${member.name} as ${newStatus}?`;
    
      this.alertsComponent.showConfirmDialog({
  message: message,
  header: 'Change User Status',
  icon: 'pi pi-user-edit',
  acceptLabel: `Set ${newStatus}`,
  rejectLabel: 'Cancel',
  acceptSeverity: 'success',
  rejectSeverity: 'warn',
  acceptSummary: 'Status Changed',
  rejectSummary: 'Cancelled',
  acceptDetail: `${member.name} is now ${newStatus}.`,
  rejectDetail: 'No changes were made.',
  onAccept: () => {
    const userId = member.userId; // or the correct id field
    if (newStatus.toLowerCase() === 'active') {
      this.userApi.setUserActive(userId).subscribe({
        next: () => {
          member.status1 = newStatus;
          console.log(`${member.name} status changed to ${newStatus}`);
        },
 
      });
    } else if (newStatus.toLowerCase() === 'inactive') {
      this.userApi.setUserInactive(userId).subscribe({
        next: () => {
          member.status1 = newStatus;
          console.log(`${member.name} status changed to ${newStatus}`);
        },
      });
    }
  },
  onReject: () => {
    console.log('Status change cancelled.');
  }
});

    }
    
    actionMethods = {
      'Edit': (member: any) => this.userStatus(member)
    };
    
    handleSelectedMember(member: any) {
      const message = `Are you sure want to add ${member.fullName} as a Recruiter Head?`;
      this.alertsComponent.showConfirmDialog({
        message: message,
        header: 'Add Recruiter Head',
        icon: 'pi pi-user-plus',
        acceptLabel: 'Add',
        rejectLabel: 'Cancel',
        acceptSeverity: 'success',
        rejectSeverity: 'warn',
        acceptSummary: 'Added',
        rejectSummary: 'Cancelled',
        acceptDetail: `Added ${member.fullName} as the Recruiter Head!`,
        rejectDetail: 'No changes were made.',
        onAccept: () => {
          console.log(`${member.fullName} added as team lead.`);
        },
        onReject: () => {
          console.log('Addition cancelled.');
        }
      });
    }
    
    
    
    @ViewChild('assignBox') assignBox!: AssignComponent;

    openAssignPopover(event: MouseEvent) {
      if (event) {
        this.assignBox.open(event);
      } else {
        console.warn('No event passed to open popover');
      }
    }
    @ViewChild('alerts') alertsComponent!: AlertsComponent;


    onChangeClick(event: MouseEvent) {
      this.showAssignList = true;
    }
    showAssignList = false;

    toggleAssignList() {
      this.showAssignList = !this.showAssignList;
    }
    
    
}