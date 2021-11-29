import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ListOfEmployeesComponent } from "./components/list-of-employees/list-of-employees.component";
import { SharedModule } from "src/app/shared/shared.module";

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
