import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ListOfLibrariesComponent } from './library/components/list-of-libraries/list-of-libraries.component';
import { LibraryCardComponent } from './library/components/library-card/library-card.component';
import { LibraryDetailsComponent } from './library/components/library-details/library-details.component';
import { InMemoryDataService } from './core/in-memory-data.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { DetailsOfLibraryGuard } from './library/guards/details-of-library.guard';
import { AuthModule } from './core/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ListOfLibrariesComponent,
    LibraryCardComponent,
    LibraryDetailsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AuthModule
  ],
  providers: [DetailsOfLibraryGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
