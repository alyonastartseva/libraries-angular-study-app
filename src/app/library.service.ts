import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {Library} from "./Classes/Library";
import {libraries} from "./mock-libraries";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  getLibraries(): Observable<Library[]> {
    return of(libraries);
  }

  /*addLibrary(newLibrary: Library) {
    this.getLibraries().push(new Library(newLibrary.name, newLibrary.locale, newLibrary.address, newLibrary.organizationName, newLibrary.description));
  }*/
}
