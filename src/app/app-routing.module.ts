import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './core/auth/auth-routing.module';
import { LibrariesRoutingModule } from './library/libraries-routing.module';

const routes: Routes = [
    // {
    //   path: '**',
    //   redirectTo: 'login'
    // }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always'
  }),
    AuthRoutingModule,
    LibrariesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
