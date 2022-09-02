import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-or-update-user',
  templateUrl: './create-or-update-user.component.html',
  styleUrls: ['./create-or-update-user.component.css'],
})
export class CreateOrUpdateUserComponent implements OnInit, OnDestroy {
  id: number = 0;
  Model: EmployeeModel = new EmployeeModel();
  routeSub?: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _usersService: UsersService
  ) {
    this.routeSub = this._route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  ngOnInit(): void {
    if (this.id > 0) {
      this.showUpdate(this.id);
    } else {
      this.showAdd();
    }
  }

  showAdd() {
    this.Model = new EmployeeModel();
  }

  showUpdate(id: number) {
    this.Model = this._usersService.getEmployeeById(id);
    debugger;
  }

  onBack() {
    this._router.navigate(['/users/']);
  }
}
