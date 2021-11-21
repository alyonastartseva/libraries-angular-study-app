import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOfLibrariesComponent } from "./list-of-libraries/list-of-libraries.component";
import { LibraryDetailsComponent } from "./library-details/library-details.component";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DetailsOfLibraryGuard } from './details-of-library.guard';

const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'logout',
      component: LogoutComponent
    },
    {
      path: 'libraries',
      component: ListOfLibrariesComponent,
      canActivate: [DetailsOfLibraryGuard]
    },
    {
      path: 'details/:library',
      component: LibraryDetailsComponent,
      canActivate: [DetailsOfLibraryGuard]
    },
    {
      path: '**',
      redirectTo: '/login'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
