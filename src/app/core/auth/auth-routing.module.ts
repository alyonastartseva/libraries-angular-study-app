import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule {}
