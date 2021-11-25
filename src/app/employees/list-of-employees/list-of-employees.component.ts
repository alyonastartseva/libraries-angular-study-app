import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/core/interfaces/employee';

import { LibraryService } from 'src/app/library/services/library.service';

@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss']
})
export class ListOfEmployeesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private libraryService: LibraryService, private router: Router) {}

  employeesOfSelectedLibrary: Employee[];
  loading = true;

  ngOnInit(): void {
    this.getEmployees();
    
    console.log(this.employeesOfSelectedLibrary);
  }

  getEmployees(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('library')!, 10);
    this.libraryService.getLibrary(id)
      .subscribe(selectedLibrary => {
        this.employeesOfSelectedLibrary = selectedLibrary.employees;
        this.loading = false;
      })
  }
}
