import { Component, OnInit } from '@angular/core';

import { Library } from "../Classes/Library";
import { libraries } from "../mock-libraries";

@Component({
  selector: 'app-list-of-libraries',
  templateUrl: './list-of-libraries.component.html',
  styleUrls: ['./list-of-libraries.component.scss']
})
export class ListOfLibrariesComponent implements OnInit {

  libraries: Array<Library> = libraries;

  ngOnInit(): void {
  }

  addLibrary() {
    console.log(`Библиотека добавлена`)
  }

  removeLibrary(name: string) {
    console.log(`Библиотека ${name} удалена`)
  }

}
