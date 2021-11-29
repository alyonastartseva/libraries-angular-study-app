import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ILibrary } from '../../core/interfaces/Library';
import { LIBRARIES_URL } from 'src/app/core/constants/api';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {}

  librariesUrl = LIBRARIES_URL;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getLibraries(): Observable<ILibrary[]> {
    return this.http.get<ILibrary[]>(this.librariesUrl);
  }

  getLibrary(id: number | undefined): Observable<ILibrary> {
    const url = `${this.librariesUrl}/${id}`;
    return this.http.get<ILibrary>(url);
  }

  addLibrary(library: ILibrary): Observable<ILibrary> {
    return this.http.post<ILibrary>(this.librariesUrl, library, this.httpOptions);
  }

  deleteHero(id: number): Observable<ILibrary> {
    const url = `${this.librariesUrl}/${id}`;
    return this.http.delete<ILibrary>(url, this.httpOptions);
  }
}


