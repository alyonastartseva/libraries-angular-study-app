import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ILibrary } from "../../../core/interfaces/Library";
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.scss']
})
export class LibraryDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private libraryService: LibraryService) {}

  id: string | undefined;
  selectedLibrary: ILibrary;
  loading = true;

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(switchMap(params => params.getAll('id')))
      .subscribe(data => this.id = data);
    console.log(this.id);
    this.getLibraryById(this.id);
  }

  getLibraryById(id: string | undefined): void {
    this.libraryService.getLibrary(id)
      .subscribe(selectedLibrary => {
        this.selectedLibrary = selectedLibrary;
        this.loading = false;
      })
  }

  goBack(): void {
    this.router.navigate(['libraries']);
  }
}
