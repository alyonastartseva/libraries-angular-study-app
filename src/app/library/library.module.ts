import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LibraryCardComponent } from "./components/library-card/library-card.component";
import { LibraryDetailsComponent } from "./components/library-details/library-details.component";
import { ListOfLibrariesComponent } from "./components/list-of-libraries/list-of-libraries.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ListOfLibrariesComponent,
    LibraryCardComponent,
    LibraryDetailsComponent,
  ],
  exports: [
    ListOfLibrariesComponent,
    LibraryCardComponent,
    LibraryDetailsComponent
  ]
})
export class LibraryModule {}
