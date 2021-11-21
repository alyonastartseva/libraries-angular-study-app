import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../interfaces/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) {}

  ngOnInit() {}

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
