import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../views/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class ActivateRoute implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: { },
      });
      return false;
    }
  }
}
