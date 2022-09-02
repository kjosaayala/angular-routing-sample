import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateOrUpdateUserComponent } from './create-or-update-user/create-or-update-user.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [ListUsersComponent, CreateOrUpdateUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
})
export class UserModule {}
