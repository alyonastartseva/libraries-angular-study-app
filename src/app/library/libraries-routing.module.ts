import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListOfLibrariesComponent } from "./components/list-of-libraries/list-of-libraries.component";
import { LibraryDetailsComponent } from "./components/library-details/library-details.component";
import { ListOfEmployeesComponent } from "./employees/components/list-of-employees/list-of-employees.component";
import { ListOfBooksComponent } from "./books/components/list-of-books.component";
import { AccessToLibraries } from "../core/auth/guards/access-to-library.guard";

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
      },
      {
        path: 'books',
        component: ListOfBooksComponent
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
