import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ILibrary } from '../../core/interfaces/Library';
import { API_SERVER, API_LIBRARIES } from 'src/app/core/constants/api';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {}

  librariesUrl = API_SERVER + API_LIBRARIES;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getLibraries(): Observable<ILibrary[]> {
    console.log(this.librariesUrl);
    return this.http.get<ILibrary[]>(this.librariesUrl);
  }

  getLibrary(id: string | undefined): Observable<ILibrary> {
    const url = `${this.librariesUrl}/${id}`;
    return this.http.get<ILibrary>(url);
  }

  addLibrary(library: ILibrary): Observable<ILibrary> {
    return this.http.post<ILibrary>(this.librariesUrl, library, this.httpOptions);
  }

  deleteLibrary(id: string): Observable<ILibrary> {
    const url = `${this.librariesUrl}/${id}`;
    return this.http.delete<ILibrary>(url, this.httpOptions);
  }
}


