import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ILibrary } from '../../core/interfaces/Library';
import { IEmployee } from 'src/app/core/interfaces/Employee';
import { API_SERVER, API_LIBRARIES, API_EMPLOYEES } from 'src/app/core/constants/api';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) {}

  librariesUrl = API_SERVER + API_LIBRARIES;
  employeesUrl = API_SERVER + API_EMPLOYEES;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getLibraries(): Observable<ILibrary[]> {
    console.log(this.librariesUrl);
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
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<IEmployee[]>(url);
  }

  addEmployee(id: string, employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(`${this.employeesUrl}/${id}`, employee, this.httpOptions);
  }
}


