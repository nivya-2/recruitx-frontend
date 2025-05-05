import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-table',
  imports: [MatTableModule,MatSort,CommonModule,MatSortModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
'id', 'roleTitle', 'deliveryUnit', 'location', 'openPositions', 'createdDate', 'hiringManager', 'actions'  ];
  columnLabels: { [key: string]: string } = {
    id: 'ID',
    roleTitle: 'Role Title',
    deliveryUnit: 'Delivery Unit',
    location: 'Location',
    openPositions: 'No. Of Open Positions',
    createdDate: 'Created Date',
    hiringManager: 'Hiring Manager',
    actions: 'Actions'
  };
  dataSource!: MatTableDataSource<any>;

  @Input() content: any[] = [];


  @ViewChild(MatSort)  sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;

  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.content);
  }


}
