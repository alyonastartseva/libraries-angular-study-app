import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { IEmployee } from 'src/app/core/interfaces/Employee';
import { LibraryService } from 'src/app/library/services/library.service';


@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss']
})
export class ListOfEmployeesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private libraryService: LibraryService) {}

  libraryId: string;
  employees: IEmployee[] = [];
  loading = true;

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(switchMap(params => params.getAll('id')))
      .subscribe(data => this.libraryId = data);
    console.log(this.libraryId);
    this.getEmployees(this.libraryId);
  }

  getEmployees(libraryId: string): void {
    this.libraryService.getEmployees(libraryId)
    .subscribe(employees => {
      this.employees = employees;
      this.loading = false;
    })
  }
}
