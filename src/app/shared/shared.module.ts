import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LoaderComponent } from "./loader/loader.component";
import { ModalComponent } from "./modal/modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ModalComponent,
    LoaderComponent
  ],
  exports: [
    ModalComponent,
    LoaderComponent
  ]
})
export class SharedModule {}
