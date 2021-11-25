import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListOfEmployeesComponent } from "./components/list-of-employees/list-of-employees.component";

const routes: Routes = [
  {
    path: 'libraries/details/:library/employees',
    component: ListOfEmployeesComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EmployeesRoutingModule {}
