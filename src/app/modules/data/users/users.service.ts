import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmployeeModel } from './models/employee.model';
import data from '../../../helpers/dbSample.json';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private employeesDb = data.employees;

  constructor() {}

  public getEmployeeById(id: number): EmployeeModel {
    if (id === 0) {
      return new EmployeeModel();
    } else {
      const employee = this.employeesDb.find((x) => x.id === id);

      if (employee) {
        return new EmployeeModel(
          employee.id,
          employee.fullname,
          employee.age,
          employee.address,
          employee.phone
        );
      } else {
        return new EmployeeModel();
      }
    }
  }
}
