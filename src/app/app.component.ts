import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './views/auth/auth.service';
import viewSettings from './configurations/view-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-routing-sample';
  isLogged: boolean = false;

  viewSettings;
  /**
   *
   */
  constructor(private router: Router, private _authService: AuthService) {
    this.viewSettings = viewSettings;
  }

  ngOnInit(): void {
    this.checkLoggedUser();
  }

  logout() {
    this._authService.logout();
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
