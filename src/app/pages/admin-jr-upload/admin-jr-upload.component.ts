import { Component, ViewChild } from '@angular/core';
import { CommonLayoutComponent } from '../../layouts/common-layout/common-layout.component';
import { TableComponent } from '../../shared-components/table/table.component';
import { CardsComponent } from '../../ui/cards/cards.component';
import { HeaderTextComponent } from '../../ui/header-text/header-text.component';
import { ButtonIconComponent } from '../../ui/button-icon/button-icon.component';
import { EvaluationFormComponent } from "../evaluation-form/evaluation-form.component";
import { AlertsComponent } from '../../ui/alerts/alerts.component';
import { ModalComponent } from '../../ui/modal/modal.component';
import { UploadComponent } from '../../shared-components/upload/upload.component';
import { SchedulePageComponent } from '../schedule-page/schedule-page.component';
import { DocxParserService, JobRequisitionData } from '../../services/docxparser.service';
import { JrApiService } from '../../services/jr-api.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    TableComponent,
    CommonLayoutComponent,
    CardsComponent,
    SchedulePageComponent,
    HeaderTextComponent,
    ButtonIconComponent,
    ModalComponent,
    UploadComponent,
    AlertsComponent,
    EvaluationFormComponent
  ],
  templateUrl: './admin-jr-upload.component.html',
  styleUrl: './admin-jr-upload.component.scss',
})
export class AdminJrUploadComponent {
  @ViewChild('alerts') alerts!: AlertsComponent;
  
  visible: boolean = false;
  uploadedFiles: File[] = [];
  parsedJobRequisitions: JobRequisitionData[] = [];
  isProcessing: boolean = false;

  constructor(
    private docxParser: DocxParserService,
    private jrApiService: JrApiService
  ) {}

  private mapParsedToPayload(parsed: JobRequisitionData): any {
    // Extract expected salary min/max from range string if available
    let expectedSalaryMinimum: number | null = null;
    let expectedSalaryMaximum: number | null = null;

    if (parsed.expectedSalaryRange) {
      const match = parsed.expectedSalaryRange.match(/(\d+)\s*-\s*(\d+)/);
      if (match) {
        expectedSalaryMinimum = Number(match[1]);
        expectedSalaryMaximum = Number(match[2]);
      }
    }

    // Prepare skills array exactly as passed
    const skills: { skillName: string; skillType: string }[] = [];

    if (parsed.skillsPrimary?.length) {
      parsed.skillsPrimary.forEach((skill) =>
        skills.push({ skillName: skill, skillType: 'Primary' })
      );
    }
    if (parsed.skillsMandatory?.length) {
      parsed.skillsMandatory.forEach((skill) =>
        skills.push({ skillName: skill, skillType: 'Mandatory' })
      );
    }
    if (parsed.skillsGoodToHave?.length) {
      parsed.skillsGoodToHave.forEach((skill) =>
        skills.push({ skillName: skill, skillType: 'GoodToHave' })
      );
    }

    // Join job description and skillsAndCompetencies arrays into strings separated by newlines
    const jobDescriptionStr = parsed.jobDescription?.join('\n') ?? '';
    const skillsAndCompetenciesStr = parsed.skillsAndCompetencies?.join('\n') ?? '';

    return {
      role: parsed.role ?? '',
      requestedDate: parsed.requestedDate ?? '',
      requestedByName: parsed.requestedBy ?? '',
      departmentName: parsed.businessUnit ?? '',
      hiringManagerName: parsed.hiringManager ?? '',
      skills,
      qualification: parsed.qualification ?? '',
      totalExperienceYears: parsed.totalExperience ?? 0,
      relevantExperienceYears: parsed.relevantExperience ?? 0,
      locationName: parsed.workLocation ?? '',
      locationCountry: parsed.workLocation ?? '',
      expectedOnboardingDate: parsed.expectedOnboardingDate ?? '',
      numPositions: parsed.numberOfPositions ?? 1,
      workShift: parsed.workShifts ?? '',
      hasOnsiteOpportunity: parsed.onsiteOpportunity ?? false,
      isBillable: parsed.billable ?? false,
      hasClientInterview: parsed.clientInterview ?? false,
      projectName: parsed.projectName ?? '',
      projectRole: parsed.projectRole ?? '',
      clientName: parsed.clientName ?? '',
      clientCountry: parsed.clientCountry ?? '',
      expectedSalaryMinimum,
      expectedSalaryMaximum,
      jobPurpose: parsed.jobPurpose ?? '',
      jobDuties: jobDescriptionStr,
      jobSpecification: skillsAndCompetenciesStr,
      idealStartDate: parsed.idealStartDate ?? '',
      onSiteDetails: {
        contractType: parsed.contractType ?? '',
        rate: parsed.rate ?? '',
        workLocation: parsed.onsiteWorkLocation ?? '',
        preferredVisaStatus: parsed.preferredVisaStatus ?? '',
        contractDuration: parsed.contractDuration ?? '',
        preferredTimeZone: parsed.preferredTimeZone ?? '',
        clientBackground: parsed.clientBackground ?? '',
        clientLocation: parsed.clientLocation ?? '',
        reportingTo: parsed.reportingTo ?? '',
        interviewProcess: parsed.interviewProcess ?? '',
        idealStartDate: parsed.idealStartDate ?? '',
        isH1TransferAccepted: parsed.h1TransferAccepted ?? false,
        isTravelRequired: parsed.travelRequirements ?? false,
      },
      createdByEmployeeName: parsed.hiringManager ?? '',
      status: 'Open',
    };
  }

