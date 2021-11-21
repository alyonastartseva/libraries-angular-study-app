import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOfLibrariesComponent } from "./list-of-libraries/list-of-libraries.component";
import { LibraryDetailsComponent } from "./library-details/library-details.component";

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
      path: '**',
      redirectTo: '/'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
