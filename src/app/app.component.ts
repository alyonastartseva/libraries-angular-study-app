import {Component, OnInit} from '@angular/core';

import { LibraryService } from "./library.service";

import { Library } from "./Classes/Library";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private libraryService: LibraryService) {
  }

  ngOnInit(): void {
    this.getLibraries();
  }

  title = 'libraries-angular-test-app';

  librariesArray: Library[] = [];
  newLibrary: Library = new Library("", "", "", "", "");

  getLibraries() {
    this.libraryService.getLibraries()
      .subscribe(librariesArray => this.librariesArray = librariesArray);
  }

  addLibrary() {
    console.log(this.newLibrary);
    /*this.libraryService.addLibrary(this.newLibrary);*/
  }
}
