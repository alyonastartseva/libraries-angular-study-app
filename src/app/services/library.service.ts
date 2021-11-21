import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ILibrary } from '../interfaces/Library';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private librariesUrl = 'api/libraries';

  getLibraries(): Observable<ILibrary[]> {
    return this.http.get<ILibrary[]>(this.librariesUrl)
      .pipe(
        catchError(this.handleError<ILibrary[]>('getLibraries', []))
      );
  }

  getLibrary(id: number): Observable<ILibrary> {
    const url = `${this.librariesUrl}/${id}`;
    return this.http.get<ILibrary>(url).pipe(
      catchError(this.handleError<ILibrary>(`getHero id=${id}`))
    );
  }

  addLibrary(library: ILibrary): Observable<ILibrary> {
    return this.http.post<ILibrary>(this.librariesUrl, library, this.httpOptions).pipe(
      catchError(this.handleError<ILibrary>('addHero'))
    );
  }

  deleteHero(id: number): Observable<ILibrary> {
    const url = `${this.librariesUrl}/${id}`;

    return this.http.delete<ILibrary>(url, this.httpOptions).pipe(
      catchError(this.handleError<ILibrary>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}


