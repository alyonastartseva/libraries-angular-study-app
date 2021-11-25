import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";


import { SharedModule } from "../shared/shared.module";
import { ListOfEmployeesComponent } from "./components/list-of-employees/list-of-employees.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ListOfEmployeesComponent
  ],
  exports: [
    ListOfEmployeesComponent
  ]
})
export class EmployeesModule {}
