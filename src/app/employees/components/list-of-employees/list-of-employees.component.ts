import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IEmployee } from 'src/app/core/interfaces/employee';

import { LibraryService } from 'src/app/library/services/library.service';

@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss']
})
export class ListOfEmployeesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private libraryService: LibraryService) {}

  idLibrary: number | undefined;
  employeesOfSelectedLibrary: IEmployee[];
  loading = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap(params => params.getAll('library'))
    )
    .subscribe(data=> this.idLibrary = +data);
    console.log('idLibrary:', this.idLibrary);
  }

   goBack(): void {
    this.router.navigate([`/libraries/details/${this.idLibrary}`]);
  }
}
