import {Component, OnInit} from '@angular/core';

import { LibraryService } from './services/library.service';
import { ILibrary } from "./interfaces/Library";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {}

  title = 'libraries-angular-test-app';
}
