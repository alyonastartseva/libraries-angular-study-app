import { Component } from '@angular/core';

import { Library } from "./Classes/Library";
import { libraries } from "./mock-libraries";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libraries-angular-test-app';

  librariesArray: Library[] = libraries;

  /*Modal*/
  newLibrary: Library = new Library("", "", "", "", "");

  addLibrary() {
    this.librariesArray.push(new Library(this.newLibrary.name, this.newLibrary.locale, this.newLibrary.address, this.newLibrary.organizationName, this.newLibrary.description));
    console.log(this.librariesArray)
  }

}
