import { Component, OnInit } from '@angular/core';

import { Library } from "../classes/Library";
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-list-of-libraries',
  templateUrl: './list-of-libraries.component.html',
  styleUrls: ['./list-of-libraries.component.scss']
})
export class ListOfLibrariesComponent implements OnInit {

  constructor(private libraryService: LibraryService) {}

  libraries: Library[] = [];

  ngOnInit(): void {
    this.getLibraries();
  }

  getLibraries(): void {
    this.libraryService.getLibraries()
        .subscribe(libraries => this.libraries = libraries);
  }

  delete(library: Library): void {
    this.libraries = this.libraries.filter(l => l !== library);
    this.libraryService.deleteHero(library.id).subscribe();
  }
}
