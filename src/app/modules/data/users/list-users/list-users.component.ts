import { Component, OnInit } from '@angular/core';
import { ColumnDTO } from 'src/app/components/table/dtos/column-dto';
import { EmployeeModel } from '../models/employee.model';
import data from '../../../../helpers/dbSample.json';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  usersDb = data.employees;
  empleados: EmployeeModel[] | any[] = this.usersDb;

  columns: ColumnDTO[] = [
    {
      fieldName: 'id',
      label: 'No.',
      actionEdit: true,
    },
    {
      fieldName: 'fullname',
      label: 'Nombre',
    },
    {
      fieldName: 'age',
      label: 'Edad',
    },
    {
      fieldName: 'address',
      label: 'Direccion',
    },
    {
      fieldName: 'phone',
      label: 'Telefono',
    },
  ];
  dataSource = new MatTableDataSource(this.empleados);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickNew() {
    this.router.navigate(["/users/create"]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  update(data: EmployeeModel | any) {
    if (data) {
      this.router.navigate(['/users/update', data.id]);
    }
  }

  create(data: EmployeeModel | any) {
    if (data) {
      this.router.navigate(['/users/create', data.id]);
    }
  }
}
