import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILibrary } from "../interfaces/Library";
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.scss']
})
export class LibraryDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.getLibraryById();
  }

  selectedLibrary: ILibrary;

  getLibraryById(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('library')!, 10);
    this.libraryService.getLibrary(id).subscribe(selectedLibrary => this.selectedLibrary = selectedLibrary)
  }
}
