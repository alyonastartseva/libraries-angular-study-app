import { Component, OnInit } from '@angular/core';

import { ILibrary } from "../../../core/interfaces/Library";
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-list-of-libraries',
  templateUrl: './list-of-libraries.component.html',
  styleUrls: ['./list-of-libraries.component.scss']
})
export class ListOfLibrariesComponent implements OnInit  {

  constructor(private libraryService: LibraryService) {}

  libraries: ILibrary[] = [];
  newLibrary: ILibrary = {
    _id: '',
    name: '',
    address: '',
    locale: '',
  };

  loading = true;

  ngOnInit(): void {
    this.getLibraries();
  }

  getLibraries(): void {
    this.libraryService.getLibraries()
        .subscribe(libraries => {
          this.libraries = libraries;
          this.loading = false;
        });
  }

  addLibrary() {
    this.libraryService.addLibrary({ name: this.newLibrary.name,
                                     address: this.newLibrary.address,
                                     locale: this.newLibrary.locale,
                                     organizationName: this.newLibrary.organizationName,
                                     description: this.newLibrary.description }  as ILibrary)
      .subscribe(library => {
        this.libraries.push(library);
      })
  }

  delete(library: ILibrary): void {
    this.libraries = this.libraries.filter(l => l !== library);
    this.libraryService.deleteLibrary(library._id).subscribe();
  }

  // identify(index: number, library: ILibrary): number {
  //   return library.id;
  // }
}
