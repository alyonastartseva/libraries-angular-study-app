import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './core/auth/auth-routing.module';
import { EmployeesRoutingModule } from './employees/employees-routing.module';
import { LibrariesRoutingModule } from './library/libraries-routing.module';

const routes: Routes = [
    // {
    //   path: '**',
    //   redirectTo: 'login'
    // }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    LibrariesRoutingModule,
    EmployeesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
