import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdashboardComponent } from './components/empdashboard/empdashboard.component';

const routes: Routes = [
  {
    path: '',
    component: EmpdashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
