import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ILibrary } from '../../core/interfaces/Library';
import { IEmployee } from 'src/app/core/interfaces/Employee';
import { IBook } from 'src/app/core/interfaces/Book';
import { API_LIBRARIES, API_EMPLOYEES, API_BOOKS } from 'src/app/core/constants/api';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {}

  librariesUrl = API_LIBRARIES;
  employeesUrl = API_EMPLOYEES;
  booksUrl = API_BOOKS;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getLibraries(): Observable<ILibrary[]> {
    return this.http.get<ILibrary[]>(this.librariesUrl);
  }

  getLibrary(id: string): Observable<ILibrary> {
    const url = `${this.librariesUrl}/${id}`;
    return this.http.get<ILibrary>(url);
  }

  addLibrary(library: ILibrary): Observable<ILibrary> {
    return this.http.post<ILibrary>(this.librariesUrl, library, this.httpOptions);
  }

  updateLibrary(id: string, library: ILibrary): Observable<ILibrary> {
    const url = `${this.librariesUrl}/${id}`;
    return this.http.put<ILibrary>(url, library, this.httpOptions)
  }

  deleteLibrary(id: string): Observable<ILibrary> {
    const url = `${this.librariesUrl}/${id}`;
    return this.http.delete<ILibrary>(url, this.httpOptions);
  }

  getEmployees(id: string): Observable<IEmployee[]> {
    const url = `${this.librariesUrl}/employees/${id}`;
    return this.http.get<IEmployee[]>(url);
  }

  getBooks(id: string): Observable<IBook[]> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<IBook[]>(url);
  }

  addEmployee(id: string, employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(`${this.employeesUrl}/${id}`, employee, this.httpOptions);
  }

  deleteEmployee(libraryId: string, id: string): Observable<IEmployee> {
    const url = `${this.employeesUrl}/${libraryId}/${id}`;
    return this.http.delete<IEmployee>(url, this.httpOptions);
  }
}


