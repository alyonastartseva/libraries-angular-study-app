import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Library } from '../classes/Library';
import { libraries } from '../shared/mock-libraries';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private librariesUrl = 'api/libraries';

  getLibraries(): Observable<Library[]> {
    return this.http.get<Library[]>(this.librariesUrl)
      .pipe(
        catchError(this.handleError<Library[]>('getLibraries', []))
      );
  }

  getLibrary(id: number): Observable<Library> {
    const url = `${this.librariesUrl}/${id}`;
    return this.http.get<Library>(url).pipe(
      catchError(this.handleError<Library>(`getHero id=${id}`))
    );
  }

  addLibrary(library: Library): Observable<Library> {
    return this.http.post<Library>(this.librariesUrl, library, this.httpOptions).pipe(
      catchError(this.handleError<Library>('addHero'))
    );
  }

  deleteHero(id: number): Observable<Library> {
    const url = `${this.librariesUrl}/${id}`;

    return this.http.delete<Library>(url, this.httpOptions).pipe(
      catchError(this.handleError<Library>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}


