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
  routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(({ id }) => {
      this.id = Number(id);

      if (this.id > 0) {
        this.showUpdate(this.id);
      } else {
        this.showAdd();
      }
    });
  }

  showAdd() {
    this.Model = new EmployeeModel();
  }

  showUpdate(id: number) {
    this.Model = this.usersService.getEmployeeById(id);
  }

  onBack() {
    this.router.navigate(['/users/']);
  }
}
