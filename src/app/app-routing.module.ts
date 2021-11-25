import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './core/auth/auth-routing.module';
import { LibraryRoutingModule } from './library/library-routing.module';

const routes: Routes = [
    {
      path: '**',
      redirectTo: 'login'
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    LibraryRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
