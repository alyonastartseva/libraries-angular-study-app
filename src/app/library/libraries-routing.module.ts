import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListOfLibrariesComponent } from "./components/list-of-libraries/list-of-libraries.component";
import { AccessToLibraries } from "../core/auth/guards/access-to-library.guard";
import { LibraryDetailsComponent } from "./components/library-details/library-details.component";
import { ListOfEmployeesComponent } from "./employees/components/list-of-employees/list-of-employees.component";

const routes: Routes = [
  {
    path: 'libraries',
    component: ListOfLibrariesComponent,
    canActivate: [AccessToLibraries]
  },
  {
    path: 'libraries/details/:library',
    component: LibraryDetailsComponent,
    canActivate: [AccessToLibraries],
    children: [
      {
        path: 'employees',
        component: ListOfEmployeesComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [AccessToLibraries]
})
export class LibrariesRoutingModule {}
