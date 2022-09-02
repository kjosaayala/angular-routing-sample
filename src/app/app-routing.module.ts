import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateRoute } from './helpers/activate-route';
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
    canActivate: [ActivateRoute],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
