import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOfLibrariesComponent } from "./list-of-libraries/list-of-libraries.component";
import { LibraryDetailsComponent } from "./library-details/library-details.component";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
    {
      path: '',
      component: ListOfLibrariesComponent
    },
    {
      path: 'details/:library',
      component: LibraryDetailsComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'logout',
      component: LogoutComponent
    },
    {
      path: '**',
      redirectTo: '/'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
