import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ListOfBooksComponent } from "./components/list-of-books.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ListOfBooksComponent
  ],
  exports: [
    ListOfBooksComponent
  ],
})
export class BooksModule {}
