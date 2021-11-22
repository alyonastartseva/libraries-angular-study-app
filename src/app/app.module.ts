import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ListOfLibrariesComponent } from './components/list-of-libraries/list-of-libraries.component';
import { LibraryCardComponent } from './components/library-card/library-card.component';
import { LibraryDetailsComponent } from './components/library-details/library-details.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { DetailsOfLibraryGuard } from './guards/details-of-library.guard';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ListOfLibrariesComponent,
    LibraryCardComponent,
    LibraryDetailsComponent,
    LoaderComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [DetailsOfLibraryGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
