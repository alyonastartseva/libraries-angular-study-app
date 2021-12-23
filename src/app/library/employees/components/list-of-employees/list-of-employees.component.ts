import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  newEmployee: IEmployee = {
    _id: '',
    firstName: '',
    lastName: '',
    position: ''
  };
  updatedEmployee: IEmployee;
  edited = false;

  loading = true;

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(switchMap(params => params.getAll('id')))
      .subscribe(data => this.libraryId = data);
    this.getEmployees(this.libraryId);
  }

  getEmployeeById(id: string): void {
    this.libraryService.getEmployeeById(id)
      .subscribe(employee => {
        console.log(employee);
        this.updatedEmployee = { ...employee };
        this.loading = false;
      })
  }

  getEmployees(libraryId: string): void {
    this.libraryService.getEmployees(libraryId)
      .subscribe(employees => {
        this.employees = employees;
        this.loading = false;
      })
  }

  addEmployee() {
    this.libraryService.addEmployee(this.libraryId, {
      firstName: this.newEmployee.firstName,
      lastName: this.newEmployee.lastName,
      position: this.newEmployee.position,
      address: this.newEmployee.address,
      startedWork: this.newEmployee.startedWork
     } as IEmployee)
     .subscribe(employee => {
       this.employees.push(employee);
     })
  }

  deleteEmployee(employee: IEmployee) {
    this.employees = this.employees.filter(e => e !== employee);
    this.libraryService.deleteEmployee(this.libraryId, employee._id).subscribe();
  }

  selectEmployeeToEdit(employee: IEmployee, buttonEditEmployeeRef: HTMLButtonElement) {
    this.updatedEmployee = { ...employee };
    this.edited = true;

    buttonEditEmployeeRef.setAttribute('data-bs-toggle', 'modal');
    buttonEditEmployeeRef.setAttribute('data-bs-target', '#EditEmployeeModal');
  }

  updateEmployee() {
    this.libraryService.updateEmployee(this.updatedEmployee._id, this.updatedEmployee)
      .subscribe();
    this.getEmployees(this.libraryId);
  }
}
