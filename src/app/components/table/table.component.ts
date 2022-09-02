import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnDTO } from './dtos/column-dto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data?: any[] = [];
  @Input() columns: ColumnDTO[] = [];
  @Input() showFilter: boolean = true;
  
  @Output() onEdit: EventEmitter<any | undefined> = new EventEmitter<any>();

  dataSource = new MatTableDataSource(this.data);
  displayedColumns: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.extractColumnsToDisplay();
    this.dataSource = new MatTableDataSource(this.data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  extractColumnsToDisplay(): void {
    this.columns.forEach((element) => {
      this.displayedColumns.push(element.fieldName);
    });
  }

  onClickEdit(data: any) {
    this.onEdit.emit(data);
  }
}