  private postJobRequisition(): void {
    const payload = {
      role: "Senior Software Engineer",
      requestedDate: "2025-06-03",
      requestedByName: "Sarah Johnson",
      departmentName: "Engineering",
      hiringManagerName: "Michael Chen",
      skills: [
        { skillName: "Angular", skillType: "Primary" },
        { skillName: "TypeScript", skillType: "Mandatory" },
        { skillName: "Jasmine", skillType: "GoodToHave" }
      ],
      qualification: "B.Tech in Computer Science",
      totalExperienceYears: 5,
      relevantExperienceYears: 4,
      locationName: "Bangalore",
      locationCountry: "India",
      expectedOnboardingDate: "2025-07-01",
      numPositions: 3,
      workShift: "US",
      hasOnsiteOpportunity: true,
      isBillable: true,
      hasClientInterview: true,
      projectName: "RecruitX Platform Revamp",
      projectRole: "Frontend Developer",
      clientName: "TechNova Inc.",
      clientCountry: "USA",
      expectedSalaryMinimum: 12,
      expectedSalaryMaximum: 18,
      jobPurpose: "To enhance and modernize the frontend of the RecruitX platform using Angular.",
      jobDuties: "Develop UI components, collaborate with backend teams, and ensure responsive design and performance optimization.",
      jobSpecification: "Must have experience with Angular, RxJS, NgRx, and REST APIs. Exposure to CI/CD pipelines is a plus.",
      workModel: "Hybrid",
      idealStartDate: "2025-06-25",
      onSiteDetails: {
        contractType: "Contract",
        rate: "75 USD/hour",
        workLocation: "San Jose, CA",
        preferredVisaStatus: "US Citizen",
        contractDuration: "12 Months",
        preferredTimeZone: "PST",
        clientBackground: "TechNova Inc. is a leading provider of recruitment software solutions.",
        clientLocation: "San Jose, CA",
        reportingTo: "Director of Engineering",
        interviewProcess: "1 Technical + 1 Managerial + 1 Client Round",
        idealStartDate: "2025-06-25T09:00:00.000Z",
        isH1TransferAccepted: true,
        isTravelRequired: false
      },
      createdByEmployeeName: "Emily Davis",
      status: "Open"
    };

    this.jrApiService.createJobRequisition(payload).subscribe({
      next: (res) => console.log('✅ Job requisition posted:', res),
      error: (err) => console.error('❌ Failed to post requisition:', err)
    });
  }

