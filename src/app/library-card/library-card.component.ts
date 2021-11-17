import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Library } from "../classes/Library";

@Component({
  selector: 'app-library',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent implements OnInit {

  @Input() library: Library;
  @Output() deleteLibrary = new EventEmitter();

  ngOnInit(): void {
  }

  delete() {
    this.deleteLibrary.emit(this.library)
  }

}
