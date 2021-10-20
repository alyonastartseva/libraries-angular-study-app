import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfLibrariesComponent } from './list-of-libraries/list-of-libraries.component';
import { LibraryCardComponent } from './library-card/library-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfLibrariesComponent,
    LibraryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
