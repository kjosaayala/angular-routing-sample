import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ActivateRoute } from '../../helpers/activate-route';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [ActivateRoute],
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
