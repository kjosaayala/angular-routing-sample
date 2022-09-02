import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { VeryCanActivateRoute } from '../../helpers/verify-can-active-route';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [VeryCanActivateRoute],
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
