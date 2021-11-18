import { Component, OnInit } from '@angular/core';

import { Library } from "../classes/Library";
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-list-of-libraries',
  templateUrl: './list-of-libraries.component.html',
  styleUrls: ['./list-of-libraries.component.scss']
})
export class ListOfLibrariesComponent implements OnInit  {

  constructor(private libraryService: LibraryService) {}

  libraries: Library[] = [];
  newLibrary: Library = new Library("", "", "", "", "");

  ngOnInit(): void {
    this.getLibraries();
  }

  getLibraries(): void {
    this.libraryService.getLibraries()
        .subscribe(libraries => this.libraries = libraries);
  }

  addLibrary() {
    this.libraryService.addLibrary(this.newLibrary)
      .subscribe(library => {
        this.libraries.push(new Library(library.name, library.locale, library.address, library.organizationName, library.description));
      })
  }

  delete(library: Library): void {
    this.libraries = this.libraries.filter(l => l !== library);
    this.libraryService.deleteHero(library.id).subscribe();
  }
}