  openModal() {
    this.visible = !this.visible;
  }

  closeModal() {
    this.visible = false;
  } 

  onFilesUploaded(files: File[]) {
    this.uploadedFiles = files;
    console.log('Files uploaded:', files);
    if (files.length > 0) {
      // this.alerts?.showSuccess(`${files.length} file(s) uploaded successfully`);
    }
  }

  async onUploadComplete(files: File[]) {
    this.uploadedFiles = files;
    this.isProcessing = true;
    
    console.log('=== STARTING FILE PROCESSING ===');
    console.log(`Processing ${files.length} file(s):`);
    
    try {
      // this.alerts?.showInfo('Processing uploaded files...');
      await this.processUploadedFiles(files);
      this.closeModal();
      
      if (files.length > 0) {
        // this.alerts?.showSuccess(`Successfully processed ${files.length} job requisition file(s)`);
      }
      
    } catch (error) {
      console.error('Error processing files:', error);
      // this.alerts?.showError('Error processing one or more files. Please check the console for details.');
    } finally {
      this.isProcessing = false;
    }
  }

  private async processUploadedFiles(files: File[]) {
    this.parsedJobRequisitions = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log(`\n=== PROCESSING FILE ${i + 1}/${files.length} ===`);
      console.log(`File Name: ${file.name}`);
      console.log(`File Size: ${(file.size / 1024).toFixed(2)} KB`);
      console.log(`File Type: ${file.type}`);
      
      try {
        if (file.name.toLowerCase().endsWith('.docx') || file.type.includes('wordprocessingml')) {
          console.log('✓ File type: Microsoft Word Document (.docx)');
          
          const parsedData = await this.docxParser.parseJobRequisitionFile(file);
          console.log('Parsed Data:', parsedData);
          this.parsedJobRequisitions.push(parsedData);
          
          this.logJobRequisitionDetails(parsedData, i + 1);
          
        } else {
          console.warn(`⚠️ Skipping file ${file.name} - Not a .docx file`);
          // this.alerts?.showWarning(`File ${file.name} was skipped - only .docx files are supported`);
        }
        
      } catch (error) {
        console.error(`❌ Error parsing file ${file.name}:`, error);
        // this.alerts?.showError(`Error parsing file: ${file.name}`);
      }
    }
    
