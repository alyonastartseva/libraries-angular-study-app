import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOfLibrariesComponent } from "./list-of-libraries/list-of-libraries.component";

const routes: Routes = [
    {
      path: '',
      component: ListOfLibrariesComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
