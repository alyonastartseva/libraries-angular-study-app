import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {

  title = 'libraries-angular-test-app';

  isUserLoggedIn = false;

  ngOnInit(): void {
    this.checkAndChangeLoginState();
  }

  ngDoCheck(): void {
    this.checkAndChangeLoginState();
  }

  checkAndChangeLoginState(): void {
    let storeData = localStorage.getItem("isUserLoggedIn");

    if( storeData != null && storeData == "true") {
      this.isUserLoggedIn = true;
    }
    else {
      this.isUserLoggedIn = false;
    }
  }
}
