import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { VeryCanActivateRoute } from '../../../helpers/verify-can-active-route';
import { CreateOrUpdateUserComponent } from './create-or-update-user/create-or-update-user.component';

const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent,
    canActivate: [VeryCanActivateRoute],
  },
  {
    path: 'create',
    component: CreateOrUpdateUserComponent,
    canActivate: [VeryCanActivateRoute],
  },
  {
    path: 'update/:id',
    component: CreateOrUpdateUserComponent,
    canActivate: [VeryCanActivateRoute],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
