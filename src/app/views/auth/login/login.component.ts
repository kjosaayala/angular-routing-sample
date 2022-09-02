import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthUserModel } from '../models/auth-user.model';
import viewSettings from '../../../configurations/view-settings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Model: AuthUserModel = new AuthUserModel();
  hide: boolean = false;
  viewSettings;

  constructor(private _authService: AuthService, private router: Router) {
    this.viewSettings = viewSettings;
  }

  ngOnInit(): void {}

  onLogin(): void {
    let response = this._authService.login(this.Model);

    if (response !== null) {
      this.goHome();
    }
  }

  goHome(): void {
    this.router.navigate(['/home']);
    this.checkLoggedUser();
  }

  checkLoggedUser() {
    let login = this._authService.currentUserValue;

    if (!login) {
      this.viewSettings.showSideMenu = false;
    } else {
      this.viewSettings.showSideMenu = true;
    }
  }
}
