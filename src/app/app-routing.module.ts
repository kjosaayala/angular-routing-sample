import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeryCanActivateRoute } from './helpers/verify-can-active-route';
import { LoginComponent } from './views/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
    data: { title: 'Home' },
    canActivate: [VeryCanActivateRoute],
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/data/users/users.module').then((m) => m.UserModule),
    data: { title: 'User' },
    canActivate: [VeryCanActivateRoute],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
