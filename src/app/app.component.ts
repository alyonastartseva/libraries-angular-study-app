import {Component, OnInit} from '@angular/core';

import { LibraryService } from './services/library.service';
import { Library } from "./classes/Library";

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
