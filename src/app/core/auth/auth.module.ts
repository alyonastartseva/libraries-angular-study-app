import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { AuthService } from "./auth.service";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  exports: [
    LoginComponent,
    LogoutComponent
  ],
  providers: [AuthService]
})
export class AuthModule {}
