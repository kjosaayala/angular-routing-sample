import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthUserModel } from './models/auth-user.model';
import data from '../../helpers/dbSample.json';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedUserSubject: BehaviorSubject<AuthUserModel | any>;
  public loggedUser: Observable<AuthUserModel | any>;

  private usersDb = data.users;

  constructor(private router: Router) {
    let currentUser = localStorage.getItem('loggedUser');
    this.loggedUserSubject = new BehaviorSubject<AuthUserModel | any>(
      currentUser ? JSON.parse(currentUser) : null
    );
    this.loggedUser = this.loggedUserSubject.asObservable();
  }

  public get currentUserValue(): AuthUserModel | undefined {
    return this.loggedUserSubject ? this.loggedUserSubject.value : undefined;
  }

  login(userAuth: AuthUserModel): any {
    let userLogin = this.usersDb.find((x) => x.username === userAuth.username);
debugger;
    if (userLogin) {
      if (userLogin.password === userAuth.password) {
        userAuth.id = userLogin.id;
        localStorage.setItem('loggedUser', JSON.stringify(userAuth));
        this.loggedUserSubject.next(userAuth);
        return userAuth;
      } else {
        console.log('Wrong Password');
        return null;
      }
    } else {
      console.log("User doesn't exist");
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem('loggedUser');
    this.loggedUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
