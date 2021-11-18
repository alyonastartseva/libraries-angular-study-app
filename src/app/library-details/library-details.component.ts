import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Library } from "../classes/Library";
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.scss']
})
export class LibraryDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.getLibraryById(this.idLibrary);
  }

  idLibrary = this.activatedRoute.snapshot.params["library"];
  selectedLibrary: Library;

  getLibraryById(id: number): void {
    this.libraryService.getLibrary(id).subscribe(selectedLibrary => this.selectedLibrary = selectedLibrary)
  }
}
