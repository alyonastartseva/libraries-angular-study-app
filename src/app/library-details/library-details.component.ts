import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { libraries } from "../mock-libraries";
import { Library } from "../Classes/Library";

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.scss']
})
export class LibraryDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }

  nameLibrary = this.activatedRoute.snapshot.params["library"];

  libraries: Array<Library> = libraries;
  selectedLibrary = libraries.find(item => item.name === this.nameLibrary);
}
