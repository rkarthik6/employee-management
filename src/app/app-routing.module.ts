import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeManagementComponent } from './component/employee-management/employee-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee-management', pathMatch: 'full' },
  { path: 'employee-management', component: EmployeeManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