    console.log('\n=== PROCESSING COMPLETE ===');
    console.log(`Total files processed: ${this.parsedJobRequisitions.length}`);
    await this.postJobRequisition();
  }

  private logJobRequisitionDetails(data: JobRequisitionData, fileNumber: number) {
    console.log(`\n📋 JOB REQUISITION DETAILS - FILE ${fileNumber}:`);
    console.log('=====================================');
    
    console.log('\n🏢 BASIC INFORMATION:');
    console.log(`Role: ${data.role || 'N/A'}`);
    console.log(`Requested Date: ${data.requestedDate || 'N/A'}`);
    console.log(`Requested By: ${data.requestedBy || 'N/A'}`);
    console.log(`Business Unit: ${data.businessUnit || 'N/A'}`);
    console.log(`Hiring Manager: ${data.hiringManager || 'N/A'}`);
    
    console.log('\n🎯 SKILLS:');
    console.log(`Mandatory Skills: ${data.skillsMandatory?.join(', ') || 'N/A'}`);
    console.log(`Primary Skills: ${data.skillsPrimary?.join(', ') || 'N/A'}`);
    console.log(`Good to Have Skills: ${data.skillsGoodToHave?.join(', ') || 'N/A'}`);
    
    console.log('\n🎓 EXPERIENCE & QUALIFICATIONS:');
    console.log(`Total Experience: ${data.totalExperience || 'N/A'}`);
    console.log(`Relevant Experience: ${data.relevantExperience || 'N/A'}`);
    console.log(`Qualification: ${data.qualification || 'N/A'}`);
    
    console.log('\n💼 WORK DETAILS:');
    console.log(`Work Location: ${data.workLocation || 'N/A'}`);
    console.log(`Expected Onboarding Date: ${data.expectedOnboardingDate || 'N/A'}`);
    console.log(`Number of Positions: ${data.numberOfPositions || 'N/A'}`);
    console.log(`Work Shifts: ${data.workShifts || 'N/A'}`);
    
    console.log('\n🌟 OPPORTUNITIES:');
    console.log(`Onsite Opportunity: ${data.onsiteOpportunity ? 'Yes' : 'No'}`);
    console.log(`Billable: ${data.billable ? 'Yes' : 'No'}`);
    console.log(`Client Interview: ${data.clientInterview ? 'Yes' : 'No'}`);
    
    console.log('\n🏗️ PROJECT DETAILS:');
    console.log(`Project Role: ${data.projectRole || 'N/A'}`);
    console.log(`Project Name: ${data.projectName || 'N/A'}`);
    console.log(`Client Name: ${data.clientName || 'N/A'}`);
    console.log(`Client Country: ${data.clientCountry || 'N/A'}`);
    console.log(`Expected Salary Range: ${data.expectedSalaryRange || 'N/A'}`);
    
    console.log('\n📝 JOB DESCRIPTION:');
    console.log(`Job Purpose: ${data.jobPurpose || 'N/A'}`);
    if (data.jobDescription && data.jobDescription.length > 0) {
      console.log('Job Description Points:');
      data.jobDescription.forEach((point, index) => {
        console.log(`  ${index + 1}. ${point}`);
      });
    } else {
      console.log('Job Description Points: N/A');
    }
    
    if (data.skillsAndCompetencies && data.skillsAndCompetencies.length > 0) {
      console.log('Skills and Competencies:');
      data.skillsAndCompetencies.forEach((skill, index) => {
        console.log(`  ${index + 1}. ${skill}`);
      });
    } else {
      console.log('Skills and Competencies: N/A');
    }
    
    console.log('\n🌍 ONSITE DETAILS:');
    console.log(`Contract Type: ${data.contractType || 'N/A'}`);
    console.log(`Rate: ${data.rate || 'N/A'}`);
    console.log(`Onsite Work Location: ${data.onsiteWorkLocation || 'N/A'}`);
    console.log(`Preferred Visa Status: ${data.preferredVisaStatus || 'N/A'}`);
    console.log(`Contract Duration: ${data.contractDuration || 'N/A'}`);
    console.log(`Preferred Time Zone: ${data.preferredTimeZone || 'N/A'}`);
    console.log(`Client Background: ${data.clientBackground || 'N/A'}`);
    console.log(`Client Location: ${data.clientLocation || 'N/A'}`);
    console.log(`Reporting To: ${data.reportingTo || 'N/A'}`);
    console.log(`Interview Process: ${data.interviewProcess || 'N/A'}`);
    console.log(`Ideal Start Date: ${data.idealStartDate || 'N/A'}`);
    console.log(`H1 Transfer Accepted: ${data.h1TransferAccepted ? 'Yes' : 'No'}`);
    console.log(`Travel Requirements: ${data.travelRequirements || 'N/A'}`);
    
    console.log('\n=====================================');
    console.log(`✅ File ${fileNumber} processing completed`);
  }

  private refreshTableData() {
    // Refresh your dataSource from the backend or add new entries
  }

 dataSource: any[] = [
    {
      jobReqId: 'REQ-2025-DS-006',
      jobTitle: 'Data Scientist - Computer Vision',
      deliveryUnit: 'DU6',
      location: 'Kochi',
      hiringManager: 'Arjun Menon',
      assignedOn: '02/04/2025',
      actions: ['Delete'],
    },
    {
      jobReqId: 'REQ-2025-DS-006',
      jobTitle: 'Data Scientist - Computer Vision',
      deliveryUnit: 'DU6',
      location: 'Kochi',
      hiringManager: 'Arjun Menon',
      assignedOn: '02/04/2025',
      actions: ['Delete'],
    },
    {
      jobReqId: 'REQ-2025-DS-006',
      jobTitle: 'Data Scientist - Computer Vision',
      deliveryUnit: 'DU6',
      location: 'Kochi',
      hiringManager: 'Arjun Menon',
      assignedOn: '02/04/2025',
      actions: ['Delete'],
    },
    {
      jobReqId: 'REQ-2025-DS-006',
      jobTitle: 'Data Scientist - Computer Vision',
      deliveryUnit: 'DU6',
      location: 'Kochi',
      hiringManager: 'Arjun Menon',
      assignedOn: '02/04/2025',
      actions: ['Delete'],
    },
    {
      jobReqId: 'REQ-2025-DS-006',
      jobTitle: 'Data Scientist - Computer Vision',
      deliveryUnit: 'DU6',
      location: 'Kochi',
      hiringManager: 'Arjun Menon',
      assignedOn: '02/04/2025',
      actions: ['Delete'],
    },
    {
      jobReqId: 'REQ-2025-DS-006',
      jobTitle: 'Data Scientist - Computer Vision',
      deliveryUnit: 'DU6',
      location: 'Kochi',
      hiringManager: 'Arjun Menon',
      assignedOn: '02/04/2025',
      actions: ['Delete'],
    },
    {
      jobReqId: 'REQ-2025-DS-006',
      jobTitle: 'Data Scientist - Computer Vision',
      deliveryUnit: 'DU6',
      location: 'Kochi',
      hiringManager: 'Arjun Menon',
      assignedOn: '02/04/2025',
      actions: ['Delete'],
    },
    {
      jobReqId: 'REQ-2025-DS-006',
      jobTitle: 'Data Scientist - Computer Vision',
      deliveryUnit: 'DU6',
      location: 'Kochi',
      hiringManager: 'Arjun Menon',
      assignedOn: '02/04/2025',
      actions: ['Delete'],
    },
    {
      jobReqId: 'REQ-2025-DS-006',
      jobTitle: 'Data Scientist - Computer Vision',
      deliveryUnit: 'DU6',
      location: 'Kochi',
      hiringManager: 'Arjun Menon',
      assignedOn: '02/04/2025',
      actions: ['Delete'],
    },
    {
      jobReqId: 'REQ-2025-DS-006',
      jobTitle: 'Data Scientist - Computer Vision',
      deliveryUnit: 'DU6',
      location: 'Kochi',
      hiringManager: 'Arjun Menon',
      assignedOn: '02/04/2025',
      actions: ['Delete'],
    },
  ];

  recruitersIcons = [
    { iconName: 'dashboard', size: '32px', iconColour: 'red' },
    { iconName: 'home', size: '32px', iconColour: 'blue' },
    { iconName: 'delete', size: '32px', iconColour: 'green' },
  ];

  columns = [
    { key: 'jobReqId', label: 'Requisition ID', filterable: false },
    { key: 'jobTitle', label: 'Job Title', filterable: true },
    { key: 'deliveryUnit', label: 'Delivery Unit', filterable: true },
    { key: 'location', label: 'Location', filterable: true },
    { key: 'hiringManager', label: 'Hiring Manager', filterable: true },
    { key: 'assignedOn', label: 'Uploaded On', filterable: true, type: 'date' },
    { key: 'actions', label: 'Actions', filterable: false },
  ];

  globalFilterFields = this.columns
    .map((c) => c.key)
    .filter((key) => key !== 'actions');
}