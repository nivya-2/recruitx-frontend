import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SharedModule } from "../shared/shared.module";
import { ButtonsComponent } from "../shared/buttons/buttons.component";
import { table } from 'console';



@Component({
  selector:'app-table',
  imports: [MatTableModule, MatSort, CommonModule, MatSortModule, MatPaginator, ButtonsComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit, AfterViewInit {

 
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [];


  @Input() content: any[] = [];
  @Input() columns: any[] = [];
 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)  sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.content);
    this.displayedColumns = this.columns.map(col => col.key);

  }


}
