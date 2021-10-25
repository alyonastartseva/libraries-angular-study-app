import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ListOfLibrariesComponent } from './list-of-libraries/list-of-libraries.component';
import { LibraryCardComponent } from './library-card/library-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ListOfLibrariesComponent,
    LibraryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
