import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {}

  title = 'libraries-angular-test-app';
  isUserLoggedIn = false;

  ngOnInit(): void {
    let storeData = localStorage.getItem("isUserLoggedIn");

    if( storeData != null && storeData == "true") {
      this.isUserLoggedIn = true;
    }
    else {
      this.isUserLoggedIn = false;
    }
  }

}
