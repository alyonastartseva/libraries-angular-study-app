import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ILibrary } from "../../interfaces/Library";

@Component({
  selector: 'app-library',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent implements OnInit {

  @Input() library: ILibrary;
  @Output() deleteLibrary = new EventEmitter();

  ngOnInit(): void {
  }

  delete(): void {
    this.deleteLibrary.emit(this.library)
  }

}
