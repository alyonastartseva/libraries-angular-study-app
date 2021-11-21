import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ILibrary } from "../interfaces/Library";
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.scss']
})
export class LibraryDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private libraryService: LibraryService, private router: Router) {}

  ngOnInit(): void {
    this.getLibraryById();
  }

  selectedLibrary: ILibrary;
  loading = true;

  getLibraryById(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('library')!, 10);
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
