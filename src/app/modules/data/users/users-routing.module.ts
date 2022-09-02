import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { ActivateRoute } from '../../../helpers/activate-route';
import { CreateOrUpdateUserComponent } from './create-or-update-user/create-or-update-user.component';

const routes: Routes = [
  { path: "", component: ListUsersComponent, canActivate: [ActivateRoute] },
  {
    path: "create",
    component: CreateOrUpdateUserComponent,
    canActivate: [ActivateRoute],
  },
  {
    path: "update/:id",
    component: CreateOrUpdateUserComponent,
    canActivate: [ActivateRoute],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
