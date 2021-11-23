import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { LoginComponent } from "./components/logout/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: []
})
export class AuthModule {}
