import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {

  title = 'libraries-angular-test-app';
  isUserLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    let storeData = localStorage.getItem("isUserLoggedIn");

    if( storeData != null && storeData == "true") {
      this.isUserLoggedIn = true;
    }
    else {
      this.isUserLoggedIn = false;
    }
  }

  ngDoCheck(): void {
    let storeData = localStorage.getItem("isUserLoggedIn");

    if( storeData != null && storeData == "true") {
      this.isUserLoggedIn = true;
    }
    else {
      this.isUserLoggedIn = false;
    }
  }

}
