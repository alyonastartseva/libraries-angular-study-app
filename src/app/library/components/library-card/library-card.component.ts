import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ILibrary } from "../../../core/interfaces/Library";

@Component({
  selector: 'app-library',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent {

  @Input() library: ILibrary;
  @Output() deleteLibrary = new EventEmitter();

  delete(): void {
    this.deleteLibrary.emit(this.library)
  }

}
