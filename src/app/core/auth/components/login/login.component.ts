import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/core/interfaces/User';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService : AuthService, private router : Router) {}

  user: User = {
    username: '',
    password: ''
  }

  isForbidden = false;

  onClickSubmit() {
    this.authService.login(this.user.username, this.user.password)
        .subscribe(data => {
          console.log("Is Login Success: " + data);

          if (data) {
            this.router.navigate(['libraries']);
          }
          else {
            this.isForbidden = true;
          }
    });
  }

}
